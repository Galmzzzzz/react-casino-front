import { useMutation } from '@tanstack/react-query';
import Logout from '../requests/LogOutRequest';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutUser } from '../store/user_slice';
import Cookies from 'js-cookie';

export default function useLogout() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return useMutation({
		mutationKey: ['logout'],
		mutationFn: Logout,
		onSuccess: () => {
			dispatch(LogoutUser());
			navigate('/signin');
			window.location.reload();
			Cookies.remove('jwt');
		},
	});
}
