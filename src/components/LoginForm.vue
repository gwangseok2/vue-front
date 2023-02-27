<template>
	<div class="login-wrapper">
		<h1>로그인 페이지</h1>
		<form @submit.prevent="loginUser">
			<div class="row-item">
				<label for="user-name">ID</label>
				<input id="user-name" type="name" placeholder="아이디를 입력 해주세요." v-model="id" />
			</div>
			<div class="row-item">
				<label for="user-password">PW</label>
				<input id="user-password" type="password" placeholder="비밀번호를 입력 해주세요." autoComplete="on" v-model="password" />
			</div>
			<button type="submit">로그인</button>
			<p v-if="logmessage">{{ logmessage }}</p>
		</form>
	</div>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utill/vaild';
export default {
	data() {
		return {
			id: '',
			password: '',
			logmessage: '',
		};
	},
	computed: {
		usernameValid() {
			return validateEmail(this.id);
		},
	},
	methods: {
		async loginUser() {
			try {
				if (this.id.length < 2 || this.password.length < 2) {
					alert('빈값 확인');
				} else {
					const userData = {
						username: this.id,
						password: this.password,
					};
					const { data } = await loginUser(userData);
					this.logmessage = `${data.user.nickname}님 환영합니다.`;
					this.clearForm();
				}
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
	background-color: #593af8;
	border-radius: 8px;
	color: #fff;
	font-size: 14px;
	font-weight: bold;
	margin: 20px auto 0;
}
</style>
