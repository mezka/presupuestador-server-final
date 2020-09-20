const { authenticate } = require('@feathersjs/authentication').hooks;
const { removeParameterFromQuery, convertSequelizeResultToJson } = require('../../helpers/hooks');
const { setEagerLoadingForEstimateService, calculateValuesForEstimateTemplate } = require('./helpers/hooks');

module.exports = {
  before: {
    all: [],
    find: [setEagerLoadingForEstimateService()],
    get: [removeParameterFromQuery('export'), setEagerLoadingForEstimateService()],
    create: [authenticate('jwt')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [convertSequelizeResultToJson(), calculateValuesForEstimateTemplate()],
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

