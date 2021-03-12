import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleBack = this.handleBack.bind(this);
	}

	handleLogin() {
		alert('Logged you in');
		this.props.history.push('/food/salmon');
	}

	handleBack() {
		this.props.history.goBack();
	}

	render() {
		return (
			<div className="Navbar">
				<button onClick={this.handleBack}>Go back</button>
				<button onClick={this.handleLogin}>Log In</button>
			</div>
		);
	}
}

export default withRouter(Navbar);
