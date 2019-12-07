const Sequelize = require('sequelize');
const connection = new Sequelize('oficina-5', 'root', 'root', {
	dialect: 'mysql',
	host: 'localhost',
	logging: false,
	define: {
		timestamps: false,
	}
})

module.exports = connection;