const { authenticate } = require('@feathersjs/authentication').hooks;
const { removeParameterFromQuery, convertSequelizeResultToJson } = require('../../helpers/hooks');
const { setEagerLoadingForEstimateService, computeValuesForEstimateTemplate } = require('./helpers/hooks');

module.exports = {
  before: {
    all: [],
    find: [setEagerLoadingForEstimateService()],
    get: [removeParameterFromQuery('export'), setEagerLoadingForEstimateService()],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [convertSequelizeResultToJson(), computeValuesForEstimateTemplate()],
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

