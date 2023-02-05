import Link from 'next/link';
import ns from '../styles/Navbar.module.scss';

const Navbar = () => {
	return (
		<div className='container'>
			<nav className={ns.navbar}>
				<Link href='/' className={`${ns.navbar__logo}`}>
					Cole Caccamise
				</Link>

				<ul>
					<li>
						<Link href='/blog'>Blog</Link>
					</li>
					<li>
						<Link href='/links'>Links</Link>
					</li>

					<li>
						<Link href='/store'>Store</Link>
					</li>

					<li>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
