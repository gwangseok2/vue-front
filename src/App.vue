<template>
	<div id="app">
		<AppHeaderVue />
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import AppHeaderVue from '@/components/coomon/AppHeader.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'App',
	components: {
		HelloWorld,
		AppHeaderVue,
	},
	created() {
		console.log('hi');
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
