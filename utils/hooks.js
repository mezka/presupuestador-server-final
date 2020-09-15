module.exports = {
  setEagerLoadingForAllFields: () => {
    return (context) => {
      
      context.params.sequelize = {
        include: [{
          all: true,
        }],
        nest: true
      };
      
      return context;
    };
  },
  setEagerLoadingForSomeFields: (modelnames) => {

    return (context) => {
      context.params.sequelize = {
        include: typeof(modelnames) === 'string'? [{ model: context.app.service(modelnames).Model }] : modelnames.map((modelname) => ({model: context.app.service(modelname).Model})),
        nest: true
      };
      return context;
    };
  },
};