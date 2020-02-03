import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import PlayerManager from '../../modules/PlayerManager';


class PlayerList extends Component {
    state = {
        players: [],
    }


    componentDidMount() {
        // console.log("player list: Component did mount");
        PlayerManager.getAll()
            .then((players) => {
                this.setState({
                    players: players
                })
            })
    }

    render() {
        // console.log("PlayerList: RENDER");
        return (
            <>
                <div className="container-cards">
                    {this.state.players.map(player =>
                        <PlayerCard key={player.id} player={player} />
                    )}
                </div>
            </>
        )
    }
}

export default PlayerList