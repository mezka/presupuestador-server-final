module.exports = {
  setEagerLoadingForAllFields: () => {
    return (context) => {
      context.params.sequelize = {
        include: [
          {
            all: true
          },
        ],
        nest: true,
        raw: false
      };

      return context;
    };
  }
};