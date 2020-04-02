import React, { Component } from 'react';
import Square from "../data/times-square.svg";
import Circle from "../data/circle.svg";
import Hexagon from "../data/hexagon.svg";
import Triangle from "../data/triangle.svg";


//TODO: Make 3 animations you can change from - to see
///* A square, a triangle, a circle and a hexagon - SVG */

//SQUARE Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//CIRCLE Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//HEXAGON <div>Icons made by <a href="https://www.flaticon.com/authors/retinaicons" title="Retinaicons">Retinaicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//TRIANGLE <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default class Calm extends Component {
	render() {
		return (
			<div>
				<div class="centering">
					<img
						class="object"
						src={Square}
						alt="Square"
						height="42"
						width="42"
					/>
				</div>
                <div className="IconCredit">Icon made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
{/*
				<div class="centering">
					<img
						class="object"
                        src={Circle}
                        alt="Circle"
						height="42"
						width="42"
					/>
				</div>
               <div className="IconCredit">
                Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </div>

				<div class="centering">
					<img
						class="object"
						src={Hexagon}
						alt="Hexagon"
						height="42"
						width="42"
					/>
				</div>
                <div className="IconCredit">Icons made by <a href="https://www.flaticon.com/authors/retinaicons" title="Retinaicons">Retinaicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

				<div class="centering">
					<img
						class="object"
						src={Triangle}
						alt="Triangle"
						height="42"
						width="42"
					/>
				</div>
                <div className="IconCredit">Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/}
                </div>
		);
	}
}
