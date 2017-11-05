 let exercise = require('./exercise.model.js');
 let routine = require('./routine.model.js');
 let serie = require('./serie.model.js');

class Gym {
    initializeModels() {
        let ExerciseModel = exercise.getModel();
        let RoutineModel = new routine().getModel();
        let SerieModel = serie.getModel();
        //this.initializeRoutine1(ExerciseModel, RoutineModel, SerieModel);
        ///this.initializeRoutine2(ExerciseModel, RoutineModel, SerieModel);
        this.initializeRoutine3(ExerciseModel, RoutineModel, SerieModel);
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
        // await this.addExercise(routine, ExerciseModel, "Barbell Squats Long");
        // await this.addExercise(routine, ExerciseModel, "Standing Military Press (short)");
        // await this.addExercise(routine, ExerciseModel, "One Leg Dumbbell Raising Out");
        // await this.addExercise(routine, ExerciseModel, "Dumbel Lunges (alt)");
        // await this.addExercise(routine, ExerciseModel, "Standing Dumbbell Side Laterals");
        // await this.addExercise(routine, ExerciseModel, "One Leg Dumbbell Raising");
        // await this.addExercise(routine, ExerciseModel, "Stiff Legged Deadlift (long)");
        // await this.addExercise(routine, ExerciseModel, "Standing Dumbbell Front Raise (alt)");
        // await this.addExercise(routine, ExerciseModel, "One Leg Dumbbel Rasing In");
        // await routine.save();
    }

    async initializeRoutine3(ExerciseModel, RoutineModel, SerieModel) {
        let routineName = "Back Biceps Abs";
        let routine = await this.createRoutine(RoutineModel, routineName);
        //let routine = await this.getRoutine(RoutineModel, routineName);
        await this.addExercise(routine, ExerciseModel, "Deadlift");
        await this.addExercise(routine, ExerciseModel, "Barbell Curls (short)");
        await this.addExercise(routine, ExerciseModel, "Raised Knee Barbell Crunches (short)");
        await this.addExercise(routine, ExerciseModel, "One-Arm Dumbbell Rows");
        await this.addExercise(routine, ExerciseModel, "Concentration curls");
        await this.addExercise(routine, ExerciseModel, "Oblique Crunch with bench");
        await this.addExercise(routine, ExerciseModel, "Bent Over Barbell Rows long (rev grip)");
        await this.addExercise(routine, ExerciseModel, "Hammer Standing Dumbbell Curls");
        await this.addExercise(routine, ExerciseModel, "Flat Bench Reverse crunch (knee up)");
        await this.addExercise(routine, ExerciseModel, "Flat bench Leg Raises (hands down)");
        await this.addExercise(routine, ExerciseModel, "Supinating Curl Standing");
        await this.addExercise(routine, ExerciseModel, "Calves over bench sit ups (with dumbell)");
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
        ex.lastUpdated = newSerie.createdAt;
        await ex.save();   
        return newSerie;
    }

    async getExercise(exerciseId) {
        let ExerciseModel = exercise.getModel();
        let exerciseQuery = ExerciseModel.findOne({_id : exerciseId}).
        populate('series');

        let exerciseResult = await exerciseQuery.lean().exec();
        //sort({age:-1}).limit(1) 
        if (exerciseResult.series.length > 0) {
            exerciseResult.series.sort((s1,s2) => {return s1.createdAt < s2.createdAt});
            exerciseResult.lastUpdated = exerciseResult.series[0].createdAt;
            exerciseResult.lastReps = exerciseResult.series[0].reps;
            exerciseResult.lastWeight = exerciseResult.series[0].weight;
        //} else {
        //    exerciseResult.lastUpdated = exerciseResult.createdAt;
        }
        return exerciseResult;
    }

    async getRoutines() {
         let RoutineModel = routine.getModel();
         let routinesQuery = RoutineModel.find().
         deepPopulate('exercises.series');
         let routines = await routinesQuery.lean().exec();
         for (let routineResult of routines) {
            this.addLastUpdated(routineResult);
            //sort exercises by muscleGroup
            routineResult.exercises.sort((e1,e2) => e1.muscleGroup > e2.muscleGroup);
         }
    return routines;
     }

     async getRoutine(routineId) {
         //bug fix case of routine not found
        let RoutineModel = routine.getModel();
        let routineQuery = RoutineModel.findOne({_id : routineId}).
        deepPopulate('exercises.series');
        let routineResult = await routineQuery.lean().exec();
        this.addLastUpdated(routineResult);
        //sort exercises by muscleGroup
        routineResult.exercises.sort((e1,e2) => e1.muscleGroup > e2.muscleGroup);
        return routineResult;
    }


    addLastUpdated(routineResult){
        for (let exerciseResult of routineResult.exercises) {
            if (exerciseResult.series.length > 0) {
                exerciseResult.series.sort((s1,s2) => {return s1.createdAt < s2.createdAt});
                exerciseResult.lastUpdated = exerciseResult.series[0].createdAt;
                let newSeries = exerciseResult.series.map((serie) => serie._id);
                exerciseResult.lastReps = exerciseResult.series[0].reps;
                exerciseResult.lastWeight = exerciseResult.series[0].weight;
                exerciseResult.series = newSeries;
            } else {
                exerciseResult.lastUpdated = exerciseResult.createdAt;
                exerciseResult.lastReps = 0;
                exerciseResult.lastWeight = 0;
            }
        }
    }

    async initializeNewField() {
        let ExerciseModel = exercise.getModel();
        let exercisesQuery = ExerciseModel.find({});
        let exercises = await exercisesQuery.exec();
        for(let e of exercises){
            if (e.muscleGroup === undefined) {
                e.muscleGroup = "1";
                e.save();
                //console.log(e);
            }
        }
        //await exercisesQuery.save();
        //let exercise = await new ExerciseModel({name: exerciseName, series: []}).save();
        //routine.exercises.push(exercise._id);
    }
}




module.exports = Gym;