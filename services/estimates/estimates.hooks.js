const { setEagerLoadingForEstimateService } = require('../../utils/hooks');
const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [],
    find: [setEagerLoadingForEstimateService()],
    get: [setEagerLoadingForEstimateService()],
    create: [authenticate('jwt')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
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
