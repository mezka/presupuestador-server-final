module.exports = {
  setEagerLoadingForProductService(){
    return (context) => {
  
      context.params.sequelize = {
        include: [
          {
            model: context.app.service('categories').Model,
          },
        ],
        raw: false,
        // nest: true,
      };
      return context;
    };
  }
};