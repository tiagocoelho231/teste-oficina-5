import React, { useEffect } from 'react'
import { connect } from 'react-redux';

const Post = ({ post }) => (
	<article className="post-article">
		<h2>{post.title}</h2>
		<p>{post.body}</p>
	</article>
);

const Posts = ({ fetchPosts, fetchUsers, posts }) => {
	useEffect(() => {
		fetchPosts();
	}, []);// eslint-disable-line react-hooks/exhaustive-deps

	if (!posts)
		return null;

	return (
		posts.map((post, index) => <Post key={index} post={post} />)
	)
}

const mapStateToProps = ({ posts: { data: posts } }) => ({ posts });

const mapDispatchToProps = dispatch => ({
	fetchPosts: () => dispatch.posts.fetch()
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);