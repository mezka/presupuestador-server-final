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
  removeParameterFromQuery: (attributeName) => {
    return (context) => {
  
      const { [attributeName]: attributeToIgnore, ...query} = context.params.query;

      context.params.query = query;

      return context;
    }
  },
  convertSequelizeResultToJson: () => {
    return (context) => {
      context.result = context.result.toJSON();

      return context;
    }
  }
};