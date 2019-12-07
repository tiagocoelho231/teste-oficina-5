const Photo = require('../models/photos.model');

module.exports = {
	async index(req, res) {
		try {
			const { albumId } = req.params;
			const q = req.query;
			const photos = q ? await Photo.findAll({ where: { ...q, albumId } }) : await Photo.findAll({ where: { albumId } });
			res.status(200).send(photos);
		} catch (error) {
			res.status(400).send(error);
		}
	}
}
