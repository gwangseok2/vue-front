<template>
	<div class="signup-wrapper">
		<h1>회원가입 페이지</h1>
		<form @submit.prevent="checkData">
			<div class="row-item">
				<label for="user-name">ID</label>
				<input id="user-name" type="name" placeholder="이름을 입력 해주세요." v-model="userName" />
			</div>
			<div class="row-item">
				<label for="user-password">PW</label>
				<input id="user-password" type="password" placeholder="비밀번호를 입력 해주세요." autoComplete="on" v-model="userPassword" />
			</div>
			<div class="row-item">
				<label for="user-nickname">별명</label>
				<input id="user-nickname" type="text" placeholder="별명을 입력 해주세요." v-model="userNickname" />
			</div>
			<button type="submit">회원 가입 쿠쿠루</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userName: '',
			userPassword: '',
			userNickname: '',
		};
	},
	methods: {
		checkData() {
			if (this.userName.length < 2 || this.userPassword.length < 7 || this.userNickname.length < 2) {
				alert('입력을 제대로 해주세요.');
				return;
			} else {
				this.sendSignupData();
			}
		},

		sendSignupData() {
			const sendObject = {
				userName: this.userName.trim(),
				userPassword: this.userPassword.trim(),
				userNickname: this.userNickname.trim(),
			};
			console.log(sendObject, 'api 데이터');
		},
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
h1 {
	margin-bottom: 50px;
}
.signup-wrapper {
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
