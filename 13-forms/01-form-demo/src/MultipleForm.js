import React, { Component } from 'react';

class MultipleForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		alert(
			`You typed: ${this.state.username}, ${this.state.email}, ${this
				.state.password}`
		);
		this.setState({
			username: '',
			email: '',
			password: ''
		});
	}

	render() {
		return (
			<div>
				<h1>Multiple Form Demo</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="username">Username</label>
						<input
							id="username"
							type="text"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					<button>Submit!</button>
				</form>
			</div>
		);
	}
}

export default MultipleForm;
