import { posts } from '@/api/index';

// 학습 노트 조작과 관련된 CRUD API 함수 파일
// 학습 노트 데이터 조회
function fetchPosts() {
	return posts.get('');
}

// 학습 노트 데이터 생성
function createPost(data) {
	return posts.post('', data);
}

// 학습 노트 데이터 제거
function deletePost(id) {
	return posts.delete(id);
}

export { fetchPosts, createPost, deletePost };
