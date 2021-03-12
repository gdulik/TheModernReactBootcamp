import React, { Component } from 'react';
import ImageFilter from './ImageFilter';
import { Link, withRouter } from 'react-router-dom';

class Dog extends Component {
	render() {
		if (!this.props.dog) {
			this.props.history.goBack();
			// this.props.history.push('/');
		}
		const { name, age, src, facts } = this.props.dog;

		return (
			<div className="card shadow" style={{ width: '30rem' }}>
				<ImageFilter>
					<img src={src} className="card-img-top" alt={name} />
				</ImageFilter>
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">
						{age} years old
					</h6>
				</div>
				<ul className="list-group list-group-flush">
					{facts.map((fact, idx) => (
						<li className="list-group-item" key={idx}>
							{fact}
						</li>
					))}
				</ul>
				<div className="card-body">
					<Link to="/" className="btn btn-info text-white">
						Go back
					</Link>
				</div>
			</div>
		);
	}
}

export default withRouter(Dog);
