// Initializes the `exercise` service on path `/exercise`
const createService = require('feathers-mongoose');
const createModel = require('../../models/exercise.model');
const hooks = require('./exercise.hooks');
const filters = require('./exercise.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'exercise',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/exercise', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('exercise');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
