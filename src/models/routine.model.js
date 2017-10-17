// routine-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
// exercise-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
let mongoose = require('mongoose');
let exercise = require('./exercise.model.js');

var routineSchema = new mongoose.Schema({
    name : { type : String, required : true },
    exercises : [{type: mongoose.Schema.Types.ObjectId, ref: 'exercise'}]
   }, {timestamps: true});

var routineModel = mongoose.model('routine', routineSchema);

class Routine {

// Create a simple mongoose model 'Note' 
 static getModel() {
   return routineModel;
 }

 static getSchema() {
   return routineSchema;
 }
  
};


module.exports = Routine;
