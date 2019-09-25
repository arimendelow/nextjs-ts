// This is the Link API
import Link from 'next/link';
import * as React from 'react';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import { string } from 'prop-types';

type show = {
	id: string,
	name: string
}
type Props = {
	shows: Array<show>;
};

const Index: NextPage<Props> = ({
	shows = []
}) => (
	<Layout>
		<h1 className="font-bold text-5xl pb-5 text-center">Batman TV Shows</h1>
		<ul className="text-center">
			{shows.map(show => (
				<li key={show.id} className="font-bold p-2 text-xl text-blue-900 underline">
					<Link href="/p/[id]" as={`/p/${show.id}`}>
						<a>{show.name}</a>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
);

Index.getInitialProps = async function() {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();
	
	console.log(`Show data fetched. Count: ${data.length}`);

	return {
		shows: data.map((entry: {show: object}) => {
			const { show } = entry || {}
			return show
		})
	};
};

export default Index;