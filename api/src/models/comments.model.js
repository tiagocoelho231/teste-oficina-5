const Sequelize = require('sequelize');
const connection = require('../config/db');

const Comment = connection.define('comments', {
	id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
	name: { type: Sequelize.STRING, allowNull: false },
	email: { type: Sequelize.STRING, allowNull: false },
	body: { type: Sequelize.STRING, allowNull: false }
})

module.exports = Comment;