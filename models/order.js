const Sequelize = require('sequelize');

const sequelize = require('c:/Users/kingsly/Desktop/To do nodeapp/util/database');

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  
});

module.exports = Order;