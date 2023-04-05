<template>
	<header class="common-header">
		<router-link :to="logoLink">TIL</router-link>
		<div class="nav-wrapper">
			<template v-if="isUserLogin">
				<span>{{ $store.state.username }}님</span>
				<a href="javascript:;" @click="logoutUser">로그아웃</a>
			</template>
			<template v-else>
				<router-link v-if="!$store.state.username" to="/login">로그인</router-link>
				<router-link to="/signup">회원가입</router-link>
			</template>
		</div>
	</header>
</template>

<script>
export default {
	computed: {
		isUserLogin() {
			// store의 getter isLogin의 true false 값
			return this.$store.getters.isLogin;
		},
		logoLink() {
			return this.$store.getters.isLogin ? '/' : '/login';
		},
	},
	methods: {
		logoutUser() {
			this.$store.commit('clearUsername');
			this.$router.go();
		},
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
ul,
ol {
	list-style: none;
}
a {
	text-decoration: none;
	color: inherit;
	font-size: 28px;
	font-weight: bold;
	display: block;
	text-align: center;
}
.common-header {
	height: 80px;
	display: flex;
	align-items: center;
	background-color: #593af8;
}
.nav-wrapper {
	display: flex;
	align-items: center;
	margin-left: auto;
	justify-content: space-between;
	gap: 20px;
	box-sizing: border-box;
	padding-right: 10px;
}
.common-header a {
	color: #fff;
}
/* .common-header .router-link-active {
	color: #fff;
} */
.common-header > a:first-child {
	width: 22%;
	text-align: left;
	box-sizing: border-box;
	padding-left: 30px;
}
span {
	display: block;
	font-size: 28px;
	text-align: center;
	font-weight: bold;
	color: #fff;
	flex-shrink: 0;
}
</style>
