import Link from 'next/link';

const linkStyle = {
	marginRight: 15
};

const Header = () => (
	<div className="font-bold text-blue-900 p-10 pt-0">
		<Link href="/">
			<a style={linkStyle}>Home</a>
		</Link>
		<Link href="/about">
			<a style={linkStyle}>About</a>
		</Link>
	</div>
);

export default Header