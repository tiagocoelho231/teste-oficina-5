const User = require('../models/users.model');

module.exports = {
	async index(req, res) {
		try {
			const q = req.query;
			const users = q ? await User.findAll({ where: q }) : await User.findAll();
			res.status(200).send(users);
		} catch (error) {
			res.status(400).send(error);
		}
	},

	async get(req, res) {
		try {
			const user = await User.findByPk(req.params.id);
			res.status(200).send(user);
		} catch (error) {
			res.status(400).send(error);
		}
	},

	async create(req, res) {
		try {
			const { name } = req.body;
			const newUser = new User({ name });
			const user = await newUser.save();
			res.status(200).send(user);
		} catch (error) {
			res.status(400).send(error);
		}
	},

	async patch(req, res) {
		try {
			const { name } = req.body;
			const user = await User.update({ name }, { where: { id: req.params.userId } });
			res.status(200).send(user);
		} catch (error) {
			res.status(400).send(error);
		}
	},

	async remove(req, res) {
		try {
			const user = await User.destroy({ where: { id: req.params.userId } });
			res.status(200).send(user);
		} catch (error) {
			res.status(400).send(error);
		}
	}
}
