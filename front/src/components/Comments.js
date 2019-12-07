import React, { useEffect } from 'react'
import { connect } from 'react-redux';

const Post = ({ comment }) => (
	<article className="post-article">
		<h2>{comment.title}</h2>
		<p>{comment.body}</p>
	</article>
);

const Comments = ({ fetchComments, comments }) => {
	useEffect(() => {
		fetchComments();
	}, []);// eslint-disable-line react-hooks/exhaustive-deps

	if (!comments)
		return null;

	return (
		comments.map((comment, index) => <Post key={index} post={comment} />)
	)
}

const mapStateToProps = ({ comments: { data: comments } }) => ({ comments });

const mapDispatchToProps = dispatch => ({
	fetchComments: () => dispatch.comments.fetch()
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);