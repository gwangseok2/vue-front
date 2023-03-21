<template>
	<div>
		<h1>메인 페이지</h1>
		<p></p>
	</div>
</template>

<script>
import { fetchPosts } from '@/api/index';
export default {
	data() {
		return {};
	},

	created() {
		if (this.$store.state.token !== '') {
			console.log('hi');
			this.fetchData();
		}
	},

	methods: {
		async fetchData() {
			const response = await fetchPosts();
			console.log(response);
		},
	},
};
</script>

<style>
h1 {
	text-align: center;
}
</style>
