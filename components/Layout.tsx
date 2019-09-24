import * as React from 'react';
import Header from './Header';

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

// Add any optional children of props here
type Props = {};

const Layout: React.FunctionComponent<Props> = ({
	children
}) => (
	<div style={layoutStyle}>
		<Header />
		{children}
	</div>
);

export default Layout;