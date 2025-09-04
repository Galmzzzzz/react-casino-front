import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
	return (
		<div className="min-h-screen flex flex-col bg-black text-white font-mono">
			<Navbar />
			<main className="flex-1 p-6">
				<Outlet />
			</main>
		</div>
	);
}
