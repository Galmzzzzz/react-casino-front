import { useSelector } from 'react-redux';
import useLogout from '../../mutations/useLogout';

export default function Profile() {
	const { username, balance } = useSelector((state) => state.user);

	const { mutate } = useLogout();
	const handleLogOut = (e) => {
		e.preventDefault();
		mutate();
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono">
			<div className="w-80 p-6 border border-white flex flex-col gap-4 text-center">
				<div className="text-lg uppercase">User: {username}</div>
				<div className="text-lg uppercase">Balance: {balance}</div>
				<button
					onClick={handleLogOut}
					className="mt-4 border border-white py-2 uppercase hover:bg-white hover:text-black transition-colors duration-300"
				>
					Logout
				</button>
			</div>
		</div>
	);
}
