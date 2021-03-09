import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
	constructor(props) {
		super(props);
		const angle = Math.random() * 60 - 30;
		const xPos = Math.random() * 40 - 20;
		const yPos = Math.random() * 40 - 20;
		this._style = {
			transform: `rotate(${angle}deg) translate(${xPos}px, ${yPos}px)`,
			transformOrigin: 'center'
		};
	}
	render() {
		return (
			<div className="Card">
				<img
					src={this.props.card.imgUrl}
					alt={this.props.card.alt}
					style={this._style}
				/>
			</div>
		);
	}
}
