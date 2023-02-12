import axios from 'axios';

const instance = axios.create({
	// baseURL: 'http://localhost:3000',
	baseURL: process.env.VUE_APP_BASE_URL,
});

function registerUser(data) {
	return instance.post('/signup', data);
}

export { registerUser };
