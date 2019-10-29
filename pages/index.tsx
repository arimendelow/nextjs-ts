// This is the Link API
import Link from 'next/link';
import * as React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

type Props = {};

const Index: NextPage<Props> = ({
	// Props go here
}) => (
	<h1>Hello, world!</h1>
);


export default Index;