// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;;

var SomeModelSchema = new Schema({
  username: {
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
    unique: true,
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
  idea: [{
    type: Schema.Types.ObjectId,
    ref: "StartupIdea"
  }],
  teamDescrption: {
    type: Schema.Types.ObjectId,
    ref: "team_details_tbl"
  },
  teamMembers : [{
    type: Schema.Types.ObjectId,
    ref: "team_memeber_details_tbl"
  }],
  userDetails: { type: Schema.Types.ObjectId, ref: "user_details_tbl" },
  refresh_token: { type: String, default:"",
   index: {
    unique: true,
    dropDups: true
  }},

  isDeleted: {type: Boolean, default: false},
  securityQuestion: ObjectId,
  securityAnswer: {type: String},
  isVerified: {type: Boolean, default: false},
  updatedDate: { type: Date, default: Date.now },
  createdDate: { type: Date,  required: true}
});

// Compile model from schema
var User = mongoose.model('User', SomeModelSchema );
module.exports = User;