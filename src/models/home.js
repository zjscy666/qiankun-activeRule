export default {
    namespace: 'home',
    state: {
        count: 1
    },

    effects: {
		
    },

    reducers: {
        updateState(state, action) {
            return { ...state, ...action.payload };
        },
    }
}