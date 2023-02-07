import fetchData from '../helpers/fetchData';
import { SingleBlogQuery } from './SingleBlogQueries';

const getData = async (query, dataName, variables = {}) => {
	const data = await fetchData(query, {
		variables,
	});

	return data.data[dataName];
};

export default getData;
