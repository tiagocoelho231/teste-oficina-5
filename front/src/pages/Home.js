import React from 'react';
import { Comments, Posts } from '../components';

const Home = () => {
	return (
		<main className="grid">
			<section className="posts-section">
				<h1>Posts</h1>
				<Posts />
			</section>
			<section className="comments-section">
				<h1>Comments</h1>
				<Comments />
			</section>
		</main>
	)
}

export default Home
