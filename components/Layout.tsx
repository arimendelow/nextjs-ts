import { NextPage } from 'next';
import Header from './Header';

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

type PageProps = {};

const Layout: React.FunctionComponent<PageProps> = ({
	children
}) => (
	<div style={layoutStyle}>
		<Header />
		{children}
	</div>
);

export default Layout;