import { instance } from '@/api/index';

// 로그인, 회원가입, 회원 탈퇴 계정 관련 api
// 회원가입
function registerUser(data) {
	return instance.post('/signup', data);
}

// 로그인
function loginUser(data) {
	return instance.post('/login', data);
}

export { registerUser, loginUser };
