const Sequelize = require('sequelize');
const connection = require('../config/db');

const Post = connection.define('posts', {
	id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
	title: { type: Sequelize.STRING, allowNull: false },
	body: { type: Sequelize.STRING, allowNull: false }
})

module.exports = Post;