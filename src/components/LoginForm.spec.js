// vue 공식 테스트 라이브러리
import { shallowMount } from '@vue/test-utils';
import LoginForm from '@/components/LoginForm.vue';

describe('LoginForm.vue', () => {
	test('ID가 이메일 형식이 아니면 경고 메세지가 출력된다.', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					id: 'test',
				};
			},
		});

		// 컴포넌트가 부착되었을 때 태그를 찾을 수 있는 api utills에서 제공 v-if로 랜더가 안 될 경우 못찾음.
		const warningText = wrapper.find('.warning');

		// exists() vue-utill에서 제공하는 api 있으면 true 반환
		expect(warningText.exists()).toBeTruthy();
	});

	test('ID와 비밀번호가 입력되지 않은 경우 로그인 버튼이 비활성화 된다', () => {
		const wrapper = shallowMount(LoginForm, {
			data() {
				return {
					id: 'sging@naver.com',
					password: '',
				};
			},
		});
		// wrapper vm으로 접근
		console.log(wrapper.vm.useremailValid, 'hi');

		const button = wrapper.find('button');
		// 앞에 있는 값이 트루 일거다
		expect(button.element.disabled).toBeTruthy();
	});
});
