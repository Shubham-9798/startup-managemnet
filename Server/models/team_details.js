// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var SomeModelSchema = new Schema({
  teamName: {
    type: String,
    unique: true,
    required: true
},
  topic: {
    type: String,
    unique: true,
    required: true
},
  email: {
    type: String,
    unique: true,
    required: true
},
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  isDeleted: {type: Boolean, default: false},
  isVerified: {type: Boolean, default: false},
  isAccepted: {type: Boolean, default: false},
  updatedDate: { type: Date, default: Date.now },
  createdDate: { type: Date}
});

// Compile model from schema
var User = mongoose.model('team_details_tbl', SomeModelSchema );
module.exports = User;