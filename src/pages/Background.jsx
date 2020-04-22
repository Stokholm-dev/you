import React, { Component } from 'react';
import $ from 'jquery'; //Import of Jquery

export default class Background extends Component {
	componentDidMount() {
		var screenWidth = $(window).width();
		var screenHeight = $(window).height();
		var count = 300;

		for (var loop = 0; loop < count; loop++) {
			var star = document.createElement('div');
			star.setAttribute('class', 'dot'); //Adding class to star particle

			$('#sky').append(star);

			if (genRanNum(1, 5) === 5) {
				$(star).addClass('twinkle');
				$(star).css({
					'animation-duration': genRanNum(2, 10) + 's'
				});
			}

			var ranWH = genRanNum(1, 3);
			$(star).css({
				top: genRanNum(0, screenHeight),
				left: genRanNum(0, screenWidth),
				width: ranWH,
				height: ranWH
			});
		}

		function genRanNum(_n1, _n2) {
			var ranNum = Math.round(Math.random() * _n2 + _n1);
			return ranNum;
		}
	}
	render() {
		var skyStyle = {
			height: $(window).height(),
			width: $(window).width()
		};

		return <div id="sky" style={skyStyle} />;
	}
}
