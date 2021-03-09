import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import './JokeList.css';

const API_URL = 'https://icanhazdadjoke.com/';

export default class JokeList extends Component {
	static defaultProps = {
		numJokesToGet: 10
	};

	constructor(props) {
		super(props);
		this.state = {
			jokes: []
		};
		this.handleVote = this.handleVote.bind(this);
	}

	async componentDidMount() {
		const jokes = [];
		while (jokes.length < this.props.numJokesToGet) {
			const res = await axios.get(API_URL, {
				headers: { Accept: 'application/json' }
			});
			jokes.push({ text: res.data.joke, votes: 0, id: res.data.id });
		}
		this.setState({ jokes });
	}

	handleVote(id, delta) {
		this.setState((prevState) => ({
			jokes: prevState.jokes.map(
				(joke) =>
					joke.id === id
						? { ...joke, votes: joke.votes + delta }
						: joke
			)
		}));
	}

	render() {
		return (
			<div className="JokeList">
				<div className="JokeList-sidebar">
					<h1 className="JokeList-title">
						<span>Dad</span> Jokes
					</h1>
					<img
						src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
						alt="Emoji"
					/>
					<button className="JokeList-getmore">New Jokes</button>
				</div>

				<div className="JokeList-jokes">
					{this.state.jokes.map((joke) => (
						<Joke
							joke={joke}
							key={joke.id}
							upvote={() => this.handleVote(joke.id, 1)}
							downvote={() => this.handleVote(joke.id, -1)}
						/>
					))}
				</div>
			</div>
		);
	}
}
