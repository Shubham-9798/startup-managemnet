 // Define schema
 var mongoose = require("mongoose");
 var Schema = mongoose.Schema
 
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
 var MasterIdeaDomain = mongoose.model('Master_Idea_Domain', SomeModelSchema )
 module.exports = MasterIdeaDomain