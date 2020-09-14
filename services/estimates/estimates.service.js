// Initializes the `estimates` service on path `/estimates`
const { Estimates } = require('./estimates.class');
const createModel = require('../../models/estimates.model');
const hooks = require('./estimates.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/estimates', new Estimates(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('estimates');

  service.hooks(hooks);
};
