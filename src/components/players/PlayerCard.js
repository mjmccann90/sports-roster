import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PlayCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <img src={require('./placeholder.svg')} alt="Player picture" />
                    </picture>
                    <h3>Name:<span className="card-player-name">John Smith</span></h3>
                    <p>Position: Water boy</p>
                </div>
            </div>
        );
    }
}

export default PlayCard;