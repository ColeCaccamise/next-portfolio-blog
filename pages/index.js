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

				<p>
					You may want to visit{' '}
					<Link className='underline' href='https://caccamedia.com'>
						caccamedia.com
					</Link>
				</p>
			</main>
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
