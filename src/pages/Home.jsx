import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="container">
					<div className="row">
						<div className="col">
                            <div className="borderCard">
							    <a className="homeLink" href="/Calm"><h2 className="homeLinkText">Calm</h2><p className="descriptionHome">Click here to calm your breath by following the animation. </p></a>
                            </div>
						</div>
						<div className="col">
                        <div className="borderCard">
                        <a className="homeLink" href="/Saying"><h2 className="homeLinkText">Saying</h2> <p className="descriptionHome">Click here to get a inspirational quote of the day. The quote changes everyday.</p></a>
                        </div>
						</div>
						<div className="col">
                        <div className="borderCard">
                        <a className="homeLink" href="/Thankful"><h2 className="homeLinkText">Thankful</h2> <p className="descriptionHome">Click here to write down 5 things you are thankful for</p></a>   
                        </div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}
