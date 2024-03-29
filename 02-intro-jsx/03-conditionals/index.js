function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
	render() {
		const num = getNum();
		let msg;
		if (num === 7) {
			msg = (
				<img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif" />
			);
		} else {
			msg = null;
		}
		return (
			<div>
				<h1>Your number is: {num}</h1>
				<p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
				{num === 7 ? (
					<img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif" />
				) : null}
				{num === 7 && (
					<img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif" />
				)}
				{msg}
			</div>
		);
	}
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
