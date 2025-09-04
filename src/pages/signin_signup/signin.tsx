import { useState } from 'react';
import useSignIn from '../../mutations/useSignIn';

export default function SignIn() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { mutate } = useSignIn();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		mutate({ username, password });
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-black text-white font-mono tracking-wide">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-80 p-6 border border-white gap-4"
			>
				<label htmlFor="username" className="uppercase text-sm">
					Имя
				</label>
				<input
					id="username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="bg-black border border-white p-2 text-white focus:outline-none focus:bg-white focus:text-black transition-colors duration-300"
				/>

				<label htmlFor="password" className="uppercase text-sm">
					Пароль
				</label>
				<input
					id="password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="bg-black border border-white p-2 text-white focus:outline-none focus:bg-white focus:text-black transition-colors duration-300"
				/>

				<button
					type="submit"
					className="mt-4 border border-white py-2 uppercase hover:bg-white hover:text-black transition-colors duration-300"
				>
					Войти
				</button>
			</form>
		</div>
	);
}
