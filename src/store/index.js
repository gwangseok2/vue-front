import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: '',
		token: '',
	},

	getters: {
		isLogin(state) {
			// 로그인 되면 트루를
			return state.username !== '';
		},
	},

	mutations: {
		setUsername(state, data) {
			console.log(data);
			state.username = data;
		},

		clearUsername(state) {
			state.username = '';
		},

		setToken(state, token) {
			state.token = token;
		},
	},
});
