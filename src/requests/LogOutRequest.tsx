import axios from 'axios';
import Cookies from 'js-cookie';

const Logout = async () => {
	const token = Cookies.get('jwt');

	await axios.post(
		'http://127.0.0.1:8000/auth/token/logout/',
		{},
		{
			headers: {
				Authorization: `Token ${token}`,
			},
		}
	);

	Cookies.remove('jwt');
};

export default Logout;
