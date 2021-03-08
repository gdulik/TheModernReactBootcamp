import React, { Component } from 'react';
import axios from 'axios';
import './ZenQuote.css';

export default class ZenQuote extends Component {
	constructor(props) {
		console.log('IN CONSTRUCTOR');
		super(props);
		this.state = { quote: '', isLoaded: false };
	}

	componentDidMount() {
		console.log('IN COMPONENT DID MOUNT');
		axios.get('https://api.github.com/zen').then((res) => {
			setTimeout(
				function() {
					this.setState({ quote: res.data, isLoaded: true });
				}.bind(this),
				1000
			);
		});
	}

	componentDidUpdate() {
		console.log('IN COMPONENT DID UPDATE');
	}

	render() {
		console.log('IN RENDER');
		return (
			<div>
				{this.state.isLoaded ? (
					<div>
						<h1>Always remember...</h1>
						<p>{this.state.quote}</p>
					</div>
				) : (
					<div className="loader" />
				)}
			</div>
		);
	}
}
