// backend/models/course.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Course = sequelize.define('Course', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    teacher: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Course;
