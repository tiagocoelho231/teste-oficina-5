const Sequelize = require('sequelize');
const connection = require('../config/db');

const Album = connection.define('albums', {
	id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
	title: { type: Sequelize.STRING, allowNull: false }
})

module.exports = Album;