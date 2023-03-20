import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';

// 인터샙트 포함해서 쓸 때 함수화
function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_BASE_URL,
	});
	return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(data) {
	return instance.post('/signup', data);
}

function loginUser(data) {
	return instance.post('/login', data);
}

export { registerUser, loginUser };
