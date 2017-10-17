//from restify-mongoose
var restify = require('restify');
var restifyMongoose = require('restify-mongoose');
var mongoose = require('mongoose');
let exerciseModel = require('./models/exercise.model.js');
let routineModel = require('./models/routine.model.js');
let gymModel = require('./models/gym.model.js');


//mongoose.connect('mongodb://localhost:27017/balanced_gym_api')
mongoose.connect('mongodb://papesce:yt73M44VwTohpPCH'+
'@balancedcluster-shard-00-00-wamq8.mongodb.net:27017'+
',balancedcluster-shard-00-01-wamq8.mongodb.net:27017'+
',balancedcluster-shard-00-02-wamq8.mongodb.net:27017'+
'/balanced_gym_api?ssl=true'+
'&replicaSet=BalancedCluster-shard-0&authSource=admin');

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
server.get('/routine', routine.query({populate: "exercises"}));
server.get('/routine/:id', routine.detail());
server.post('/routine', routine.insert());
server.patch('/routine/:id', routine.update());
server.del('/routine/:id', routine.remove());

 
// Now create a restify-mongoose resource from 'Note' mongoose model 
var exercise = restifyMongoose(exerciseModel.getModel());
 
// Serve resource notes with fine grained mapping control 
server.get('/exercise', exercise.query());
server.get('/exercise/:id', exercise.detail());
server.post('/exercise', exercise.insert());
server.patch('/exercise/:id', exercise.update());
server.del('/exercise/:id', exercise.remove());


//initialize the model
//gymModel.initializeModels();


server.get(/\/?.*/, restify.serveStatic({
            directory: __dirname,
            default: '../public/index.html',
            match: /^((?!app.js).)*$/   // we should deny access to the application source
     }));

server.listen(5000, function () {
    console.log('%s listening at %s', server.name, server.url);
});