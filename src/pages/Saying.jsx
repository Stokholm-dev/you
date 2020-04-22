import React, { Component } from 'react';

export default class Saying extends Component {
    render() {
        switch(new Date().getDay()){
           
            case 0:
                return (
                    <div className="quoteSaying">
                    <div className="main">Over thinking kills your happiness</div>
                     <div className="NameSaying">- Unknown</div>
                </div>
                  )
                case 1:
                  return (
                    <div className="quoteSaying">
                    <h1 className="main">Your life isn't yours if you constantly care what others think</h1>
                     <h3 className="NameSaying">- Unknown</h3>
                </div>
                  )
                  case 2:
                    return (
                        <div className="quoteSaying">
                        <h1 className="main">Be the energy you want to attract</h1>
                         <h3 className="NameSaying">- Unknown</h3>
                    </div>
                      )
                  case 3:
                    return (
                        <div className="quoteSaying">
                        <h1 className="main">Aspire to inspire before we exspire</h1>
                         <h3 className="NameSaying">- Unknown</h3>
                    </div>
                      )
                  case 4:
                    return (
                        <div className="quoteSaying">
                        <h1 className="main">A healthy mind does not speak ill of others</h1>
                         <h3 className="NameSaying">- Unknown</h3>
                    </div>
                      )
                  case 5:
                    return (
                        <div className="quoteSaying">
                        <h1 className="main">What consumes your min, controls your life</h1>
                         <h3 className="NameSaying">- Unknown</h3>
                    </div>
                      )
                      case 6:
                    return (
                        <div className="quoteSaying">
                        <h1 className="main">The most beautiful thing you can wear is a smile</h1>
                         <h3 className="NameSaying">- Unknown</h3>
                    </div>
                      )
                default:
                  return '';
              
        }
    }
}