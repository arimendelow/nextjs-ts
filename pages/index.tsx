// This is the Link API
import Link from 'next/link';
import * as React from 'react';

import Layout from '../components/Layout';

// Declare props as an object literal with an optional key, 'title', of type string
type Props = {
	title?: string,
	id?: string
};

const PostLink: React.FunctionComponent<Props> = ({
	title = 'default title',
	id = ''
}) => (
	<li>
		{/* Need to add the 'as' prop to make dynamic routing work */}
		<Link href="/p/[id]" as={`/p/${id}`}>
			<a>{id}</a>
		</Link>
	</li>
);

const Blog = () => (
	<React.Fragment>
		<h1>My Blog</h1>
		<ul>
			<PostLink id="hello-nextjs" />
			<PostLink id="learn-nextjs" />
			<PostLink id=" deploy-nextjs" />
		</ul>
	</React.Fragment>
);

export default Layout(Blog);