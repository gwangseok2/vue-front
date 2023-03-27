<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<div>
					<label for="title">Title:</label>
					<input v-model="title" id="title" type="text" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea v-model="contents" id="contents" type="text" rows="5" />
				</div>
				<button type="submit" class="btn">Create</button>
			</form>
		</div>
	</div>
</template>

<script>
import { createPost } from '@/api/index';
export default {
	data() {
		return {
			title: '',
			contents: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const { data } = await createPost({
					title: this.title,
					contents: this.contents,
				});
				console.log('submit', data);
			} catch (error) {
				console.log(error.response.data.message);
			}
		},
	},
};
</script>

<style scoped>
h1 {
	text-align: center;
}
</style>
