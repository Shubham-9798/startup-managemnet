// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;;

var SomeModelSchema = new Schema({
// _id of startup idea schema
 __id : {
    type: String,
    required: true
},
 Comment : {
  type: String,
  required: true
},
  reply : { type : Array , "default" : [] },  
  isDeleted: {type: Boolean, default: false},
  createdDate: { type: Date, default: Date.now }
});

// Compile model from schema
var StartupIdeaComment = mongoose.model('User', SomeModelSchema );
module.exports = StartupIdeaComment;