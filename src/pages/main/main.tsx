import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

export default function Main() {
	const isAuth = Boolean(Cookies.get('jwt'));
	const username = useSelector((state) => state.user.username);

	return (
		<div className="min-h-screen flex flex-col bg-black text-white font-mono tracking-wide">
			{!isAuth ? (
				<div className="flex flex-1 items-center justify-center gap-8">
					Войдите в Аккаунты
				</div>
			) : (
				<>
					<div className="flex flex-1 items-center justify-center">
						<div className="text-xl uppercase">
							Добро пожаловать: <span className="font-bold">{username}</span>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
