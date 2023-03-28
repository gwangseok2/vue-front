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
					<p v-if="!isContentsValid" class="validation-text warining">Contents length must be less than 200</p>
				</div>
				<button type="submit" class="btn">Create</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
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
			logMessage: '',
		};
	},

	computed: {
		isContentsValid() {
			return this.contents.length < 200;
		},
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
				this.logMessage = error.response.data.message;
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
