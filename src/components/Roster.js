import React, { Component } from 'react';
import PlayerCard from './players/PlayerCard'
import './Roster.css';

class Roster extends Component {
    render() {
        return (
            <div>
                <h1>Titans' 2019 Roster</h1>
                <div>
                    <PlayerCard />
                </div>
            </div>
        );
    }
}

export default Roster