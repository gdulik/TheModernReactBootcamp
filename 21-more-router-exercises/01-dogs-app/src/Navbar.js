import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="/">
						Dog Shelter
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink
									exact
									className="nav-link"
									activeClassName="active"
									aria-current="page"
									to="/dogs"
								>
									Home
								</NavLink>
							</li>
							{this.props.names.map((name, idx) => (
								<li className="nav-item" key={idx}>
									<NavLink
										exact
										className="nav-link"
										activeClassName="active"
										to={`/dogs/${name}`}
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
