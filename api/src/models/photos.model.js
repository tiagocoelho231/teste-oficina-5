const Sequelize = require('sequelize');
const connection = require('../config/db');

const Photo = connection.define('photos', {
	id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
	title: { type: Sequelize.STRING, allowNull: false },
	url: { type: Sequelize.STRING, allowNull: false },
	thumbnailUrl: { type: Sequelize.STRING, allowNull: false }
})

module.exports = Photo;