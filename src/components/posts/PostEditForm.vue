<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
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
				<button type="submit" class="btn">Edit</button>
			</form>
			<p class="log">
				{{ logMessage }}
			</p>
		</div>
	</div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
import bus from '@/utill/bus.js';

export default {
	data() {
		return {
			title: '',
			contents: '',
			logMessage: '',
		};
	},

	async created() {
		const id = this.$route.params.id;
		const { data } = await fetchPost(id);
		this.title = data.title;
		this.contents = data.contents;
	},

	computed: {
		isContentsValid() {
			return this.contents.length < 200;
		},
	},

	methods: {
		async submitForm() {
			try {
				const editData = {
					title: this.title,
					contents: this.contents,
				};

				// 이벤트버스
				bus.$emit('show:toast', `${this.title} was editted`);
				await editPost(this.$route.params.id, editData);
				// this.$router.push('/');
			} catch (e) {
				console.log(e);
			}
		},
	},
};
</script>

<style></style>
