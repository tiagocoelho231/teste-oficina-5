const Post = require('../models/posts.model');

module.exports = {
	async index(req, res) {
		try {
			const q = req.query;
			const posts = q ? await Post.findAll({ where: q }) : await Post.findAll();
			res.status(200).send(posts);
		} catch (error) {
			res.status(400).send(error);
		}
	},

	async get(req, res) {
		try {
			const post = await Post.findByPk(req.params.id);
			res.status(200).send(post);
		} catch (error) {
			res.status(400).send(error);
		}
	},

	async create(req, res) {
		try {
			const { title, body, userId } = req.body;
			const newPost = new Post({ title, body, userId });
			const post = await newPost.save();
			res.status(200).send(post);
		} catch (error) {
			res.status(400).send(error);
		}
	},

	async patch(req, res) {
		try {
			const { title, body, userId } = req.body;
			const post = await Post.update({ title, body, userId }, { where: { id: req.params.postId } });
			res.status(200).send(post);
		} catch (error) {
			res.status(400).send(error);
		}
	},

	async remove(req, res) {
		try {
			const post = await Post.destroy({ where: { id: req.params.postId } });
			res.status(200).send(post);
		} catch (error) {
			res.status(400).send(error);
		}
	}
}
