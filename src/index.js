/* eslint-disable no-console */
var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    restful = require('node-restful'),
    mongoose = restful.mongoose;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

mongoose.connect("mongodb://localhost:27017/balanced_gym_api");

var ExerciseSchema  =  mongoose.Schema({
    name: String,
  });

var ExerciseModel = restful.model('exercise', ExerciseSchema);

var RoutineSchema = mongoose.Schema({
    name: String,
    exercises: [ExerciseSchema]
  })

var RoutineModel  = restful.model('routine', RoutineSchema )
  .methods(['get', 'post', 'put', 'delete']);

//init database:
var e = new ExerciseModel({name: "new excercise"});
e.save();
var r = new RoutineModel({name: "demo", exercises: [e]});
r.save();



RoutineModel.register(app, '/routine');

app.listen(3000);


