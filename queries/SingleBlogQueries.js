export const SingleBlogQuery = `
    #graphql
    query SingleBlog($blog_slug: String) {
        blog(filter: {slug: {_eq: $blog_slug}}) {
            id
            slug
            title
            body
            user_created
            user_updated
            date_created
            date_updated
        }
    }
`;
