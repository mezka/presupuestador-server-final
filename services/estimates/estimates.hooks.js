const { createEstimateItems } = require('../../utils/hooks');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [createEstimateItems()],
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
