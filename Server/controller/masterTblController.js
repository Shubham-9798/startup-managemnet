let ObjectId = require('mongodb').ObjectID;
const masterIdeaDomainSchema = require("./../models/master_idea_domain")
const masterIdeaSatusSchema = require("../models/master_idea_status")
const masterIdeaCategorySchema = require("./../models/master_idea_category")
const masterEvaluationStatusSchema = require("./../models/master_evaluation_status")
const masterRolesSchema = require("./../models/master_roles")


const apiResponse = require('./../helpers/apiResponse')
const jwtUtility = require('./../middlewares/jwt')
const utility = require('./../helpers/utility')

/////////////----------- MAster Domain ----------------////////////////////////
module.exports.addDomain = async (req,  res) => {
    console.log(req.file)

    let tbl = await new masterIdeaDomainSchema ({
        type: req.body.type,
        createdDate: utility.currentDate()
    })

    tbl.save()
    .then((data) => {
        apiResponse.successResponse(res, data)
    })
    .catch((err) => {
        apiResponse.ErrorResponse(res, err)
    })
}
module.exports.getListDomain = async (req, res) => {
    masterIdeaDomainSchema
    .find({"isDeleted": false})
    .select("_id type")
    .then(data => apiResponse.successResponseWithData(res, "domain fetched", data))
    .catch(err => apiResponse.ErrorResponse(res, err))
}

/////////////----------- MAster Category ----------------////////////////////////
module.exports.addCategory = async (req,  res) => {

    let tbl = await new masterIdeaCategorySchema ({
        type: req.body.type,
        createdDate: utility.currentDate()
    })

    tbl.save()
    .then((data) => {
        apiResponse.successResponse(res, data)
    })
    .catch((err) => {
        apiResponse.ErrorResponse(res, err)
    })
}
module.exports.getListCategory = async (req, res) => {
    masterIdeaCategorySchema
    .find({"isDeleted": false})
    .select("_id type")
    .then(data => apiResponse.successResponseWithData(res, "domain fetched", data))
    .catch(err => apiResponse.ErrorResponse(res, err))
}

/////////////----------- Master Status ----------------////////////////////////
module.exports.addStatus = async (req,  res) => {

    let tbl = await new masterIdeaSatusSchema ({
        type: req.body.type,
        createdDate: utility.currentDate()
    })

    tbl.save()
    .then((data) => {
        apiResponse.successResponse(res, data)
    })
    .catch((err) => {
        apiResponse.ErrorResponse(res, err)
    })
}

/////////////----------- MAster Role ----------------////////////////////////
module.exports.addRole = async (req,  res) => {

    let tbl = await new masterRolesSchema ({
        type: req.body.type,
        createdDate: utility.currentDate()
    })

    tbl.save()
    .then((data) => {
        apiResponse.successResponse(res, data)
    })
    .catch((err) => {
        apiResponse.ErrorResponse(res, err)
    })
}

////////////------------Master Evaluation status ------//////////////////////
module.exports.addEvaluationStatus = async (req, res) => {
    // console.log(req.file)

    let tbl = await new masterEvaluationStatusSchema ({
        type: req.body.type,
        createdDate: utility.currentDate()
    })

    tbl.save()
    .then((data) => {
        apiResponse.successResponse(res, data)
    })
    .catch((err) => {
        apiResponse.ErrorResponse(res, err)
    })
}