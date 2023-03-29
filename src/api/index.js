import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_BASE_URL,
	});
}

// 인터샙트 포함해서 쓸 때 함수화
function createInstanceWithAuth(url) {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_BASE_URL}${url}`,
	});
	return setInterceptors(instance);
}

export const instance = createInstance();
export const posts = createInstanceWithAuth('/posts');
