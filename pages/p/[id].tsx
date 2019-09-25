// Note that the name of this file is in brackets - this makes it a dynamic route
// Inside of the brackets, we put the name of the query param received by the page that we want to use

import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

import Layout from '../../components/Layout';

type Show = {
	id: number,
	name: string,
	summary: string,
	image: {
		medium: string,
		original: string
	}
}

type Props = {
	show: Show
};

const Post: NextPage<Props> = ({
	show = {
		id: '',
		name: '',
		summary: '',
		image: {
			medium: '',
			original: ''
		}
	}
}) => (
	<Layout>
		<h1 className="text-2xl pb-5">{show.name}</h1>
		<p>{show.summary.replace(/<[/]?p>/g, '')}</p>
		<img className="content-center m-auto shadow-lg" src={show.image.medium} />
	</Layout>
);

Post.getInitialProps = async function(context) {
	const { query } = context;
	const { id } = query;

	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();

	console.log(`Fetched show: ${show.name}`);

	return { show };
};

export default Post;