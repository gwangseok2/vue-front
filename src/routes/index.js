import Vue from 'vue';
import VueRouter from 'vue-router';
// import SignupPage from '@/views/SignupPage.vue';
// import LoginPage from '@/views/LoginPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		// {
		// 	path: '/',
		// 	redirect: '/login',
		// },
		{
			path: '/',
			component: () => import('@/views/MainPage.vue'),
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
		},
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
});
