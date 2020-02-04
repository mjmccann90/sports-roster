import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import PlayerManager from '../../modules/PlayerManager';


class PlayerList extends Component {
    state = {
        players: [],
    }

    deletePlayer = id => {
        PlayerManager.delete(id)
            .then(() => {
                PlayerManager.getAll()
                    .then((newPlayers) => {
                        this.setState({
                            players: newPlayers
                        })
                    })
            })
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
                <section className="section-content">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("./players/new") }}>
                        Add Player
                    </button>

                </section>

                <div className="container-cards">
                    {this.state.players.map(player =>
                        <PlayerCard
                            key={player.id}
                            player={player}
                            deletePlayer={this.deletePlayer}
                            {...this.props} />
                    )}
                </div>
            </>
        )
    }
}

export default PlayerList