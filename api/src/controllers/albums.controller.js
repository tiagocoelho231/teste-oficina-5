const Album = require('../models/albums.model');

module.exports = {
	async index(req, res) {
		try {
			const { userId } = req.params;
			const q = req.query;
			const albums = q ? await Album.findAll({ where: { ...q, userId } }) : await Album.findAll({ where: { userId } });
			res.status(200).send(albums);
		} catch (error) {
			res.status(400).send(error);
		}
	}
}
