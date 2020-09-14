const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const clients = sequelizeClient.define('clients', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phonenumber0: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phonenumber1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phonenumber2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address0: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email0: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  clients.associate = function (models) {
  };

  return clients;
};
