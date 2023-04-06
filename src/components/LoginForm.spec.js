import { sum } from '@/components/math';

// describe 연관된 테스트 케이스를 그룹화하는 API
describe('math.js', () => {
	test('10 + 20 = 30', () => {
		const result = sum(10, 20);
		// result check
		expect(result).toBe(30);
	});
});
