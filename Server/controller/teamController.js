// const startupIdeaSchema = require("./../models/startup_idea")
const userDetails = require("./../models/user_details")
const userSchema = require("./../models/user")
const teamMemberSchema = require('./../models/team_members')
const teamDetailsSchema = require('./../models/team_details')

const ObjectId = require('mongodb').ObjectID;
const apiResponse = require('./../helpers/apiResponse')
const utility = require('./../helpers/utility')

// this method create new record in tbl
module.exports.addUserDetails = async (req, res) => {
    // console.log(req.body)
    // console.log(req.tokenParseData);

    let user_details = await new userDetails ({
        address: req.body.address,
        adharCardNo: req.body.adharCardNo,
        createdDate: utility.currentDate()
    })
    // apiResponse.successResponse(res, "MSG")
    user_details
    .save()
    .then(data => {
        userSchema
        .findOneAndUpdate({_id:req.tokenParseData._id}, 
         {userDetails: new ObjectId(data._id)}, null, function(err, docs) {
            if (err){ 
               apiResponse.ErrorResponse(res, err)
            } 
            else{ 
                apiResponse.successResponse(res, "User details Updated")
            } 
         })
    })
    .catch(err => {apiResponse.ErrorResponse(res, err)})
} 

module.exports.getUserDetails = async (req, res) => {
    let user = req.tokenParseData

    userSchema
    .find({_id: {$eq:user._id} })
    .populate({path: "userDetails"})
    .select("userDetails")
    .then(data => { apiResponse.successResponseWithData(res, "Add Account", data)})
    .catch(err => { apiResponse.ErrorResponse(res, err)})
}

module.exports.addTeamMembers = async (req, res) => {
    let user = req.tokenParseData
    // console.log(req.body);

    let team = await new teamMemberSchema ({
        name : req.body.name,
        username: req.body.username,
        password:  req.body.password,
        email: req.body.email,
        role: req.body.role,
        mobile: req.body.mobile,
        owner: new ObjectId(user._id)
    })

     team
    .save()
    .then(data => { 
        if(data) {
            // console.log(data)
            // return commanController.findAndUpdateUser(res, userSchema, user._id, data._id)
            userSchema
            .findOneAndUpdate(
                {_id: {$eq: user._id} },  
                {"$push": { "teamMembers": new ObjectId(data._id) }}, 
                null, 
                function (err, docs) { 
                if (err){ 
                    console.log(err) 
                } 

                if(docs){
                    // console.log("Original Doc : ",docs); 
                    console.log(docs);
                    apiResponse.successResponse(res, "team Added")
                } else {
                    apiResponse.ErrorResponse(res, "Error")
                }
            });

        } else {
            apiResponse.ErrorResponse(res, "Error")
        }
        
    })
    .catch(err => { 
        console.log(err);
        apiResponse.ErrorResponse(res, err) })
}

module.exports.addTeamDetails = async (req, res) => { 
    let {teamName, topic, email } = req.body
    let user = req.tokenParseData
    console.log(req.body);

    let team = await new teamDetailsSchema ({
        teamName: teamName,
        topic: topic,
        email: email,
        owner: new ObjectId(user._id)
    })

    team
    .save()
    .then( data => {

        userSchema
        .findOneAndUpdate(
            {_id: {$eq: user._id} },  
            { "teamDescrption": new ObjectId(data._id) }, 
            null, 
            function (err, docs) { 
            if (err){ 
                console.log(err) 
            } 

            if(docs){
                // console.log("Original Doc : ",docs); 
                console.log(docs);
                apiResponse.successResponseWithData(res, "Team Details Added", data)
            } else {
                apiResponse.ErrorResponse(res, "Error")
            }
        });
        // apiResponse.successResponseWithData(res, "Team Details Added", data)
    })
    .catch( err => { apiResponse.ErrorResponse(res, err) })

}

module.exports.getAllTeamMember  = async (req, res) => {
    let user = req.tokenParseData

    userSchema
    .find({_id: {$eq: user._id} })
    .populate({ path: "teamMembers" })
    .select("teamMembers")
    .then(data => { apiResponse.successResponseWithData(res, "TeamMates Details Fetched", data)})
    .catch(err => { apiResponse.ErrorResponse(res, err)})
}

module.exports.getDetails = async (req, res) => {
    let user = req.tokenParseData


}

module.exports.getOne = async (req, res) => {

}

