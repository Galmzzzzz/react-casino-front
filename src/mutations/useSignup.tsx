import { useMutation } from '@tanstack/react-query';
import SignUp_request from '../requests/SignUpRequest';
import { useNavigate } from 'react-router-dom';

type SignUpData = {
	username: string;
	email: string;
	password: string;
};

export default function useSignUp() {
	const navigate = useNavigate();

	return useMutation({
		mutationKey: ['signup'],
		mutationFn: (data: SignUpData) => SignUp_request(data),
		onSuccess: (data) => {
			console.log('Регистрация успешна:', data);
			navigate('/signin');
		},
		onError: (error, variables) => {
			console.error('Ошибка регистрации:', error);
			console.log('Отправленные данные:', variables);
		},
	});
}
