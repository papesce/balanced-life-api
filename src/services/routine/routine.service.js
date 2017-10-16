// Initializes the `routine` service on path `/routine`
const createService = require('feathers-mongoose');
const createModel = require('../../models/routine.model');
const hooks = require('./routine.hooks');
const filters = require('./routine.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'routine',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/routine', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('routine');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
