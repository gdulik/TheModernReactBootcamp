import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageFilter from './ImageFilter';
import './DogPreview.css';

export default class DogPreview extends Component {
	render() {
		return (
			<div className="row text-center">
				<h1 className="display-1">Click a Dog!</h1>
				{this.props.dogs.map((dog, idx) => (
					<div className="DogPreview col-md-4 col-12" key={idx}>
						<ImageFilter>
							<img
								src={dog.src}
								alt={dog.name}
								className="rounded-circle mt-3"
							/>
						</ImageFilter>
						<h4 className="mt-3">
							<Link
								className="DogPreview-link"
								to={`/dogs/${dog.name}`}
							>
								{dog.name.toUpperCase()}
							</Link>
						</h4>
					</div>
				))}
			</div>
		);
	}
}
