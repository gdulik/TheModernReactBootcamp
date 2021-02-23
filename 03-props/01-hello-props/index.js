class App extends React.Component {
	render() {
		return (
			<div>
				<Greet
					to="Paul"
					from="Ringo"
					bangs={3}
					data={[ 1, 2, 3, 4, 5 ]}
				/>
				<Greet to="Carla" from="Jason" bangs={1} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
