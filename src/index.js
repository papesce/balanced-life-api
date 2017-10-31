//from restify-mongoose
var restify = require('restify');
var restifyMongoose = require('restify-mongoose');
var mongoose = require('mongoose');
let exerciseModel = require('./models/exercise.model.js');
let routineModel = require('./models/routine.model.js');
let serieModel = require('./models/serie.model.js');
let GymModel = require('./models/gym.model.js');
let MongoDBUtils = require('./mongodbutils');


var MONGODB_REMOTE_API =  'mongodb://papesce:yt73M44VwTohpPCH'+
'@balancedcluster-shard-00-00-wamq8.mongodb.net:27017'+
',balancedcluster-shard-00-01-wamq8.mongodb.net:27017'+
',balancedcluster-shard-00-02-wamq8.mongodb.net:27017'+
'/balanced_gym_api?ssl=true'+
'&replicaSet=BalancedCluster-shard-0&authSource=admin';
var MONGODB_LOCAL_API = 'mongodb://localhost:27017/balanced_gym_api';
//var MONGODB_API =  MONGODB_REMOTE_API;
var MONGODB_API =  MONGODB_LOCAL_API;


// mongoose.connect()
mongoose.connect(MONGODB_API);

var server = restify.createServer({
    name: 'restify.mongoose.balancedlife',
    version: '1.0.0'
});
 
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
 

// Now create a restify-mongoose resource from 'Note' mongoose model 
var routine = restifyMongoose(routineModel.getModel());
 
// Serve resource notes with fine grained mapping control 
//server.get('/routine', routine.query({populate: "exercises"}));
server.get('/routine', getRoutines);
//server.get('/routine/:id', routine.detail({populate: "exercises"}));
server.get('/routine/:id', getRoutine);
//server.post('/routine', routine.insert());
//server.patch('/routine/:id', routine.update());
//server.del('/routine/:id', routine.remove());

 
// Now create a restify-mongoose resource from 'Note' mongoose model 
var exercise = restifyMongoose(exerciseModel.getModel());
 
// Serve resource notes with fine grained mapping control 
//server.get('/exercise', exercise.query({populate: "series"}));
//server.get('/exercise/:id', exercise.detail({populate: "series"}));
server.get('/exercise/:id', getExercise);
//server.post('/exercise', exercise.insert());
server.patch('/exercise/:id', exercise.update());
//server.del('/exercise/:id', exercise.remove());


// Now create a restify-mongoose resource from 'Note' mongoose model 
var serie = restifyMongoose(serieModel.getModel());
 
// Serve resource notes with fine grained mapping control 
//server.get('/serie', serie.query());
server.get('/serie/:id', serie.detail());
//server.post('/serie', serie.insert());
server.patch('/serie/:id', serie.update());
server.del('/serie/:id', serie.remove());
server.post('/newSerie/:exerciseId', newSerie);

let gym = new GymModel();

async function getRoutines(req, res, next) {
    let routines = await gym.getRoutines();
    res.send(routines);
}

async function getRoutine(req, res, next) {
    let routine = await gym.getRoutine(req.params.id);
    res.send(routine);
}

async function newSerie(req, res, next) {
    let serie = await gym.newSerie(req.params.exerciseId);
    res.send(serie);
}

async function getExercise(req, res, next) {
    let series = await gym.getExercise(req.params.id); 
    res.send(series);  
}

//initialize the model
//gym.initializeModels();

//database backup/restore
//MongoDBUtils.backup(MONGODB_REMOTE_API);
//MongoDBUtils.restore(MONGODB_REMOTE_API);


server.get(/\/?.*/, restify.serveStatic({
            directory: __dirname,
            default: '../public/index.html',
            match: /^((?!index.js).)*$/   // we should deny access to the application source
     }));

var port = process.env.PORT || 5000;

server.listen(port, function () {
    console.log('%s listening at %s', server.name, port);
});