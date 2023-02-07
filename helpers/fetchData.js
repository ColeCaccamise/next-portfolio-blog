const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL;

const fetchData = async (query, { variables = {} }) => {
	const headers = { 'Content-Type': 'application/json' };

	const res = await fetch(graphQLAPI, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();

	console.log(json);

	if (json.errors) {
		throw new Error(json.errors);
	}

	if (json == undefined) {
		return null;
	}

	return json;
};

export default fetchData;
