const { setEagerLoadingForAllFields } = require('../../utils/hooks');
const { authenticate } = require('@feathersjs/authentication').hooks;
const { protect } = require('@feathersjs/authentication-local').hooks;



module.exports = {
  before: {
    all: [],
    find: [setEagerLoadingForAllFields()],
    get: [],
    create: [authenticate('jwt')],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [protect(['clientid']), protect(['userid'])],
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
