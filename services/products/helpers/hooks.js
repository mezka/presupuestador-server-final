

module.exports = {
  setEagerLoadingForProductService(){
    return (context) => {
  
      context.params.sequelize = {
        include: [
          {
            model: context.app.service('categories').Model,
            through: {
              attributes: [],
            },
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          },
        ],
        attributes: {
          exclude: ['createdAt']
        },
        raw: false,
      };
      return context;
    };
  },

  mapCategoriesIntoArrayOfCategoryIds(){
    return (context) => {

      context.result = context.result.map(product => ({...product, categories: product.categories.map((category) => (category.id))}))
      
      return context;
    }
  }
};