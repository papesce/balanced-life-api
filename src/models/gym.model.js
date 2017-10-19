let exercise = require('./exercise.model.js');
let routine = require('./routine.model.js');

class Gym {
    static initializeModels() {
        this.connectModels("Bench Press","Triceps extensions", "Chest and Triceps");
        this.connectModels("Deadlift","Barbell Curls", "Back and Biceps");
        this.connectModels("Barbell Lunges","Shoulder Press", "Legs and Shoulders");
    

    //   new exerciseModel({name: "Deadlift"}).save();
    //   new exerciseModel({name: "Barbell Squat"}).save();

    //   new routineModel({name:"Back and Biceps"}).save();
    //   new routineModel({name:"Chest and Triceps"}).save();
    //   new routineModel({name:"Legs and Shoulders"}).save();
    }

     static connectModels(exName1, exName2, roName) {
         let ExerciseModel = exercise.getModel();
         let RoutineModel = routine.getModel();
        new ExerciseModel({name: exName1,
                        series: [{reps:10, weight:1}]}).save().then(
          (saved1) => {
         new ExerciseModel({name: exName2,
                        series: [{reps:10, weight:1}]}).save().then(
          (saved2) => {  
              new RoutineModel({
                  name: roName,
                  exercises: [saved1._id, saved2._id]
              }).save().then((ro)=>{
                  console.log(ro);
              });
          });
        });
    }
    //   let benchPress = exerciseModel.findOne({name: "Bench Press"}).then(
    //       (ex) => {
    //       };
      
    //   let deadlift = new exerciseModel({name: "Deadlift"});
    //   let barbelSquat = new exerciseModel({name: "Barbell Squat"});

    //   let backAndBiceps = new routineModel({name:"Back and Biceps"});
    //   let chestAndTriceps = new routineModel({name:"Chest and Triceps"});
    //   let LegsAndShoulders = new routineModel({name:"Legs and Shoulders"});
    // }
}


module.exports = Gym;