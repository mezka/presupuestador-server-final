const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const categories = sequelizeClient.define('categories', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  categories.associate = function (models) {
    categories.belongsToMany(models.products, { through: models.productcategories, foreignKey: 'categoryid', otherKey: 'productid' });
  };

  return categories;
};
