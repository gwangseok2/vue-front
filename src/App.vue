<template>
	<div>
		<AppHeader></AppHeader>
		<router-view></router-view>
		<ToastPopup />
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import ToastPopup from '@/components/common/ToastPopup.vue';
export default {
	components: {
		AppHeader,
		ToastPopup,
	},
};
</script>

<style>
@import '@/assets/css/common.css';
</style>
