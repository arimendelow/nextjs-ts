// This is the Link API
import Link from 'next/link';
import * as React from 'react';

import Layout from '../components/Layout';

// Declare props as an object literal with an optional key, 'title', of type string
type Props = {
	title?: string
};

const PostLink: React.FunctionComponent<Props> = ({
	title = 'default title'
}) => (
	<li>
		<Link href={`/post?title=${title}`}>
			<a>{title}</a>
		</Link>
	</li>
);

const Blog = () => (
	<React.Fragment>
		<h1>My Blog</h1>
		<ul>
			<PostLink title="Hello Next.js" />
			<PostLink title="Learning Next.js is awesome" />
			<PostLink title=" Deploy apps with Zeit" />
		</ul>
	</React.Fragment>

);

export default Layout(Blog);