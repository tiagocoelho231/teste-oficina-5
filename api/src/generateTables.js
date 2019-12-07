const connection = require('./config/db');
const Album = require('./models/albums.model');
const Comment = require('./models/comments.model');
const Photo = require('./models/photos.model');
const Post = require('./models/posts.model');
const User = require('./models/users.model');

connection.model('albums').belongsTo(connection.model('users'));
connection.model('posts').belongsTo(connection.model('users'));
connection.model('comments').belongsTo(connection.model('posts'));
User.sync();
Album.sync();
Comment.sync();
Photo.sync();
Post.sync();