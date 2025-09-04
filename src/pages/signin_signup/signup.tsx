import { useState } from 'react';
import useSignUp from '../../mutations/useSignup';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { mutate } = useSignUp();

	const handleSubmit = (e) => {
		e.preventDefault();
		mutate({ email, username, password });
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-black text-white font-mono tracking-wide">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col w-80 p-6 border border-white gap-4"
			>
				<label htmlFor="email" className="uppercase text-sm">
					Email
				</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="bg-black border border-white p-2 text-white focus:outline-none focus:bg-white focus:text-black transition-colors duration-300"
				/>

				<label htmlFor="username" className="uppercase text-sm">
					Nickname
				</label>
				<input
					id="username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="bg-black border border-white p-2 text-white focus:outline-none focus:bg-white focus:text-black transition-colors duration-300"
				/>

				<label htmlFor="password" className="uppercase text-sm">
					Password
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
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
}
