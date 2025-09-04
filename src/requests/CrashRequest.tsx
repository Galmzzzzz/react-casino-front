import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('jwt');

const CrashRequest = async (data: { bet: number; stop_value: number }) => {
	const response = await axios.post('http://localhost:8000/crash/', data, {
		headers: {
			Authorization: `Token ${token}`,
		},
	});
	return response.data;
};

export default CrashRequest;
