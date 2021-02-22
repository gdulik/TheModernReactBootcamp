const { Component } = React;

// class Hello extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 				<h1>Hello there!</h1>
// 			</div>
// 		);
// 	}
// }

function Hello() {
	return (
		<div>
			<h1>Hello there!</h1>
			<h1>Hello there!</h1>
			<h1>Hello there!</h1>
		</div>
	);
}

ReactDOM.render(<Hello />, document.getElementById('root'));
