 let exercise = require('./exercise.model.js');
 let routine = require('./routine.model.js');
 let serie = require('./serie.model.js');

class Gym {
    initializeModels() {
        let ExerciseModel = exercise.getModel();
        let RoutineModel = routine.getModel();
        let SerieModel = serie.getModel();
        this.initializeRoutine1(ExerciseModel, RoutineModel, SerieModel);
        //this.initializeRoutine2(ExerciseModel, RoutineModel, SerieModel);
        //this.initializeRoutine3(ExerciseModel, RoutineModel, SerieModel);
    }

    async initializeRoutine1(ExerciseModel, RoutineModel, SerieModel) {
        let routineName = "Chest Triceps Forearms";
        //let routine = await this.createRoutine(RoutineModel, routineName);
        let routine = await this.getRoutine(RoutineModel, routineName);
        //await this.addExercise(routine, ExerciseModel, "Flat Barbell Bench Press");
        //await this.addExercise(routine, ExerciseModel, "Dumbbell Skull Crushers");
        //await this.addExercise(routine, ExerciseModel, "One Arm Dumbell Wrist Curls");
        //await this.addExercise(routine, ExerciseModel, "Incline Barbell Bench Press");
        //await this.addExercise(routine, ExerciseModel, "Dumbbell Extension (one arm in)");
        //await this.addExercise(routine, ExerciseModel, "One Arm Dumbell Reverse Wrist Curls");
        //await this.addExercise(routine, ExerciseModel, "Decline Barbell Bench Press");
        //await this.addExercise(routine, ExerciseModel, "Close grip bench press");
        //await this.addExercise(routine, ExerciseModel, "Reverse curls (short)");
        //await routine.save();
    }

    //    this.connectModels("Bench Press","Triceps extensions", );
    //    this.connectModels("Deadlift","Barbell Curls", "Back Biceps Abs");
    //    this.connectModels("Barbell Lunges","Shoulder Press", "Legs Shoulders Calves");
    

    //   new exerciseModel({name: "Deadlift"}).save();
    //   new exerciseModel({name: "Barbell Squat"}).save();

    //   new routineModel({name:"Back and Biceps"}).save();
    //   new routineModel({name:"Chest and Triceps"}).save();
    //   new routineModel({name:"Legs and Shoulders"}).save();
   
    async createRoutine(RoutineModel, routineName) {
        let routine = await new RoutineModel({name: routineName, exercises:[]});
        return routine;
    }

    async getRoutine(RoutineModel, routineName) {
        let routine = await RoutineModel.findOne({name: routineName});
        return routine;
    }

    async addExercise(routine, ExerciseModel, exerciseName) {
        let exercise = await new ExerciseModel({name: exerciseName, series: []}).save();
        routine.exercises.push(exercise._id);
    }

    //  async connectModels(exName1, exName2, roName) {
    //      let serie1 = await new SerieModel({reps:10, weight:1}).save();
    //      let serie2 = await new SerieModel({reps:10, weight:1}).save();

    //      let exercise1 = await new ExerciseModel({name: exName1,
    //                     series: [serie1._id, serie2._id]}).save();
         
    //      let serie3 = await new SerieModel({reps:10, weight:1}).save();
    //      let serie4 = await new SerieModel({reps:10, weight:1}).save();
    //      let exercise2 = await new ExerciseModel({name: exName2,
    //                     series: [serie3._id, serie4._id]}).save();
    //      let routine1 = await new RoutineModel({
    //               name: roName,
    //               exercises: [exercise1._id, exercise2._id]
    //           }).save();
    //       console.log(routine1);
    // }
    //   let benchPress = exerciseModel.findOne({name: "Bench Press"}).then(
    //       (ex) => {
    //       };
      
    //   let deadlift = new exerciseModel({name: "Deadlift"});
    //   let barbelSquat = new exerciseModel({name: "Barbell Squat"});

    //   let backAndBiceps = new routineModel({name:"Back and Biceps"});
    //   let chestAndTriceps = new routineModel({name:"Chest and Triceps"});
    //   let LegsAndShoulders = new routineModel({name:"Legs and Shoulders"});
    // }

    async newSerie(exerciseId) { 
        let SerieModel = serie.getModel();
        let newSerie = await new SerieModel({reps:10, weight:1}).save();
        let ExerciseModel = exercise.getModel();
        let ex = await ExerciseModel.findById(exerciseId).exec();
        ex.series.push(newSerie);
        await ex.save();   
        return newSerie;
    }
}



module.exports = Gym;