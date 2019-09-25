// This is the Link API
import Link from 'next/link';

import Layout from '../components/Layout';

type Props = {
	title?: string
};

const PostLink: React.FunctionComponent<Props> = ({
	title = 'default title',
}) => (
	<li>
		<Link href={`/post?title=${title}`}>
			<a>{title}</a>
		</Link>
	</li>
);

const Index = () => (
	<p>Hello Next.js</p>
);

export default Layout(Index);