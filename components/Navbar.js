import Link from 'next/link';
import ns from '../styles/Navbar.module.scss';

const Navbar = () => {
	return (
		<div className='container'>
			<nav className={ns.navbar}>
				<div>
					<Link href='/' className={`${ns.navbar__logo}`}>
						Cole Caccamise
					</Link>

					<ul>
						<li>
							<Link href='/links'>Links</Link>
						</li>
						<li>
							<Link href='/store'>Wallpapers</Link>
						</li>
						<li>
							<Link href='/blog'>Blog</Link>
						</li>
					</ul>
				</div>

				<div>
					<ul>
						<li>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
