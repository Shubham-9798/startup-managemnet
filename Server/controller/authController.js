const userSchema = require("./../models/user")
let ObjectId = require('mongodb').ObjectID;
const user_details = require("./../models/user_details")
const refreshTokenSchema = require("./../models/refresh_token")
const apiResponse = require('./../helpers/apiResponse')
const jwtUtility = require('./../middlewares/jwt')
const utility = require('./../helpers/utility')


module.exports.register = async (req, res) => {

        let User = await new userSchema ({
            username : req.body.username,
            password: req.body.password,
            role: req.body.role,
            createdDate: utility.currentDate()
        })
        
         User.save()
        .then((data) => {
            return apiResponse.successResponseWithData(res, "User Registered", data)
        })
        .catch((err) => {
            return apiResponse.ErrorResponse(res, err)
        })

}

module.exports.checkUniqueUsernameExist = async (req, res) => {
    userSchema.findOne({username: {$eq:req.body.name} }, function (err, docs) { 
        if (err){ 
            return apiResponse.ErrorResponse(res, err)
        } 
        else{ 
            if(docs === null)
              return apiResponse.notFoundResponse(res, "Not Exists")
            else
              return apiResponse.FoundResponse(res)

        } 
    }); 
}

module.exports.login = async (req, res) => {
    // console.log(req)
    let {username, password} = req.body

    userSchema.findOne({username: {$eq:username} }, 
        {username:1, password:1, role:1, isVerified:1}, function (err, docs) { 

        if (err){ 
            return apiResponse.ErrorResponse(res, err)
        } 
        else{ 
            if(docs === null){
              console.log("not found")
              return apiResponse.notFoundResponse(res, "Not Exists")}
            else
              {
                  if(docs.password === password)
                   { 

                    const tokenObj =  utility.tokenObject(docs)
                    const accessToken =  jwtUtility.generateAccessToken(tokenObj) // jwtUtility.jwt.sign(tokenObj, secret, {expiresIn: '150s'})
                    let user = {
                        username: docs.username,
                        role: docs.role,
                        isAdmin: false
                     }

                    // console.log(tokenObj)
                    refreshTokenSchema.findOne({__id: {$eq:tokenObj._id}})
                    .then((data) => {
                        // console.log(data)
                        const refreshToken = jwtUtility.generateRefreshToken(tokenObj)

                        if(data === null) {
                            let token = new refreshTokenSchema ({
                                __id : tokenObj._id,
                                refresh_token: refreshToken,
                                createdDate: utility.currentDate()
                               })
                             // jwtUtility.jwt.sign(tokenObj, refreshSecret)
                            
                            token.save()
                            .then((data) => {
                                // username, role.
                                return apiResponse.sendToken(res, accessToken, data.refresh_token, user)
                            })
                            .catch((err) => {
                                return apiResponse.ErrorResponse(res, err)
                            })
                        }
                        else
                        apiResponse.sendToken(res, accessToken, data.refresh_token, user)
                        
                    })
                       

 

                    }      
                  else
                   {  apiResponse.notFoundResponse(res, "Username or Password is invalid")}
              }

        } 
    }).catch( err => apiResponse.ErrorResponse(res, err)); 
}

module.exports.update = async(req, res) => {
    return apiResponse.successResponse(res, req.user)
}

module.exports.token = async (req, res) => {
    const refreshToken = req.body.token

    if(refreshToken === null) return apiResponse.unauthorizedResponse(res, "Empty Token")

    jwtUtility.jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET , (err, userData) => {
        if(err) apiResponse.ErrorResponse(res, "Error")
        if(userData === null || userData === undefined) apiResponse.unauthorizedResponse(res, "Error")
         // console.log(userData,"-------------")

        userSchema.findOne({_id: {$eq:userData._id} })
        .then((docs) => {
            const tokenObj = utility.tokenObject(docs)
            // console.log(tokenObj)
            if(docs._id != '') {
                const accessToken = jwtUtility.generateAccessToken(userData)
                // console.log(docs)
                apiResponse.sendAccessToken(res, accessToken)
            } else {
                apiResponse.unauthorizedResponse(res, "Refresh Token Expired")
            }
        })
        .catch((err) => {
            return apiResponse.ErrorResponse(res, err)
        })
         

	})
    // const userData = new Promise((resolve, reject) => {
    //     resolve(jwtUtility.verifyToken(refreshToken))
    // }) 

    // userData
    // .then(data =>{
    //     console.log("------------------")
    //     console.log(data)
    // })
    // .then(()=>{
    //     apiResponse.successResponse(res, "success")
    // })

    // user.findOne({_id: {$eq:userData._id} })
    // .then((u) => {
    //     console.log(u)
    // })
    
}

module.exports.getAllUser =async (req, res) => {
    userSchema.find()
    .then(data => apiResponse.successResponseWithData(res,data))
    .catch(err => apiResponse.ErrorResponse(res, err))
}

module.exports.logout = async(req, res) => {
    // const authHeader = req.headers.authorization
    // const token = authHeader && authHeader.split(' ')[1]
    console.log(req.user)
    
    
    refreshTokenSchema.deleteOne({'__id': req.user._id},
    function(err) {
    if(err) apiResponse.ErrorResponse(res, "Error v")
        apiResponse.successResponse(res, "Logout Successfully")
    })
}
 
module.exports.verifyToken = async (req, res) => {
    const refreshToken = req.body.token

    if(refreshToken === null) return apiResponse.unauthorizedResponse(res, "Empty Token")

    jwtUtility.jwt.verify(refreshToken, process.env.ACCESS_TOKEN_SECRET , (err, userData) => {
        if(err) apiResponse.ErrorResponse(res, "Error")
        if(userData === null || userData === undefined) apiResponse.unauthorizedResponse(res, "Error")
        // console.log(req.user)
        apiResponse.successResponse(res, userData)
	})
    
}