const apiResponse = require('./../helpers/apiResponse')
const utility = require('./../helpers/utility')
let ObjectId = require('mongodb').ObjectID;

const startupIdeaSchema = require("./../models/startup_idea")
const adminSchema = require("./../models/admin")
const masterEvaluationStatus = require("./../models/master_evaluation_status")
const evaluationSchema = require("./../models/evaluation")



module.exports.evalute = async (req, res) => {
    let obj = req.body
    console.log(obj.comment);

    let evaluation = await new evaluationSchema ({
        teamId: new ObjectId(obj.teamId),
        submitedById: new ObjectId(obj.submitedById),
        adminEvaluation: new ObjectId(req.tokenParseData._id),
        optionalEvaluation:new ObjectId(obj.optionalId),
        evaluationStatus:new ObjectId(obj.statusId),
        comments:[{
            comment: obj.comment,
            tag: "tag"
        }],
        isDeleted: false,
        updatedDate: utility.currentDate(),
        createdDate: utility.currentDate()
    })

    evaluation.save()
    .then(data => apiResponse.successResponse(res, "Evaluation Done"))
    .catch(err => apiResponse.ErrorResponse(res, err))
}

module.exports.findAllEvaluationByTeamID = async (req, res) => {
    let teamId =  req.params.id
    // console.log(evaluationId);

    evaluationSchema
    .find( {teamId: {$eq:teamId} })
    .populate([
        {path: "teamId"}, 
        {path: "adminEvaluation"}, 
        { path: "evaluationStatus"}
    ])
    .exec()
    .then(data =>{ apiResponse.successResponseWithData(res, "Data Fetched", data)})
    .catch(err => { apiResponse.ErrorResponse(res, err)})
}

module.exports.findOneByEvaluationId = async (req, res) => {
    let evaluationId =  req.params.id
    console.log(evaluationId);

    evaluationSchema
    .find( {_id: {$eq:evaluationId} })
    .populate([
        {path: "teamId"}, 
        {path: "adminEvaluation"}, 
        { path: "evaluationStatus"}
    ])
    .exec()
    .then(data =>{ apiResponse.successResponseWithData(res, "Data Fetched", data)})
    .catch(err => { apiResponse.ErrorResponse(res, err)})
}

module.exports.findAllEvaluationInDetails = async (req, res) => {
    let evaluationId =  req.params.id
    console.log(evaluationId);

    evaluationSchema
    .find()
    .populate([
        {path: "teamId"}, 
        {path: "adminEvaluation"}, 
        { path: "evaluationStatus"}
    ])
    .exec()
    .then(data =>{ apiResponse.successResponseWithData(res, "Data Fetched", data)})
    .catch(err => { apiResponse.ErrorResponse(res, err)})
}

module.exports.findAllEvaluationCompressed = async (req, res) => {
    let evaluationId =  req.params.id
    console.log(evaluationId);

    evaluationSchema
    .find()
    .populate([
        {path: "teamId"}, 
        {path: "adminEvaluation"}, 
    ])
    .exec()
    .then(data =>{ apiResponse.successResponseWithData(res, "Data Fetched", data)})
    .catch(err => { apiResponse.ErrorResponse(res, err)})
}

// add comment using _id
module.exports.addComment = async (req, res) => {
    let {evaluationId, comment } = req.body
    let commentObj = {
        comments: comment,
        tag: "tag"
    }

    evaluationSchema.findOneAndUpdate(
       {_id: {$eq:evaluationId} },  
        {"$push": { "comments": commentObj }}, 
        null, 
        function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            // console.log("Original Doc : ",docs); 
            apiResponse.successResponse(res, "Comment Added")
        } 
    });

}

// add comment using _id
module.exports.updateEvalution = async (req, res) => {

}

module.exports.manageEvaluation = async (req, res) => {

}

module.exports.verifyUserAdmin = async (req, res) => {

}

module.exports.verifyUserTeams = async (req, res) => {

}