 let exercise = require('./exercise.model.js');
 let routine = require('./routine.model.js');
 let serie = require('./serie.model.js');

class Gym {
    initializeModels() {
        let ExerciseModel = exercise.getModel();
        let RoutineModel = routine.getModel();
        let SerieModel = serie.getModel();
        //this.initializeRoutine1(ExerciseModel, RoutineModel, SerieModel);
        this.initializeRoutine2(ExerciseModel, RoutineModel, SerieModel);
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

    async initializeRoutine2(ExerciseModel, RoutineModel, SerieModel) {
        let routineName = "Legs Shoulders Cabs";
        //let routine = await this.createRoutine(RoutineModel, routineName);
        let routine = await this.getRoutine(RoutineModel, routineName);
        await this.addExercise(routine, ExerciseModel, "Barbell Squats Long");
        await this.addExercise(routine, ExerciseModel, "Standing Military Press (short)");
        await this.addExercise(routine, ExerciseModel, "One Leg Dumbbell Raising Out");
        await this.addExercise(routine, ExerciseModel, "Dumbel Lunges (alt)");
        await this.addExercise(routine, ExerciseModel, "Standing Dumbbell Side Laterals");
        await this.addExercise(routine, ExerciseModel, "One Leg Dumbbell Raising");
        await this.addExercise(routine, ExerciseModel, "Stiff Legged Deadlift (long)");
        await this.addExercise(routine, ExerciseModel, "Standing Dumbbell Front Raise (alt)");
        await this.addExercise(routine, ExerciseModel, "One Leg Dumbbel Rasing In");
        await routine.save();
    }
   
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