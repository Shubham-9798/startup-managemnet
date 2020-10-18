// Define schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;;

var SomeModelSchema = new Schema({
  address:[{
      address1: String,
      landMark: String,
      city:String,
      state:String,
      pincode:String
  }],
  adharCardNo: {type:String},
  isAdharcardVerify: { type:Boolean, default: false},

  isDeleted: {type: Boolean, default: false},
  isVerified: {type: Boolean, default: false},
  updatedDate: { type: Date, default: Date.now },
  createdDate: { type: Date,  required: true}
});

// Compile model from schema
var UserDetails = mongoose.model('user_details_tbl', SomeModelSchema );
module.exports = UserDetails