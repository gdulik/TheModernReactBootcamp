import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
	render() {
		const { id, name, type, base_experience } = this.props;
		const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
		return (
			<div className="Pokecard">
				<h2 className="Pokecard-title">{name}</h2>
				<div className="Pokecard-image">
					<img src={imgSrc} alt={name} />
				</div>
				<div className="Pokecard-data">Type: {type}</div>
				<div className="Pokecard-data">EXP: {base_experience}</div>
			</div>
		);
	}
}

export default Pokecard;
