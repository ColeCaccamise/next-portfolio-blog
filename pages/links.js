import Head from 'next/head';
import Link from 'next/link';

const links = () => {
	return (
		<div>
			<Head>
				<title>Cole Caccamise - Links</title>
			</Head>

			<h1>Links</h1>
			<p>
				You may want to visit{' '}
				<Link className='underline' href='https://caccamedia.com/links'>
					caccamedia.com/links
				</Link>
			</p>
		</div>
	);
};

export default links;
