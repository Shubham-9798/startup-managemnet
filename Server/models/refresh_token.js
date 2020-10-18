// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;;

var SomeModelSchema = new Schema({
  __id: {
    type: String,
    unique: true,
    required: true
},
  refresh_token: {type: String, default:"",
   index: {
    unique: true,
    dropDups: true
  }},
  isDeleted: {type: Boolean, default: false},
  isVerified: {type: Boolean, default: false},
  createdDate: { type: Date,  required: true}
});

// Compile model from schema
var RefreshToken = mongoose.model('RefreshToken', SomeModelSchema );
module.exports = RefreshToken