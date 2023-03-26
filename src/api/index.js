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

// 회원가입
function registerUser(data) {
	return instance.post('/signup', data);
}

// 로그인
function loginUser(data) {
	return instance.post('/login', data);
}

// 학습 노트 데이터 조회
function fetchPosts() {
	return instance.get('/posts');
}

// 학습 노트 데이터 생성
function createPost(data) {
	return instance.post('/posts', data);
}

export { registerUser, loginUser, fetchPosts, createPost };
