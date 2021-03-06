import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Player.css'

class PlayCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <i className="fas fa-user"></i>
                    </picture>

                    <h3><span className="card-player-name">{this.props.player.name}</span></h3>

                    <p>Position: {this.props.player.position}</p>

                    <button type="button" onClick={() => this.props.deletePlayer(this.props.player.id)}>Release</button>

                    <Link to={`/players/${this.props.player.id}`}><button>Details</button></Link>

                    <button type="button"
                        onClick={() => { this.props.history.push(`/players/${this.props.player.id}/edit`) }}>Edit</button>
                </div>
            </div >
        );
    }
}

export default PlayCard;