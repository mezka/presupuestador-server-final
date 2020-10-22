// Initializes the `productcategories` service on path `/productcategories`
const { Productcategories } = require('./productcategories.class');
const createModel = require('../../models/productcategories.model');
const hooks = require('./productcategories.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
  };

  // Initialize our service with any options it requires
  app.use('/productcategories', new Productcategories(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('productcategories');

  service.hooks(hooks);
};
