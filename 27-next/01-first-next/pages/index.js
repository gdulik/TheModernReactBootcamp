import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';

// class Index extends Component {
// 	constructor(props) {
// 		super(props);
// 		// console.log('Fetching your data in constructor!');
// 	}

// 	static async getInitialProps(ctx) {
// 		console.log('Fetching your data in getinitialprops!');
// 		return {};
// 	}

// 	// componentDidMount() {
// 	// 	console.log('Fetching your data in componentdidmount!');
// 	// }

// 	render() {
// 		return <h1>Our Index Page!!</h1>;
// 	}
// }

const Index = ({ posts }) => {
	return (
		<div>
			<h1>Our Index Page!!</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

Index.getInitialProps = async (ctx) => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
	const { data } = res;
	// console.log('Fetching your data in getinitialprops!');
	return { posts: data };
};

export default Index;
