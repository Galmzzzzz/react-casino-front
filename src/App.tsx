import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Cookies from 'js-cookie';
import { setUser } from './store/user_slice';
import Main from './pages/main/main';
import SignIn from './pages/signin_signup/signin';
import SignUp from './pages/signin_signup/signup';
import Error from './pages/404/error_page';
import Profile from './pages/profile/profile';
import Layout from './components/Layout';
import Bonus from './pages/bonus/Bonus';
import GamesMain from './pages/games/GamesMain';
import CoinFlip from './pages/games/FlipGame';
import Roulette from './pages/games/Roulette';
import Crash from './pages/games/Crash';
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = Cookies.get('jwt');
		if (token) {
			axios
				.get('http://localhost:8000/auth/users/me/', {
					headers: {
						Authorization: `Token ${token}`,
					},
				})
				.then((response) => {
					// console.log(response.data);
					dispatch(setUser(response.data));
				})
				.catch((err) => {
					console.error('Ошибка загрузки пользователя:', err);
					Cookies.remove('jwt'); // если токен невалидный
				});
		}
	}, [dispatch]);

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Main />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="*" element={<Error />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/bonuses" element={<Bonus />}></Route>
				<Route path="/games" element={<GamesMain />}></Route>
				<Route path="/flip" element={<CoinFlip />}></Route>
				<Route path="/roulette" element={<Roulette />}></Route>
				<Route path="/crash" element={<Crash />}></Route>
			</Route>
		</Routes>
	);
}

export default App;
