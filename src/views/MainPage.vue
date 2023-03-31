<template>
	<div class="list-container">
		<h1>메인 페이지</h1>
		<LoadingSpinner v-if="isLoading" />
		<ul v-else>
			<PostListItem v-for="item in postItems" :key="item._id" :item="item" @refresh="fetchData" />
		</ul>
		<router-link to="/add" class="create-button" style="text-decoration: none"> + </router-link>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/posts';
export default {
	components: {
		PostListItem,
		LoadingSpinner,
	},

	data() {
		return {
			postItems: [],
			isLoading: false,
		};
	},

	created() {
		if (this.$store.state.token !== '') {
			this.fetchData();
		}
	},

	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			console.log(data);
			this.postItems = data.posts;
		},
	},
};
</script>

<style scoped>
h1 {
	text-align: center;
}
</style>
