import fetchData from '../helpers/fetchData';

export const getPosts = async () => {
	const data = await fetchData(
		`
        query HomepagePosts {
            blog {
                id
                title
                slug
                body
            }
        }
        `,
		{
			variables: {},
		}
	);

	return data.data.blog;
};
