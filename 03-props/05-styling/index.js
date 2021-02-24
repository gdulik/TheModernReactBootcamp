class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Slot Machines!</h1>
				<Machine s1="&#127826;" s2="&#127818;" s3="&#127815;" />
				<Machine s1="&#127818;" s2="&#127818;" s3="&#127818;" />
				<Machine s1="&#127826;" s2="&#127818;" s3="&#127826;" />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
