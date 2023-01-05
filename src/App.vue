<template>
	<div>
		<header class="common-header">
			<router-link to="/login">로그인</router-link> |
			<router-link to="/signup">회원가입</router-link>
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
export default {};
</script>

<style>
a {
	text-decoration: none;
	color: inherit;
	font-size: 28px;
	font-weight: bold;
	display: block;
	width: 100%;
	text-align: center;
}
a:hover {
	opacity: 0.5;
}
.common-header {
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	background-color: #593af8;
}
</style>
