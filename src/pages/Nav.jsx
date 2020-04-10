import React, { Component } from 'react';

//TODO: Make navbar with bootstrap

export default class Nav extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark navbar-inner ">
					<a className="navbar-brand" href="/Home">
						YOU
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item ">
								<a className="nav-link" href="/Home">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/Calm">
									Calm
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/Saying">
									Saying
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/Thankful">
									Thankful
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
