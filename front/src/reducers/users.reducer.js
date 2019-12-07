import axios from '../axios';

export default {
	state: { data: null, loading: false, error: null },
	reducers: {
		fetchStart: (state) => ({ ...state, data: null, loading: true, error: null }),
		fetchSuccess: (state, data) => ({ ...state, data, loading: false }),
		fetchError: (state, error) => ({ ...state, error, loading: false })
	},
	effects: dispatch => ({
		async fetch(payload, state) {
			dispatch.posts.fetchStart();
			try {
				const { data } = await axios.get('/users');
				dispatch.posts.fetchSuccess(data);
			} catch (error) {
				dispatch.posts.fetchError(error);
			}
		}
	})
}