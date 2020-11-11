const { setEagerLoadingForProductService, mapCategoriesIntoArrayOfCategoryIds } = require('./helpers/hooks');
const dehydrate = require('feathers-sequelize/hooks/dehydrate');

module.exports = {
  before: {
    all: [],
    find: [setEagerLoadingForProductService()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [dehydrate(), mapCategoriesIntoArrayOfCategoryIds()],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
