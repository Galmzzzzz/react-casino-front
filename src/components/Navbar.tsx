import { NavLink, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

export default function Navbar() {
	const balance = useSelector((state) => state.user.balance);
	const navigate = useNavigate();

	const token = Cookies.get('jwt'); // проверяем наличие токена

	const linkBase =
		'px-3 py-2 uppercase tracking-wide border-b-2 border-transparent hover:border-white transition-colors';
	const activeClass = ({ isActive }: { isActive: boolean }) =>
		isActive ? `${linkBase} border-white` : linkBase;

	return (
		<header className="sticky top-0 z-50 bg-black text-white font-mono">
			<nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14 border-b border-white/30">
				{/* Левые вкладки */}
				<div className="flex items-center gap-6">
					<NavLink to="/games" className={activeClass}>
						Games
					</NavLink>
					<NavLink to="/bonuses" className={activeClass}>
						Bonuses
					</NavLink>
				</div>

				{/* Правый блок: если есть jwt, показываем профиль и баланс, иначе — вход и регистрация */}
				<div className="flex items-center gap-4">
					{token ? (
						<>
							<Link
								to="/profile"
								className="px-3 py-2 uppercase tracking-wide border border-white/60"
							>
								Profile
							</Link>
							<div className="px-3 py-2 uppercase tracking-wide border border-white/60">
								Balance: <span className="font-bold">{balance ?? '—'}</span>
							</div>
							<button
								aria-label="Top up balance"
								onClick={() => navigate('/topup')}
								className="w-10 h-10 grid place-items-center border border-white hover:bg-white hover:text-black transition-colors"
								title="Top Up"
							>
								+
							</button>
						</>
					) : (
						<>
							<Link
								to="/signin"
								className="px-3 py-2 uppercase tracking-wide border border-white/60"
							>
								Sign In
							</Link>
							<Link
								to="/signup"
								className="px-3 py-2 uppercase tracking-wide border border-white/60"
							>
								Sign Up
							</Link>
						</>
					)}
				</div>
			</nav>
		</header>
	);
}
