import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('jwt');

const Flip = async (data: { bet: number; choice: string }) => {
	const response = await axios.post('http://localhost:8000/coin-flip/', data, {
		headers: {
			Authorization: `Token ${token}`,
		},
	});

	return response.data;
};

export default Flip;
