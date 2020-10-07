// Initializes the `estimates` service on path `/estimates`
const { EstimateItems } = require('./estimateItems.class');
const createModel = require('../../models/estimateItems.model');
const hooks = require('./estimateItems.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app)
  };

  // Initialize our service with any options it requires
  app.use('/estimateitems', new EstimateItems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('estimateitems');

  service.hooks(hooks);
};
