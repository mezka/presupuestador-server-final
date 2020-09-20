const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const estimateitems = sequelizeClient.define('estimateitems', {
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    unitprice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  estimateitems.associate = function (models) {
    estimateitems.belongsTo(models.estimates, { onDelete: 'CASCADE', foreignKey: 'estimateid'});
    estimateitems.belongsTo(models.products, { onDelete: 'NO ACTION', foreignKey: 'productid'});
  };

  return estimateitems;
};
