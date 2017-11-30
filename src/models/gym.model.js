 let exercise = require('./exercise.model.js');
 let routine = require('./routine.model.js');
 let serie = require('./serie.model.js');

class Gym {
    initializeModels() {
        let ExerciseModel = exercise.getModel();
        let RoutineModel = routine.getModel();
        let SerieModel = serie.getModel();
        //this.initializeRoutine1(ExerciseModel, RoutineModel, SerieModel);
        //this.initializeRoutine2(ExerciseModel, RoutineModel, SerieModel);
        //this.initializeRoutine3(ExerciseModel, RoutineModel, SerieModel);
    }

    async initializeRoutine1(ExerciseModel, RoutineModel, SerieModel) {
        let routineName = "Chest Triceps Forearms";
        //let routine = await this.createRoutine(RoutineModel, routineName);
        //let routine = await this.getRoutine(RoutineModel, routineName);
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
        //let routineName = "Legs Shoulders Cabs";
        //let routine = await this.createRoutine(RoutineModel, routineName);
        //let routine = await this.getRoutineByName(RoutineModel, routineName);
        // await this.addExercise(routine, ExerciseModel, "Barbell Squats Long");
        //await this.editExercise("Barbell Squats Long", "Quadriceps", "http://www.exrx.net/AnimatedEx/Quadriceps/BBSquatHigh.gif");
        // await this.addExercise(routine, ExerciseModel, "Standing Military Press (short)");
        // await this.addExercise(routine, ExerciseModel, "One Leg Dumbbell Raising Out");
        //await this.editExercise("One Leg Dumbbell Raising Out","Gastrocnemius", "http://www.exrx.net/AnimatedEx/Gastrocnemius/DBSingleLegCalfRaise.gif");
        // await this.addExercise(routine, ExerciseModel, "Dumbel Lunges (alt)");
        // await this.addExercise(routine, ExerciseModel, "Standing Dumbbell Side Laterals");
        //await this.editExercise("Standing Dumbbell Side Laterals", "Deltoid, Lateral", "http://www.exrx.net/AnimatedEx/DeltoidLateral/DBLateralRaise.gif");
        //await this.addExercise(routine, ExerciseModel, "One Leg Dumbbell Raising");
        //await this.editExercise("One Leg Dumbbell Calf Raising","Gastrocnemius", "http://www.exrx.net/AnimatedEx/Gastrocnemius/DBSingleLegCalfRaise.gif");
        // await this.addExercise(routine, ExerciseModel, "Stiff Legged Deadlift (long)");
        // await this.addExercise(routine, ExerciseModel, "Standing Dumbbell Front Raise (alt)");
        //await this.editExercise("Standing Dumbbell Front Raise (alt)", "Deltoid, Anterior", "http://www.exrx.net/AnimatedEx/DeltoidAnterior/DBFrontRaise.gif");
        // await this.addExercise(routine, ExerciseModel, "One Leg Dumbbel Rasing In");
        //await this.editExercise("One Leg Dumbbel Rasing In","Gastrocnemius", "http://www.exrx.net/AnimatedEx/Gastrocnemius/DBSingleLegCalfRaise.gif");
        //await this.addExercise(routine, ExerciseModel, "Leg Extensions", "Thighs", "Cuadriceps");
        //await this.editExercise("Leg Extensions", "Cuadriceps", "http://www.exrx.net/AnimatedEx/Quadriceps/LVLegExtension.gif");
        //await this.addExercise(routine, ExerciseModel, "Good Morning", "Thighs", "Hamstrings");
        //await this.editExercise("Good Morning", "Hamstrings", "http://www.exrx.net/AnimatedEx/Hamstrings/BBGoodMorning.gif");
        //await this.addExercise(routine, ExerciseModel, "Lying Leg Curls", "Thighs", "Hamstrings");
        //await this.editExercise("Lying Leg Curls", "Hamstrings", "http://www.exrx.net/AnimatedEx/Hamstrings/LVLyingLegCurl.gif");
        //await routine.save();
    }

    async initializeRoutine3(ExerciseModel, RoutineModel, SerieModel) {
        let routineName = "Back Biceps Abs";
        //let routine = await this.createRoutine(RoutineModel, routineName);
        //let routine = await this.getRoutineByName(RoutineModel, routineName);
        // await this.addExercise(routine, ExerciseModel, "Deadlift");
        // await this.addExercise(routine, ExerciseModel, "Barbell Curls (short)");
        // await this.addExercise(routine, ExerciseModel, "Raised Knee Barbell Crunches (short)");
        // await this.addExercise(routine, ExerciseModel, "One-Arm Dumbbell Rows");
        //await this.editExercise("One-Arm Dumbbell Rows", "Back General", "http://www.exrx.net/AnimatedEx/BackGeneral/DBBentoverRow.gif");
        // await this.addExercise(routine, ExerciseModel, "Concentration curls");
        // await this.addExercise(routine, ExerciseModel, "Oblique Crunch with bench");
        // await this.addExercise(routine, ExerciseModel, "Bent Over Barbell Rows long (rev grip)");
        // await this.addExercise(routine, ExerciseModel, "Hammer Standing Dumbbell Curls");
        //await this.editExercise("Hammer Standing Dumbbell Curls", "Brachioradialis", "http://www.exrx.net/AnimatedEx/Brachioradialis/DBHammerCurl.gif");
        // await this.addExercise(routine, ExerciseModel, "Flat Bench Reverse crunch (knee up)");
        //await this.rename("Flat bench Leg Raises (hands down)", "Lying Straight Leg Raise");
        // await this.addExercise(routine, ExerciseModel, "Flat bench Leg Raises (hands down)");
        //await this.editExercise("Lying Straight Leg Raise", "LLiopsoas", "http://www.exrx.net/AnimatedEx/HipFlexors/BWLyingStraightLegRaise.gif");
        // await this.addExercise(routine, ExerciseModel, "Supinating Curl Standing");
        //await this.editExercise("Supinating Curl Standing", "Biceps Brachii", "http://www.exrx.net/AnimatedEx/Biceps/DBCurl.gif");
        // await this.addExercise(routine, ExerciseModel, "Barbell Push Sit-up");
        //await this.renameExercise("Calves over bench sit ups (with dumbell)", "Barbell Push Sit-up");
         //await this.addExercise(routine, ExerciseModel, "Dumbbell Shoulder Internal Rotation (on bench)",
         //"Back", "Subscapularis", "http://www.exrx.net/AnimatedEx/Subscapularis/DBInternalRotation.gif");
        //await this.addExercise(routine, ExerciseModel, "Barbell Pullover", "Back", "Latissimus Dorsi","http://www.exrx.net/AnimatedEx/LatissimusDorsi/BBPullover.gif");
        //await this.addExercise(routine, ExerciseModel, "Dumbell Push Crush", "Waist", "Rectus Abdominis", "http://www.exrx.net/AnimatedEx/RectusAbdominis/DBPushCrunch.gif");
        //await this.addExercise(routine, ExerciseModel, "Weighted Crunch", "Waist", "Rectus Abdominis", "http://www.exrx.net/AnimatedEx/RectusAbdominis/WTCrunch.gif");
        //await routine.save();

        

    }
   
    async createRoutine(RoutineModel, routineName) {
        let routine = await new RoutineModel({name: routineName, exercises:[]});
        return routine;
    }

    async getRoutineByName(RoutineModel, routineName) {
        let routine = await RoutineModel.findOne({name: routineName});
        return routine;
    }

    async addExercise(routine, ExerciseModel, exerciseName, muscleGroup, target, gifURL) {
        let exercise = await new ExerciseModel({name: exerciseName, series: [], muscleGroup: muscleGroup,
             target: target, gifURL: gifURL}).save();
        routine.exercises.push(exercise._id);
    }

    async editExercise(exerciseName, target, gifURL) {
        let exercise = await this.getExerciseByName(exerciseName);
        exercise.target = target;
        exercise.gifURL = gifURL;
        await exercise.save();
    }

    async newSerie(exerciseId) { 
        let SerieModel = serie.getModel();
        let newSerie = await new SerieModel({reps:10, weight:1}).save();
        let ExerciseModel = exercise.getModel();
        let ex = await ExerciseModel.findById(exerciseId).exec();
        ex.series.push(newSerie);
        ex.lastUpdated = newSerie.createdAt;
        //temporary hack"
        if (!ex.target) ex.target = 'to complete';
        if (!ex.gifURL) ex.gifURL = 'http://www.exrx.net/AnimatedEx/GluteusMaximus/BBHipThrust.gif'
        await ex.save();   
        return newSerie;
    }

    async getExerciseByName(exerciseName) {
        let ExerciseModel = exercise.getModel();
        let exerciseQuery = ExerciseModel.findOne({name : exerciseName}).populate('series');
        let exerciseResult = await exerciseQuery.exec();
        return exerciseResult;
    }

   
    async getExercise(exerciseId) {
        let ExerciseModel = exercise.getModel();
        let exerciseQuery = ExerciseModel.findOne({_id : exerciseId}).populate('series');
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

    sortByMuscleGroup(e1,e2) {
        return e1.muscleGroup.localeCompare(e2.muscleGroup);
    }

    async getRoutines() {
         let RoutineModel = routine.getModel();
         let routinesQuery = RoutineModel.find().
         deepPopulate('exercises.series');
         let routines = await routinesQuery.lean().exec();
         for (let routineResult of routines) {
            this.addLastUpdated(routineResult);
            //sort exercises by muscleGroup
            routineResult.exercises.sort(this.sortByMuscleGroup);
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
        routineResult.exercises.sort(this.sortByMuscleGroup);
        return routineResult;
    }


    addLastUpdated(routineResult){
        for (let exerciseResult of routineResult.exercises) {
            if (exerciseResult.series.length > 0) {
                exerciseResult.series.sort((s1,s2) => {return s1.createdAt < s2.createdAt});
                exerciseResult.lastUpdated = exerciseResult.series[0].createdAt;
                //let newSeries = exerciseResult.series.map((serie) => {return {_id: serie._id}});
                //exerciseResult.seriesSize = newSeries.length;
                exerciseResult.lastReps = exerciseResult.series[0].reps;
                exerciseResult.lastWeight = exerciseResult.series[0].weight;
                //exerciseResult.series = newSeries;
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