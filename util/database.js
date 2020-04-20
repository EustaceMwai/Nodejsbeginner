const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'eustacemw', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;