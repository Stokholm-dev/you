import React, { Component } from 'react';

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
					<svg
						className="object"
						enable-background="new 0 0 482.239 482.239"
						alt="Square"
						height="42"
						width="42"
						viewBox="0 0 482.239 482.239"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="m465.016 0h-447.793c-9.52 0-17.223 7.703-17.223 17.223v447.793c0 9.52 7.703 17.223 17.223 17.223h447.793c9.52 0 17.223-7.703 17.223-17.223v-447.793c0-9.52-7.703-17.223-17.223-17.223zm-17.223 447.793h-413.347v-413.347h413.348v413.347z" />
					</svg>
				</div>
				<div className="IconCredit">
					Icon made by{' '}
					<a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">
						Those Icons
					</a>{' '}
					from{' '}
					<a href="https://www.flaticon.com/" title="Flaticon">
						{' '}
						www.flaticon.com
					</a>
				</div>
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
