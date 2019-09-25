import { NextRouter, useRouter } from 'next/router';
import * as React from 'react';

import Layout from '../components/Layout';
import { string } from 'prop-types';

type Props = {
	title?: string
};

const Post = () => {
	const router = useRouter();

	return(
		<React.Fragment>
			<h1>{router.query.title}</h1>
			<p>This is where the blog post content will go.</p>
		</React.Fragment>
	);
};

export default Layout(Post);