import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor: 'teal',
			newColorName: ''
		};
		this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule('isColorUnique', (value) =>
			this.props.colors.every(
				({ color }) => color !== this.state.currentColor
			)
		);
	}

	updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit() {
		const newColor = {
			name: this.state.newColorName,
			color: this.state.currentColor
		};
		this.props.addNewColor(newColor);
		this.setState({ newColorName: '' });
	}

	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div className={classes.container}>
				<ChromePicker
					color={currentColor}
					onChangeComplete={this.updateCurrentColor}
					className={classes.picker}
				/>
				<ValidatorForm
					onSubmit={this.handleSubmit}
					ref="form"
					instantValidate={false}
				>
					<TextValidator
						className={classes.colorNameInput}
						placeholder="Color Name"
						value={newColorName}
						onChange={this.handleChange}
						name="newColorName"
						variant="filled"
						margin="normal"
						validators={[
							'required',
							'isColorNameUnique',
							'isColorUnique'
						]}
						errorMessages={[
							'Enter a color name',
							'Color name must be unique',
							'Color already used!'
						]}
					/>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						className={classes.addColor}
						style={{
							backgroundColor: paletteIsFull
								? 'grey'
								: currentColor
						}}
						disabled={paletteIsFull}
					>
						{paletteIsFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
