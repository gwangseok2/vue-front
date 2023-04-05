<template>
	<div class="login-wrapper">
		<h1>로그인 페이지</h1>
		<form @submit.prevent="loginUser">
			<div class="row-item">
				<label for="user-name">ID</label>
				<input id="user-name" type="name" placeholder="아이디를 입력 해주세요." v-model="id" />
				<p v-if="!useremailValid && id.length > 0" class="warning">이메일 형식이 아닙니다.</p>
			</div>
			<div class="row-item">
				<label for="user-password">PW</label>
				<input id="user-password" type="password" placeholder="비밀번호를 입력 해주세요." autoComplete="on" v-model="password" />
			</div>
			<button :class="{ active: useremailValid && passwordValid }" :disabled="!passwordValid || !useremailValid" type="submit">로그인</button>
			<p v-if="logmessage">{{ logmessage }}</p>
		</form>
	</div>
</template>

<script>
import { validateEmail, validPassword } from '@/utill/vaild';
export default {
	data() {
		return {
			id: '',
			password: '',
			logmessage: '',
		};
	},
	computed: {
		useremailValid() {
			return validateEmail(this.id);
		},
		passwordValid() {
			return validPassword(this.password);
		},
	},
	methods: {
		async loginUser() {
			try {
				console.log(this.useremailValid, this.passwordValid);
				const userData = {
					username: this.id,
					password: this.password,
				};
				await this.$store.dispatch('LOGIN', userData);
				// const { data } = await loginUser(userData);
				// console.log(data.token);
				// this.$store.commit('setToken', data.token);
				// this.$store.commit('setUsername', data.user.username);
				// saveAuthToCookie(data.token);
				// saveUserToCookie(data.user.username);
				this.$router.push('/');
			} catch (error) {
				this.logmessage = error.response.data;
			}
		},

		clearForm() {
			this.id = '';
			this.password = '';
		},
	},
};
</script>

<style>
* {
	padding: 0;
	margin: 0;
}
h1 {
	margin-bottom: 50px;
}
.login-wrapper {
	box-sizing: border-box;
	max-width: 375px;
	margin: 0 auto;
	padding: 20px;
}
.row-item {
	margin-bottom: 10px;
}

input {
	width: 100%;
	height: 50px;
	border: 1px solid #ccc;
	margin: 5px auto;
	box-sizing: border-box;
	padding: 10px;
	border-radius: 8px;
}
button[type='submit'] {
	display: block;
	width: 100%;
	height: 50px;
	outline: none;
	border: none;
	background-color: #ccc;
	border-radius: 8px;
	color: #111;
	font-size: 14px;
	font-weight: bold;
	margin: 20px auto 0;
}
button[type='submit'].active {
	color: #fff;
	background-color: #593af8;
}
</style>
