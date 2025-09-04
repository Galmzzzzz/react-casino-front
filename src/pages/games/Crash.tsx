import { useState } from 'react';
import useCrash from '../../mutations/useCrash';

export default function Crash() {
	const [bet, setBet] = useState<number>();
	const [stopValue, setStopValue] = useState<number>(0);
	const [playing, setPlaying] = useState(false);
	const [multiplier, setMultiplier] = useState(0);
	const [message, setMessage] = useState('');
	const [gameResult, setGameResult] = useState<{
		isWin: boolean;
		payout: number;
		result: number;
	} | null>(null);

	const { mutate } = useCrash();

	const startGame = () => {
		if (!bet || bet <= 0) {
			setMessage('Введите корректную ставку!');
			return;
		}
		setMessage('');
		setGameResult(null);
		setMultiplier(1);
		setPlaying(true);

		// Здесь можно добавить анимацию роста multiplier,
		// но пока просто показываем статическое значение
		mutate(
			{ bet: bet, stop_value: stopValue },
			{
				onSuccess: (data) => {
					setPlaying(false);
					setGameResult({
						isWin: data.is_win,
						payout: data.payout,
						result: data.result,
					});
					setMultiplier(data.result);
				},
				onError: () => {
					setPlaying(false);
					setMessage('Ошибка при игре. Попробуйте снова.');
				},
			}
		);
	};

	return (
		<div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center gap-8 p-8">
			<h1 className="text-3xl uppercase font-bold">Crash</h1>

			{/* Ввод ставки */}
			<input
				type="number"
				value={bet || ''}
				onChange={(e) => setBet(Number(e.target.value))}
				placeholder="Введите ставку"
				disabled={playing}
				className="px-4 py-2 border border-white bg-transparent focus:outline-none text-center rounded-lg"
			/>

			{/* Ввод автостопа */}
			<input
				type="number"
				value={stopValue || ''}
				onChange={(e) => setStopValue(Number(e.target.value))}
				placeholder="Введите множитель"
				disabled={playing}
				className="px-4 py-2 border border-white bg-transparent focus:outline-none text-center rounded-lg"
			/>

			{/* Кнопка старта */}
			{!playing && (
				<button
					onClick={startGame}
					className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-lg"
				>
					Играть
				</button>
			)}

			{/* Текущий множитель */}
			<div className="text-5xl font-bold">{multiplier.toFixed(2)}x</div>

			{/* Результат игры */}
			{gameResult && (
				<div
					className={`text-xl font-bold px-4 py-2 rounded-lg ${
						gameResult.isWin ? 'bg-green-600' : 'bg-red-600'
					}`}
				>
					{gameResult.isWin
						? `Вы выиграли ${gameResult.payout.toFixed(2)}₸! (Множитель: ${gameResult.result.toFixed(2)}x)`
						: `Вы проиграли! Краш на ${gameResult.result.toFixed(2)}x`}
				</div>
			)}

			{/* Сообщение об ошибке */}
			{message && <div className="text-lg text-yellow-400">{message}</div>}
		</div>
	);
}
