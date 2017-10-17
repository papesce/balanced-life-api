// exercise-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
var mongoose = require('mongoose');

var exerciseSchema = new mongoose.Schema({
    name : { type : String, required : true },
   }, {timestamps: true});

var exerciseModel = mongoose.model('exercise', exerciseSchema);

class Exercise {

// Create a simple mongoose model 'Note' 
 static getModel() {
   return exerciseModel;
 }

 static getSchema() {
   return exerciseSchema;
 }
  
};


module.exports = Exercise;
