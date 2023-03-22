<template>
	<div class="list-container">
		<h1>메인 페이지</h1>
		<ul>
			<PostListItem v-for="item in postItems" :key="item._id" :item="item" />
		</ul>
		<!-- <ul>
			<li v-for="item in postItems" :key="item._id">
				<div class="post-title">{{ item.title }}</div>
				<div class="post-contents">{{ item.contents }}</div>
				<div class="post-time">{{ item.createdAt }}</div>
			</li>
		</ul> -->
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api/index';
export default {
	components: {
		PostListItem,
	},

	data() {
		return {
			postItems: [],
		};
	},

	created() {
		if (this.$store.state.token !== '') {
			this.fetchData();
		}
	},

	methods: {
		async fetchData() {
			const { data } = await fetchPosts();
			console.log(data);
			this.postItems = data.posts;
		},
	},
};
</script>

<style>
h1 {
	text-align: center;
}
</style>
