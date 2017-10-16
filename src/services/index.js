const routine = require('./routine/routine.service.js');
const exercise = require('./exercise/exercise.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(routine);
  app.configure(exercise);
};
