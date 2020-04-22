import React, { Component } from 'react';

export default class Thankful extends Component {
	render() {
		return (
			<div>
				<div className="thankful">
					<div className="container">
						<h2>What are you thankful for? Fill out the sentences down below.</h2>
						<div className="row">
							I'm thankful for <input type="text" placeholder="my family" /> because I choose to{' '}
							<input type="text" placeholder="visit them" /> today
						</div>
						<div className="row">
							I'm thankful for <input type="text" placeholder="my friends" /> because I choose to{' '}
							<input type="text" placeholder="call them" /> today
						</div>
						<div className="row">
							I'm thankful for <input type="text" placeholder="my pet" /> because I choose to{' '}
							<input type="text" placeholder="spend time with them" /> today
						</div>
						<div className="row">
							I'm thankful for <input type="text" placeholder="the ocean" /> because I choose to{' '}
							<input type="text" placeholder="walk by the sea" /> today
						</div>
						<div className="row">
							I'm thankful for <input type="text" placeholder="the music" /> because I choose to{' '}
							<input type="text" placeholder="listen to the favorite album" /> today
						</div>
					</div>
				</div>
				<div className="IconCredit">No data will be saved</div>
			</div>
		);
	}
}