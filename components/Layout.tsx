import { NextPage } from 'next';
import Header from './Header';
import '../styles/tailwind.src.css';

type PageProps = {};

const Layout: React.FunctionComponent<PageProps> = ({
	children
}) => (
	<div className="m-20 p-20 border border-red-800">
		<Header />
		{children}
	</div>
);

export default Layout;