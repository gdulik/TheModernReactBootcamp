class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Loops</h1>
				<Messages />
				<Friend
					name="Elton"
					hobbies={[ 'Singing', 'Dancing', 'Drinking' ]}
				/>
				<Friend name="Frieda" hobbies={[ 'Singing', 'Running' ]} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
