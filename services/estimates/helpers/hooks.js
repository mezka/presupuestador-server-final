const { createNewEstimateWithTemplateProperties } = require('./formatting');

module.exports = {
  setEagerLoadingForEstimateService(){
    return (context) => {
  
      const { export: exportExtension, ...query} = context.params.query;
  
      context.params.query = query;
      context.params.export = exportExtension;
  
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
      return context;
    };
  },
  calculateValuesForEstimateTemplate(){
    return (context) => {

      context.result = createNewEstimateWithTemplateProperties(context.result);

      return context;
    };
  }
};