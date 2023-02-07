import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Layout.module.scss';
import { useQuery } from 'react-query';
import { getPosts } from '../queries/getData';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Cole Caccamise</title>
				<meta
					name='description'
					content='Cole Caccamise is a tech content creator'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>This site is under construction.</h1>

				<div>
					<p>in here</p>

					<p>exiting</p>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}

// export const getStaticProps = async () => {
// 	const res = await directus.items('blog').readByQuery({
// 		limit: -1,
// 		fields: ['title', 'slug', 'id'],
// 	});

// 	return {
// 		props: {
// 			posts: res.data,
// 		},
// 	};
// };
