import React, { Component } from 'react';

class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: '',
			height: '',
			color: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.addBox(this.state);
		this.setState({
			width: '',
			height: '',
			color: ''
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="box-width">Width</label>
					<input
						id="box-width"
						type="text"
						name="width"
						value={this.state.width}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="box-height">Height</label>
					<input
						id="box-height"
						type="text"
						name="height"
						value={this.state.height}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="box-color">Color</label>
					<input
						id="box-color"
						type="text"
						name="color"
						value={this.state.color}
						onChange={this.handleChange}
					/>
				</div>
				<button>Add Box!</button>
			</form>
		);
	}
}

export default NewBoxForm;
