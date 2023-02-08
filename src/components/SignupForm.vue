<template>
	<div class="signup-wrapper">
		<h1>회원가입 페이지</h1>
		<form>
			<div>
				<lable for="user-name">id</lable>
				<input id="user-name" type="name" placeholder="이름을 입력 해주세요." v-model="userName" />
			</div>
			<div>
				<lable for="user-password">pw</lable>
				<input id="user-password" type="password" placeholder="비밀번호를 입력 해주세요." v-model="userPassword" />
			</div>
			<div>
				<lable for="user-nickname">nickname</lable>
				<input id="user-nickname" type="text" placeholder="닉네임을 입력 해주세요." v-model="userName" />
			</div>
			<button type="button" @click="checkData">회원 가입 쿠쿠루</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userName: '',
			userPassword: '',
		};
	},
	methods: {
		checkData() {
			if (this.userName.length < 2 || this.userPassword.length < 7) {
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
.signup-wrapper {
	padding: 20px;
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
button {
	display: block;
	margin: 0 auto;
}
</style>
