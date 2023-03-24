import Vue from 'vue';
import Vuex from 'vuex';
import { saveUserToCookie, saveAuthToCookie, getAuthFromCookie, getUserFromCookie, deleteCookie } from '@/utill/cookies';
import { loginUser } from '@/api/index';
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: getUserFromCookie() || '',
		token: getAuthFromCookie() || '',
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
			deleteCookie('til_auth');
			deleteCookie('til_user');
			console.log('delete');
		},

		setToken(state, token) {
			state.token = token;
		},
	},

	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			console.log(data.token);
			commit('setToken', data.token);
			commit('setUsername', data.user.username);
			saveAuthToCookie(data.token);
			saveUserToCookie(data.user.username);
			// 안해도 되지만 명시 promise라서
			return data;
		},
	},
});
