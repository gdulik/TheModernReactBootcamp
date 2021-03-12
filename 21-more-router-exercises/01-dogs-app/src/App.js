import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Dog from './Dog';
import DogPreview from './DogPreview';
import './App.css';
import whiskey from './images/whiskey.jpg';
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';

class App extends Component {
	static defaultProps = {
		dogs: [
			{
				name: 'Whiskey',
				age: 5,
				src: whiskey,
				facts: [
					'Whiskey loves eating popcorn.',
					'Whiskey is a terrible guard dog.',
					'Whiskey wants to cuddle with you!'
				]
			},
			{
				name: 'Hazel',
				age: 3,
				src: hazel,
				facts: [
					'Hazel has soooo much energy!',
					'Hazel is highly intelligent.',
					'Hazel loves people more than dogs.'
				]
			},
			{
				name: 'Tubby',
				age: 4,
				src: tubby,
				facts: [
					'Tubby is not the brightest dog',
					'Tubby does not like walks or exercise.',
					'Tubby loves eating food.'
				]
			}
		]
	};
	render() {
		const getDog = (props) => {
			const name = props.match.params.dogName;
			const currentDog = this.props.dogs.find(
				(dog) => dog.name.toLowerCase() === name.toLowerCase()
			);
			return <Dog {...props} dog={currentDog} />;
		};
		const names = this.props.dogs.map((dog) => dog.name);
		return (
			<div className="App min-vh-100">
				<Navbar names={names} />
				<div className="container">
					<div className="d-flex justify-content-center py-5">
						<Switch>
							<Route
								exact
								path="/"
								render={() => <Redirect to="/dogs" />}
							/>
							<Route
								exact
								path="/dogs"
								render={() => <DogPreview {...this.props} />}
							/>
							<Route
								exact
								path="/dogs/:dogName"
								render={getDog}
							/>
							<Route
								render={() => (
									<h1 className="display-1">
										Page not found
									</h1>
								)}
							/>
						</Switch>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
