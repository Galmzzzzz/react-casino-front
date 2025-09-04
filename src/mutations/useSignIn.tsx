import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import SignIn_request from '../requests/SignInRequest';
import { useNavigate } from 'react-router-dom';

export default function useSignIn() {
	const navigate = useNavigate();

	return useMutation({
		mutationKey: ['Signin'],
		mutationFn: SignIn_request,
		onSuccess: (data) => {
			Cookies.set('jwt', data.auth_token);
			console.log('Token:', data.auth_token);
			navigate('/profile');
			window.location.reload();
		},
		onError: (error) => {
			console.error('Ошибка входа:', error);
		},
	});
}
