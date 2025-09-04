import axios from 'axios';

const SignIn_request = async (user_data: { username: string; password: string }) => {
	const response = await axios.post('http://127.0.0.1:8000/auth/token/login/', user_data);
	return response.data;
};

export default SignIn_request;
