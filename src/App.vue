<template>
	<div>
		<AppHeader></AppHeader>
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
export default {
	components: {
		AppHeader,
	},
};
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
