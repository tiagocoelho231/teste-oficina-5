const Router = require('express').Router;
const router = Router();

const { postsController, usersController, commentsController, albumsController, photosController } = require('./controllers');

router.route('/posts')
	.get(postsController.index)
	.post(postsController.create);

router.route('/posts/:postId')
	.get(postsController.get)
	.patch(postsController.patch)
	.put(postsController.patch)
	.delete(postsController.remove);

router.route('/users').get(usersController.index);

router.route('/posts/:postId/comments').get(commentsController.index);

router.route('/users/:userId/albums').get(albumsController.index);

router.route('albums/:albumId/photos').get(photosController.index);

module.exports = router;