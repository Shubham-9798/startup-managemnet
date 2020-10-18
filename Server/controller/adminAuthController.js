const apiResponse = require('./../helpers/apiResponse')
const utility = require('./../helpers/utility')
const jwtUtility = require('./../middlewares/jwt')
let ObjectId = require('mongodb').ObjectID;

const adminSchema = require("./../models/admin")
const refreshTokenSchema = require("./../models/refresh_token")
const masterRoleSchema = require("./../models/master_roles")
const startupIdeaSchema = require("./../models/startup_idea")
const userSchema = require("./../models/user")

module.exports.registerAdmin = async (req, res) => {
    let Admin = await new adminSchema({
        username : req.body.username,
        password: req.body.password,
        role: req.body.role,
        createdDate: utility.currentDate()
    })
    
    Admin.save()
    .then((data) => {
        return apiResponse.successResponseWithData(res, "User Registered", data)
    })
    .catch((err) => {
        return apiResponse.ErrorResponse(res, err)
    })
}

module.exports.login = async (req, res) => {
    console.log(req)
    let {username, password} = req.body

    adminSchema.findOne({username: {$eq:username} }, 
        {username:1, password:1, role:1, isVerified:1}, function (err, docs) { 

        if (err){ 
            return apiResponse.ErrorResponse(res, err)
        } 
        else{ 
            if(docs === null)
              return apiResponse.notFoundResponse(res, "Not Exists")
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

module.exports.getAdminList = async (req, res) => {
    let slt = {select: "type _id"}

    await adminSchema
    .find()
    .populate({path:"role", model: "MasterRole",...slt})
    .exec()
    .then((data) => {
        return apiResponse.successResponseWithData(res, "User Registered", data)
    })
    .catch((err) => {
        console.log(err)
        return apiResponse.ErrorResponse(res, err)
    })
}
