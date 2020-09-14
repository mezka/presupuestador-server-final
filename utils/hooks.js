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
    }
  }
}