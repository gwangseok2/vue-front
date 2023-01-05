import Vue from 'vue';
import VueRouter from 'vue-router';
import SignupPage from '@/views/LoginPage.vue';
import LoginPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/login',
			component: LoginPage,
		},
		{
			path: 'signUp',
			component: SignupPage,
		},
	],
});
