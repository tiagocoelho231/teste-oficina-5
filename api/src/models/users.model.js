const Sequelize = require('sequelize');
const connection = require('../config/db');

const User = connection.define('users', {
	id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
	name: { type: Sequelize.STRING, allowNull: false }
});

module.exports = User;