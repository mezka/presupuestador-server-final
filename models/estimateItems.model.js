const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const estimateItems = sequelizeClient.define('estimateitems', {
    discount: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.INTEGER
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  estimateItems.associate = function (models) {
    estimateItems.belongsTo(models.estimates, { onDelete: 'CASCADE', foreignKey: 'estimateid'});
    estimateItems.belongsTo(models.products, { onDelete: 'NO ACTION', foreignKey: 'productid'});
  };

  return estimateItems;
};
