// This is the Link API
import Link from 'next/link';
import * as React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

import '../styles/tailwind.src.css';

type Props = {};

const Index: NextPage<Props> = ({
	// Props go here
}) => (
	<div className="h-screen w-screen table">
		<h1 className="text-5xl text-center table-cell align-middle">Hello, world!</h1>
	</div>
);


export default Index;