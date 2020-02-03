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
                    <h3>Name:<span className="card-player-name">{this.props.player.name}</span></h3>
                    <p>Position: {this.props.player.position}</p>
                </div>
            </div>
        );
    }
}

export default PlayCard;