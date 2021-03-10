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
			jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
			loading: false
		};
		this.seenJokes = new Set(this.state.jokes.map((joke) => joke.text));
		this.handleVote = this.handleVote.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		if (this.state.jokes.length === 0) {
			this.getJokes();
		}
	}

	async getJokes() {
		try {
			const jokes = [];
			while (jokes.length < this.props.numJokesToGet) {
				const res = await axios.get(API_URL, {
					headers: { Accept: 'application/json' }
				});
				const newJoke = res.data.joke;
				if (!this.seenJokes.has(newJoke)) {
					jokes.push({ text: newJoke, votes: 0, id: res.data.id });
					this.seenJokes.add(newJoke);
				} else {
					console.log('FOUND A DUPLICATE');
					console.log(newJoke);
				}
			}
			this.setState(
				(prevState) => ({
					jokes: [ ...prevState.jokes, ...jokes ],
					loading: false
				}),
				() =>
					window.localStorage.setItem(
						'jokes',
						JSON.stringify(this.state.jokes)
					)
			);
		} catch (e) {
			alert(e);
			this.setState({ loading: false });
		}
	}

	handleVote(id, delta) {
		this.setState(
			(prevState) => ({
				jokes: prevState.jokes.map(
					(joke) =>
						joke.id === id
							? { ...joke, votes: joke.votes + delta }
							: joke
				)
			}),
			() =>
				window.localStorage.setItem(
					'jokes',
					JSON.stringify(this.state.jokes)
				)
		);
	}

	handleClick() {
		this.setState({ loading: true }, this.getJokes);
	}

	render() {
		if (this.state.loading) {
			return (
				<div className="JokeList-spinner">
					<i className="far fa-8x fa-laugh fa-spin" />
					<h1 className="JokeList-title">Loading...</h1>
				</div>
			);
		}

		let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);

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
					<button
						className="JokeList-getmore"
						onClick={this.handleClick}
					>
						Fetch Jokes
					</button>
				</div>

				<div className="JokeList-jokes">
					{jokes.map((joke) => (
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
