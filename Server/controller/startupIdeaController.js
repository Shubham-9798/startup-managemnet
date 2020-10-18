const startupIdeaSchema = require("./../models/startup_idea")

let ObjectId = require('mongodb').ObjectID;
const user_details = require("./../models/user_details")
const apiResponse = require('./../helpers/apiResponse')
const userSchema = require("./../models/user")
const utility = require('./../helpers/utility')
const fs = require('fs');


module.exports.insertIdea = async (req, res) => {
    const obj = req.body
    console.log(obj);

    let idea = await new startupIdeaSchema ({
        submitedById : obj.submitedById,
        submitedByTeamName: obj.submitedByTeamName, 
        submitedByTeamLeader: obj.submitedByTeamLeader,
        title:  obj.title,
        description:  obj.description,
        categoryId: new ObjectId(obj.categoryId),
        domainId: new ObjectId(obj.domainId)   ,
        statusId: new ObjectId(obj.statusId),
        fileName: !req.file?"":req.file.filename,
        fileLocation: !req.file?"":req.file.path,
        createdDate: utility.currentDate()
    })

    idea.save()
    .then((data) => {
        console.log("saves");
        apiResponse.successResponse(res, data)
    }
    )
    .catch((err) => {
        // utility.deleteFile(req.file.path)
        console.log(err)
        // fs.unlink(req.file.path, (err) => {
        //     if (err) throw err;
        //     console.log('successfully deleted /tmp/hello');
        //   });
        apiResponse.ErrorResponse(res, {})
    })
    // apiResponse.successResponseWithData(res, "dfg")
}

module.exports.addIdeaToUserArray = async(req, res) => {
    const obj = req.body
    const user = req.tokenParseData;
    console.log(obj);

    let idea = await new startupIdeaSchema ({
        submitedById : user._id,
        submitedByTeamName: user.name, 
        submitedByTeamLeader: user.username,
        owner: user._id,
        title:  obj.title,
        description:  obj.description,
        categoryId: new ObjectId(obj.categoryId),
        domainId: new ObjectId(obj.domainId)   ,
        statusId: new ObjectId(obj.statusId),
        fileName: !req.file?"":req.file.filename,
        fileLocation: !req.file?"":req.file.path,
        createdDate: utility.currentDate()
    })

    idea.save()
      .then((result) => {
          console.log(result);
          userSchema.findOne({ _id: user._id }, (err, user) => {
            if (user) {
                // The below two lines will add the newly saved review's 
                // ObjectID to the the User's reviews array field
                user.idea.push(idea);
                user.save();
                res.json({ message: 'Idea Submitted Successfully' });
             }else {
                 apiResponse.ErrorResponse(res, "user not")
            }
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });

    // apiResponse.successResponse(res, req.tokenParseData)

}

module.exports.getAllIdea = async (req, res) => {
    let slt = {select: "type _id"}
    startupIdeaSchema
    .find()
    .select('idea')
    .populate([{path: "categoryId", ...slt}, {path: "domainId", ...slt}, {path: "statusId", ...slt}])
    .exec()
    .then(data => apiResponse.successResponseWithData(res,data))
    .catch(err => apiResponse.ErrorResponse(res, err))
}

module.exports.getIdeasOfUserAdmin = async (req, res) => {
    let slt = {select: "type _id"}
    // let user = req.tokenParseData

    userSchema
    .find()
    .select('idea')
    .populate([
        {
        path: "idea", 
        populate: 
        [
            {path: "categoryId", ...slt}, 
            {path: "domainId", ...slt}, 
            {path: "statusId", ...slt}
        ]
    }])
    .exec()
    .then(data => apiResponse.successResponseWithData(res,data))
    .catch(err => apiResponse.ErrorResponse(res, err))
}

module.exports.update = async (req, res) => {
    apiResponse.successResponse(res, "1234")
}

module.exports.delete = async (req, res) => {
    apiResponse.successResponse(res, "1234")
}


