import React, { Component } from 'react';

//TODO: Make navbar with bootstrap

export default class Nav extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-dark navbar-inner ">
					<a class="navbar-brand" href="/">
						YOU
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item ">
								<a class="nav-link" href="/">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/Calm">
									Calm
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/Saying">
									Saying
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/Thankful">
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
