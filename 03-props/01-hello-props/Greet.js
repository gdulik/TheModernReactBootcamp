class Greet extends React.Component {
	render() {
		const { to, from } = this.props;
		const bangs = '!'.repeat(this.props.bangs);
		return (
			<div>
				<h1>
					Hello {to}, from {from}
					{bangs}
				</h1>
			</div>
		);
	}
}
