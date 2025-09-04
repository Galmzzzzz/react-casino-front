import { Link } from 'react-router-dom';

export default function GamesMain() {
	return (
		<div className="min-h-screen bg-black text-white font-mono flex items-center justify-center p-8">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
				{/* Рулетка */}
				<Link
					to="/roulette"
					className="border border-white p-6 flex flex-col items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer"
				>
					<h2 className="text-2xl font-bold mb-4 uppercase">Рулетка</h2>
					<p className="text-sm text-gray-400">Испытай удачу в классической рулетке</p>
				</Link>

				{/* Краш */}
				<Link
					to="/crash"
					className="border border-white p-6 flex flex-col items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer"
				>
					<h2 className="text-2xl font-bold mb-4 uppercase">Краш</h2>
					<p className="text-sm text-gray-400">Успей забрать до краха множителя</p>
				</Link>

				{/* Флип */}
				<Link
					to="/flip"
					className="border border-white p-6 flex flex-col items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer"
				>
					<h2 className="text-2xl font-bold mb-4 uppercase">Флип</h2>
					<p className="text-sm text-gray-400">Подбрось монету и проверь судьбу</p>
				</Link>
			</div>
		</div>
	);
}
