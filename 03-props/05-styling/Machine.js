class Machine extends React.Component {
	render() {
		const { s1, s2, s3 } = this.props;
		const isWinner = s1 === s2 && s2 === s3;
		const result = isWinner ? 'You win!' : 'You lose!';
		const style = { fontSize: '20px', backgroundColor: 'white' };
		return (
			<div className="Machine">
				<p style={style}>
					{s1}
					{s2}
					{s3}
				</p>
				<p className={isWinner ? 'win' : 'lose'}>{result}</p>
			</div>
		);
	}
}
