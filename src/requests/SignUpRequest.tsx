import axios from 'axios';

const SignUp_request = async (user_data: { email: string; username: string; password: string }) => {
	const response = await axios.post('http://127.0.0.1:8000/auth/users/', user_data);
	console.log(response.data);
	return response.data;
};

export default SignUp_request;
