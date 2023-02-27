<template>
	<header class="common-header">
		<router-link to="/login">로그인</router-link> |
		<router-link to="/signup">회원가입</router-link>
	</header>
</template>

<script>
export default {};
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
	width: 100%;
	text-align: center;
}
.common-header {
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #593af8;
}
.common-header a {
	color: #111;
}
.common-header .router-link-active {
	color: #fff;
}
</style>
