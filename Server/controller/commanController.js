const userSchema = require("./../models/user")
const apiResponse = require('./../helpers/apiResponse')
const ObjectId = require('mongodb').ObjectID;



// module.exports.findAndUpdateUser = async (res, schema, _id, teamId) => {
//     console.log(_id, teamId)
//     await schema
//     .findOneAndUpdate(
//          {_id: {$eq: _id} },  
//          {"$push": { "teamMembers": new ObjectId(teamId) }}, 
//          null, 
//          function (err, docs) { 
//          if (err){ 
//              console.log(err) 
//          } 
//          else{ 
//              // console.log("Original Doc : ",docs); 
//              console.log(docs);
//              apiResponse.successResponse(res, "team Added")
//          } 
//      });

// }