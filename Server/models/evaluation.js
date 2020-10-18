 // Define schema
 var mongoose = require("mongoose");
 var Schema = mongoose.Schema,  ObjectId = Schema.ObjectId;;
 
 var SomeModelSchema = new Schema({
   teamId: { type: Schema.Types.ObjectId, ref: 'User' },
   submitedById : { type: Schema.Types.ObjectId, ref: 'User' },
   adminEvaluation:{ type: Schema.Types.ObjectId, ref: 'Admin_tbl' },
   optionalEvaluation:{ type: Schema.Types.ObjectId, ref: 'Admin_tbl' },
   evaluationStatus:{ type: Schema.Types.ObjectId, ref: 'Master_EvaluationStatus_tbl' },
   comments:[{ 
    comment:  { type: String,  required:false },
    tag: { type: String,  required:false }
   }],
   isFinalSelected :{type: Boolean, default: false},
   isFinalRejected :{type: Boolean, default: false},

   isAdminSelectIdea :{type: Boolean, default: false},
   isAdminSelectIdea :{type: Boolean, default: false},
   
   isDeleted: {type: Boolean, default: false},
   updatedDate: {type: Date, required:true},
   createdDate: { type: Date,  required: true}
 });
 
 // Compile model from schema
 var EvaluationTable = mongoose.model('Evaluation_tbl', SomeModelSchema )
 module.exports = EvaluationTable