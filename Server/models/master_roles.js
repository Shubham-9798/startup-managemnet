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
  createdDate: { type: Date,  required: true}
});

// Compile model from schema
var MasterRole = mongoose.model('MasterRole', SomeModelSchema );
module.exports = MasterRole;