module.exports = {
  setEagerLoadingForAllFields: () => {
    return (context) => {
      context.params.sequelize = {
        include: [
          {
            all: true,
            attributes: {
              exclude: ['password']
            }
          },
        ],
        nest: true,
        raw: false,
      };

      return context;
    };
  },
  setEagerLoadingForEstimateService: () => {
    return (context) => {
      context.params.sequelize = {
        include: [
          {
            model: context.app.service('estimateitems').Model,
            include: {
              model: context.app.service('products').Model,
              attributes: {
                exclude: ['createdAt', 'updatedAt']
              }
            },
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'estimateid', 'productid']
            }
          },
          {
            model: context.app.service('users').Model,
            attributes: {
              exclude: ['password', 'createdAt', 'updatedAt']
            }
          },
          {
            model: context.app.service('clients').Model,
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }
        ],
        raw: false,
        nest: true,
        attributes: {
          exclude: ['userid', 'clientid']
        }
      };
    };
  }
};