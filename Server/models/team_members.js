// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;;

var SomeModelSchema = new Schema({
// _id of startup idea schema

name : {
    type: String,
    required: true
},
username: {
    type: String,
    unique: true,
    required: true
},
  password: {
    type: String,
    required: true
},
  email: {
    type: String,
    unique: true,
},
role: {
    type: String,
    required:true  
},
mobile: {
    type: String,
    unique: true,
}, 
owner: {
    type: Schema.Types.ObjectId,
    ref: "user"
},

  isVerified : { type: Boolean, default: false },  
  isDeleted: {type: Boolean, default: false},
  createdDate: { type: Date, default: Date.now }
});

// Compile model from schema
var team_memeber_details = mongoose.model('team_memeber_details_tbl', SomeModelSchema );
module.exports = team_memeber_details;