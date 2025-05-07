// backend/models/index.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('unichoose', 'root', 'pw0900pw', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = { sequelize };
