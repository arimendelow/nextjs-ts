// Note that the name of this file is in brackets - this makes it a dynamic route
// Inside of the brackets, we put the name of the query param received by the page that we want to use

import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '../../components/Layout';

function Post() {
	const router = useRouter();

	return(
		<Layout>
			<h1>{router.query.id}</h1>
			<p>This is where the blog post content will go.</p>
		</Layout>
	);
}

export default Post;