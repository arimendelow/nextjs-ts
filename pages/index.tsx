// This is the Link API
import Link from 'next/link';

import Layout from '../components/Layout';

const Index = () => (
	<Layout>
		<Link href="/about">
			<a>About Page</a>
		</Link>
		<p>Hello Next.js</p>
	</Layout>
);

export default Index;