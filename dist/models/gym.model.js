function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

    initializeRoutine1(ExerciseModel, RoutineModel, SerieModel) {
        var _this = this;

        return _asyncToGenerator(function* () {
            let routineName = "Chest Triceps Forearms";
            //let routine = await this.createRoutine(RoutineModel, routineName);
            let routine = yield _this.getRoutine(RoutineModel, routineName);
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
        })();
    }

    initializeRoutine2(ExerciseModel, RoutineModel, SerieModel) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            let routineName = "Legs Shoulders Cabs";
            //let routine = await this.createRoutine(RoutineModel, routineName);
            let routine = yield _this2.getRoutine(RoutineModel, routineName);
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
        })();
    }

    initializeRoutine3(ExerciseModel, RoutineModel, SerieModel) {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            let routineName = "Back Biceps Abs";
            let routine = yield _this3.createRoutine(RoutineModel, routineName);
            //let routine = await this.getRoutine(RoutineModel, routineName);
            yield _this3.addExercise(routine, ExerciseModel, "Deadlift");
            yield _this3.addExercise(routine, ExerciseModel, "Barbell Curls (short)");
            yield _this3.addExercise(routine, ExerciseModel, "Raised Knee Barbell Crunches (short)");
            yield _this3.addExercise(routine, ExerciseModel, "One-Arm Dumbbell Rows");
            yield _this3.addExercise(routine, ExerciseModel, "Concentration curls");
            yield _this3.addExercise(routine, ExerciseModel, "Oblique Crunch with bench");
            yield _this3.addExercise(routine, ExerciseModel, "Bent Over Barbell Rows long (rev grip)");
            yield _this3.addExercise(routine, ExerciseModel, "Hammer Standing Dumbbell Curls");
            yield _this3.addExercise(routine, ExerciseModel, "Flat Bench Reverse crunch (knee up)");
            yield _this3.addExercise(routine, ExerciseModel, "Flat bench Leg Raises (hands down)");
            yield _this3.addExercise(routine, ExerciseModel, "Supinating Curl Standing");
            yield _this3.addExercise(routine, ExerciseModel, "Calves over bench sit ups (with dumbell)");
            yield routine.save();
        })();
    }

    createRoutine(RoutineModel, routineName) {
        return _asyncToGenerator(function* () {
            let routine = yield new RoutineModel({ name: routineName, exercises: [] });
            return routine;
        })();
    }

    getRoutine(RoutineModel, routineName) {
        return _asyncToGenerator(function* () {
            let routine = yield RoutineModel.findOne({ name: routineName });
            return routine;
        })();
    }

    addExercise(routine, ExerciseModel, exerciseName) {
        return _asyncToGenerator(function* () {
            let exercise = yield new ExerciseModel({ name: exerciseName, series: [] }).save();
            routine.exercises.push(exercise._id);
        })();
    }

    newSerie(exerciseId) {
        return _asyncToGenerator(function* () {
            let SerieModel = serie.getModel();
            let newSerie = yield new SerieModel({ reps: 10, weight: 1 }).save();
            let ExerciseModel = exercise.getModel();
            let ex = yield ExerciseModel.findById(exerciseId).exec();
            ex.series.push(newSerie);
            ex.lastUpdated = newSerie.createdAt;
            yield ex.save();
            return newSerie;
        })();
    }

    getExercise(exerciseId) {
        return _asyncToGenerator(function* () {
            let ExerciseModel = exercise.getModel();
            let exerciseQuery = ExerciseModel.findOne({ _id: exerciseId }).populate('series');

            let exerciseResult = yield exerciseQuery.lean().exec();
            //sort({age:-1}).limit(1) 
            if (exerciseResult.series.length > 0) {
                exerciseResult.series.sort(function (s1, s2) {
                    return s1.createdAt < s2.createdAt;
                });
                exerciseResult.lastUpdated = exerciseResult.series[0].createdAt;
                //} else {
                //    exerciseResult.lastUpdated = exerciseResult.createdAt;
            }
            return exerciseResult;
        })();
    }

    getRoutines() {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            let RoutineModel = routine.getModel();
            let routinesQuery = RoutineModel.find().deepPopulate('exercises.series');
            let routines = yield routinesQuery.lean().exec();
            for (let routineResult of routines) {
                _this4.addLastUpdated(routineResult);
            }
            return routines;
        })();
    }

    getRoutine(routineId) {
        var _this5 = this;

        return _asyncToGenerator(function* () {
            let RoutineModel = routine.getModel();
            let routineQuery = RoutineModel.findOne({ _id: routineId }).deepPopulate('exercises.series');
            let routineResult = yield routineQuery.lean().exec();
            _this5.addLastUpdated(routineResult);
            return routineResult;
        })();
    }

    addLastUpdated(routineResult) {
        for (let exerciseResult of routineResult.exercises) {
            if (exerciseResult.series.length > 0) {
                exerciseResult.series.sort((s1, s2) => {
                    return s1.createdAt < s2.createdAt;
                });
                exerciseResult.lastUpdated = exerciseResult.series[0].createdAt;
                let newSeries = exerciseResult.series.map(serie => serie._id);
                exerciseResult.series = newSeries;
            } else {
                exerciseResult.lastUpdated = exerciseResult.createdAt;
            }
        }
    }
}

module.exports = Gym;