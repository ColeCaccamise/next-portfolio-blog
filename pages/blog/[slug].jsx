import Head from 'next/head';
import { SingleBlogQuery } from '../../queries/SingleBlogQueries';
import getData from '../../queries/getData';

export default function BlogPost({ post }) {
	if (post == null) {
		return (
			<>
				<Head>
					<title>404 Page Not Found</title>
					<meta name='robots' content='noindex'></meta>
				</Head>

				<h1>This Page Does Not Exist</h1>
			</>
		);
	} else {
		return (
			<>
				<Head>
					<title>{post.title}</title>
				</Head>

				<h1>{post.title}</h1>
				{post.body}
			</>
		);
	}
}

export const getServerSideProps = async (ctx) => {
	const { slug } = ctx.query;

	const data = await getData(SingleBlogQuery, 'blog', { blog_slug: slug });

	if (data[0] == undefined) {
		return {
			props: {
				post: null,
			},
		};
	} else {
		return {
			props: {
				post: data[0],
			},
		};
	}
};
