const users = require('./users/users.service.js');
const clients = require('./clients/clients.service.js');
const estimates = require('./estimates/estimates.service.js');
const estimateItems = require('./estimateItems/estimateItems.service.js');
const products = require('./products/products.service.js');
const categories = require('./categories/categories.service.js');
const productcategories = require('./productcategories/productcategories.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(productcategories);
  app.configure(products);
  app.configure(users);
  app.configure(clients);
  app.configure(estimates);
  app.configure(estimateItems);
  app.configure(categories);
};
