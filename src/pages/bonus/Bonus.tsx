export default function Bonus() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-black text-white font-mono">
			<div className="flex flex-col items-center gap-4 w-full max-w-md">
				<input
					type="text"
					placeholder="Введите промокод"
					className="w-full px-4 py-2 bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
				/>
				<button className="w-full px-4 py-2 border border-white bg-black hover:bg-white hover:text-black transition-colors duration-300">
					Использовать
				</button>
			</div>
		</div>
	);
}
