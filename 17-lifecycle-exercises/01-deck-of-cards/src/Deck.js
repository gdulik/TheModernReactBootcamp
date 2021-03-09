import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/';

export default class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck_id: '',
			cards: [],
			isEmpty: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.drawCard = this.drawCard.bind(this);
	}

	async componentDidMount() {
		const response = await axios.get(`${API_BASE_URL}/new/shuffle/`);
		this.setState({ deck_id: response.data.deck_id });
	}

	handleClick() {
		this.drawCard();
	}

	async drawCard() {
		const response = await axios.get(
			`${API_BASE_URL}/${this.state.deck_id}/draw/`
		);
		console.log(response);
		if (response.data.success) {
			const newCard = {
				imgUrl: response.data.cards[0].image,
				alt: response.data.cards[0].code
			};
			this.setState((prevState) => ({
				cards: [ ...prevState.cards, newCard ]
			}));
		} else {
			this.setState({ isEmpty: true });
		}
	}

	render() {
		const cards = this.state.cards.map((card) => (
			<Card key={card.alt} card={card} />
		));
		return (
			<div className="Deck">
				<h1 className="Deck-title">♦ Card Dealer ♦</h1>
				<h2 className="Deck-title">
					♦ A LITTLE DEMO MADE WITH REACT ♦
				</h2>
				{!this.state.isEmpty ? (
					<div className="Deck-button">
						<button onClick={this.handleClick}>
							Deal me a card!
						</button>
					</div>
				) : (
					<h1>Deck is empty</h1>
				)}

				<div className="Deck-cards">{cards}</div>
			</div>
		);
	}
}
