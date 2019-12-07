const Comment = require('../models/comments.model');

module.exports = {
	async index(req, res) {
		try {
			const { postId } = req.params;
			const q = req.query;
			const comments = q ? await Comment.findAll({ where: { ...q, postId } }) : await Comment.findAll({ where: { postId } });
			res.status(200).send(comments);
		} catch (error) {
			res.status(400).send(error);
		}
	}
}
