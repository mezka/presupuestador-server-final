// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const estimates = sequelizeClient.define('estimates', {
    validFor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 10
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  estimates.associate = function (models) {
    estimates.belongsTo(models.clients, {onDelete: 'NO ACTION', foreignKey: 'clientid'});
    estimates.belongsTo(models.users, {onDelete: 'NO ACTION', foreignKey: 'userid'});
    estimates.hasMany(models.estimateitems, {onDelete: 'CASCADE', foreignKey: 'estimateid'});
  };

  return estimates;
};
