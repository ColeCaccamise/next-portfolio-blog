import Navbar from '../components/Navbar';
import styles from '../styles/Layout.module.scss';
import Link from 'next/link';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />

			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
