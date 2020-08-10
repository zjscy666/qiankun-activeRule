export default {
	namespace: 'app',
	state: {
		history: {},
		initMicro: false,
		initRefresh: true,
		showAnimation: false,
		locale: 'en',
		defaultKey: '',
	},

	subscriptions: {
		setup({ dispatch, history }) {  // eslint-disable-line
		},
	},

	effects: {},

	reducers: {
		updateState(state, action) {
			return { ...state, ...action.payload };
		},
	}
}