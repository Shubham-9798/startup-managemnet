// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;;

var SomeModelSchema = new Schema({
 submitedById : { type: Schema.Types.ObjectId, ref: 'User' },
 submitedByTeamName : {
  type: String,
  // required: true
},
  submitedByTeamLeader : {
   type: String,
  //  required: true
},
  title: {
    type: String,
    unique: true,
    // required: true
},
  isDraft: {type: Boolean, default: true},
  description:{type: String},
  categoryId:{ type: Schema.Types.ObjectId, ref: 'Master_Idea_Category' },
  domainId:{ type: Schema.Types.ObjectId, ref: 'Master_Idea_Domain' },
  statusId:{ type: Schema.Types.ObjectId, ref: 'Master_Idea_Status' },
  fileName:{type: String},
  fileLocation:{type: String},
  owner: {type: Schema.Types.ObjectId, ref: 'User'},

  isAccepted:{type: Boolean, default: false},
  isDeleted: {type: Boolean, default: false},
  isVerified: {type: Boolean, default: false},
  updatedDate: { type: Date, default: Date.now },
  createdDate: { type: Date,  required: true}
});

// Compile model from schema
var startupIdea = mongoose.model('StartupIdea', SomeModelSchema );
module.exports = startupIdea;