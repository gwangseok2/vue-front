<template>
	<li>
		<div class="post-title">{{ item.title }}</div>
		<div class="post-contents">{{ item.contents }}</div>
		<div class="post-time">
			{{ item.createdAt | formatDate }}
			<i class="icon ion-md-create" @click="routeEditPage"></i>
			<i class="icon ion-md-trash" @click="deleteItem"></i>
		</div>
	</li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},

	// filters: {
	// 	formatDate(value) {
	// 		console.log('2');
	// 		const fillterDate = new Date(value);
	// 		return fillterDate.toISOString().split('T')[0];
	// 		// return new Date(value);
	// 	},
	// },

	methods: {
		async deleteItem() {
			const checkRemoveItem = confirm('게시물을 삭제 하시겠습니까?');
			if (checkRemoveItem) {
				const response = await deletePost(this.item._id);
				this.$emit('refresh');
				console.log(response, '삭제');
			}
		},

		routeEditPage() {
			this.$router.push(`/post/${this.item._id}`);
		},
	},
};
</script>

<style></style>
