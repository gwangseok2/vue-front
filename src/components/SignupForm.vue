<template>
	<div class="signup-wrapper">
		<h1>회원가입 페이지</h1>
		<form @submit.prevent="checkData">
			<div class="row-item">
				<label for="user-name">ID</label>
				<input id="user-name" type="name" placeholder="이름을 입력 해주세요." v-model="userName" />
				<p v-if="!useremailValid && this.userName.length > 0" class="error-message">이메일 형식으로 입력해주세요.</p>
			</div>
			<div class="row-item">
				<label for="user-password">PW</label>
				<input id="user-password" type="password" placeholder="비밀번호를 입력 해주세요." autoComplete="on" v-model="userPassword" />
			</div>
			<div class="row-item">
				<label for="user-nickname">별명</label>
				<input id="user-nickname" type="text" placeholder="별명을 입력 해주세요." v-model="userNickname" />
			</div>
			<p v-if="logmessage">{{ logmessage }}</p>
			<button :class="{ active: useremailValid && passwordValid && userNickname.length > 0 }" :disabled="!passwordValid || !useremailValid || !userNickname.length > 0" type="submit">
				회원 가입 쿠쿠루
			</button>
		</form>
	</div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail, validPassword } from '@/utill/vaild';
export default {
	data() {
		return {
			userName: '',
			userPassword: '',
			userNickname: '',
			logmessage: '',
		};
	},

	computed: {
		useremailValid() {
			return validateEmail(this.userName);
		},
		passwordValid() {
			return validPassword(this.userPassword);
		},
	},

	methods: {
		checkData() {
			if (this.userName.length < 2 || this.userPassword.length < 7 || this.userNickname.length < 2) {
				this.logmessage = '';
				alert('입력을 제대로 해주세요.');
				return;
			} else {
				this.sendSignupData();
			}
		},

		async sendSignupData() {
			const sendObject = {
				username: this.userName.trim(),
				password: this.userPassword.trim(),
				nickname: this.userNickname.trim(),
			};
			// const { data, status } = await registerUser(sendObject);
			try {
				const { data, status } = await registerUser(sendObject);
				console.log(data, status);
				if (status === 200) {
					this.logmessage = `${data.username}님 회원가입 성공`;
					this.clearForm();
				}
			} catch (error) {
				console.log(error);
				alert(`${error.response.status}에러 이미 아이디가 존재합니다`);
				this.clearForm();
			}
		},

		clearForm() {
			this.userName = '';
			this.userPassword = '';
			this.userNickname = '';
		},
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
h1 {
	margin-bottom: 50px;
}
.signup-wrapper {
	box-sizing: border-box;
	max-width: 375px;
	margin: 0 auto;
	padding: 20px;
}
.row-item {
	margin-bottom: 10px;
}

.error-message {
	color: red;
	font-size: 12px;
	font-weight: 500;
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
