import { useState } from 'react';

export default function Roulette() {
	const [color, setColor] = useState(null); // red / black
	const [bet, setBet] = useState('');
	const [spinning, setSpinning] = useState(false);
	const [result, setResult] = useState(null);
	const [message, setMessage] = useState('');

	const handleSpin = () => {
		if (!color || !bet) {
			setMessage('Выбери цвет и введи ставку!');
			return;
		}
		setMessage('');
		setSpinning(true);
		setResult(null);

		setTimeout(() => {
			const random = Math.random() < 0.5 ? 'red' : 'black';
			setResult(random);
			setSpinning(false);
			setMessage(
				random === color
					? `Поздравляем! Вы выиграли ${bet * 2}`
					: `Увы, вы проиграли ${bet}`
			);
		}, 2000);
	};

	return (
		<div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center gap-8 p-8">
			<h1 className="text-3xl uppercase font-bold">Рулетка</h1>
			<div className="flex gap-4">
				{['red', 'black'].map((c) => (
					<button
						key={c}
						onClick={() => setColor(c)}
						className={`px-6 py-3 border transition ${
							color === c
								? c === 'red'
									? 'bg-red-600 text-white'
									: 'bg-white text-black'
								: 'border-white hover:bg-white hover:text-black'
						}`}
					>
						{c === 'red' ? 'Красное' : 'Чёрное'}
					</button>
				))}
			</div>
			<input
				type="number"
				value={bet}
				onChange={(e) => setBet(e.target.value)}
				placeholder="Введите ставку"
				className="px-4 py-2 border border-white bg-transparent focus:outline-none text-center"
			/>
			<button
				onClick={handleSpin}
				disabled={spinning}
				className="px-6 py-3 border border-white hover:bg-white hover:text-black transition disabled:opacity-50"
			>
				{spinning ? 'Крутим...' : 'Крутить'}
			</button>
			<div className="h-20 flex items-center justify-center">
				{spinning ? (
					<div className="animate-spin rounded-full border-4 border-t-transparent border-white w-16 h-16"></div>
				) : result ? (
					<div className="text-xl">
						Выпало:{' '}
						<span
							className={`font-bold uppercase ${
								result === 'red' ? 'text-red-500' : 'text-white'
							}`}
						>
							{result === 'red' ? 'Красное' : 'Чёрное'}
						</span>
					</div>
				) : null}
			</div>
			{message && <div className="text-lg">{message}</div>}
		</div>
	);
}
