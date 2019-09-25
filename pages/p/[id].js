import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '../../components/Layout';

function Post() {
	const router = useRouter();

	return(
		<React.Fragment>
			<h1>{router.query.id}</h1>
			<p>This is where the blog post content will go.</p>
		</React.Fragment>
	);
}

export default Layout(Post);