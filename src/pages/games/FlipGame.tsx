import { useState } from 'react';
import useFlip from '../../mutations/useFlip';

export default function CoinFlip() {
	const [choice, setChoice] = useState<'heads' | 'tails' | null>(null);
	const [bet, setBet] = useState<number>(0);
	const [flipping, setFlipping] = useState(false);
	const [result, setResult] = useState<'heads' | 'tails' | null>(null);
	const [message, setMessage] = useState('');
	const [win, setWin] = useState<boolean | null>(null);
	const { mutate } = useFlip();

	const handleFlip = () => {
		if (!choice || !bet || bet <= 0) {
			setMessage('Выбери сторону и введи ставку больше нуля!');
			return;
		}
		setMessage('');
		setFlipping(true);
		setResult(null);
		setWin(null);

		mutate(
			{ choice, bet },
			{
				onSuccess: (data) => {
					setResult(data.result); // сервер возвращает { result: 'heads' | 'tails' }
					setFlipping(false);
					setWin(data.result === choice);
				},
				onError: () => {
					setMessage('Ошибка при запросе!');
					setFlipping(false);
				},
			}
		);
	};

	return (
		<div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center gap-8 p-8">
			<h1 className="text-3xl uppercase font-bold">Игра: Монетка</h1>

			{/* Выбор стороны */}
			<div className="flex gap-4">
				<button
					onClick={() => setChoice('heads')}
					className={`px-6 py-3 border transition rounded-lg ${
						choice === 'heads'
							? 'bg-white text-black border-white font-bold'
							: 'border-white hover:bg-white hover:text-black'
					}`}
				>
					Орёл
				</button>
				<button
					onClick={() => setChoice('tails')}
					className={`px-6 py-3 border transition rounded-lg ${
						choice === 'tails'
							? 'bg-white text-black border-white font-bold'
							: 'border-white hover:bg-white hover:text-black'
					}`}
				>
					Решка
				</button>
			</div>

			{/* Ставка */}
			<input
				type="number"
				value={bet || ''}
				onChange={(e) => setBet(Number(e.target.value))}
				placeholder="Введите ставку"
				className="px-4 py-2 border border-white bg-transparent focus:outline-none text-center rounded-lg"
			/>

			{/* Кнопка подбрасывания */}
			<button
				onClick={handleFlip}
				disabled={flipping}
				className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-lg disabled:opacity-50"
			>
				{flipping ? 'Подбрасываем...' : 'Подбросить монету'}
			</button>

			{/* Анимация или результат */}
			<div className="h-20 flex items-center justify-center">
				{flipping ? (
					<div className="animate-spin rounded-full border-4 border-t-transparent border-white w-16 h-16"></div>
				) : result ? (
					<div className="text-xl">
						Выпало:{' '}
						<span className="font-bold uppercase">
							{result === 'heads' ? 'Орёл' : 'Решка'}
						</span>
					</div>
				) : null}
			</div>

			{/* Выигрыш или проигрыш */}
			{win !== null && (
				<div
					className={`text-xl font-bold px-4 py-2 rounded-lg ${
						win ? 'bg-green-600' : 'bg-red-600'
					}`}
				>
					{win ? `Ты выиграл !` : `Ты проиграл !`}
				</div>
			)}

			{/* Сообщение об ошибке */}
			{message && <div className="text-lg text-yellow-400">{message}</div>}
		</div>
	);
}
