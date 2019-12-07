import axios from '../axios';

export default {
	state: { data: null, loading: false, error: null },
	reducers: {
		fetchStart: (state) => ({ ...state, data: null, loading: true, error: null }),
		fetchSuccess: (state, data) => ({ ...state, data, loading: false }),
		fetchError: (state, error) => ({ ...state, error, loading: false })
	},
	effects: dispatch => ({
		async fetch(payload, rootState) {
			dispatch.comments.fetchStart();
			try {
				if (!rootState.posts.data) {
					await dispatch.posts.fetch();
				}
				const data = await Promise.all(rootState.posts.data.map(async post => {
					const { data } = await axios.get(`/posts/${post.id}/comments`);
					console.log('data', data)
					return data;
				}));
				dispatch.comments.fetchSuccess(data);
			} catch (error) {
				dispatch.comments.fetchError(error);
			}
		}
	})
}