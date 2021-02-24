class Machine extends React.Component {
	render() {
		const { s1, s2, s3 } = this.props;
		const isWinner = s1 === s2 && s2 === s3;
		const result = isWinner ? 'You win!' : 'You lose!';
		return (
			<div>
				<p>
					{s1}
					{s2}
					{s3}
				</p>
				<p>{result}</p>
			</div>
		);
	}
}
