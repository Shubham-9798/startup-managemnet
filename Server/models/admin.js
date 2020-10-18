// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;;

var SomeModelSchema = new Schema({
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
  phoneNumber:{ type: String},
  role: { type: Schema.Types.ObjectId, ref: 'MasterRole' },  
  isDeleted: {type: Boolean, default: false},
  securityQuestion: ObjectId,
  securityAnswer: {type: String},
  isVerified: {type: Boolean, default: false},
  updatedDate: { type: Date, default: Date.now },
  createdDate: { type: Date,  required: true}
});

// Compile model from schema
var adminTable = mongoose.model('Admin_tbl', SomeModelSchema );
module.exports = adminTable;