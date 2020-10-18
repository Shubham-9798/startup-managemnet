// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;;

var SomeModelSchema = new Schema({
  type: {
    type: String,
    unique: true,
    required: true
},
  isDeleted: {type: Boolean, default: false},
  isVerified: {type: Boolean, default: false},
  updatedDate: { type: Date, default: Date.now },
  createdDate: { type: Date,  required: true}
});

// Compile model from schema
var MasterStatus = mongoose.model('MasterStatus', SomeModelSchema );
module.exports = MasterStatus;