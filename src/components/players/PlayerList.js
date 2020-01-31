import React, { Component } from 'react'
import PlayerCard from './PlayerCard'
import PlayerManager from '../../modules/PlayerManager'


class PlayerList extends Component {
    state = {
        players: [],
    }
}

ComponentDidMount() {
    console.log("player list: Component did mount");
    PlayerManager.getAll()
        .then((players) => {
            this.setState({
                players: players
            })
        })
}

render(){
    return (
        <div className="container-cards">
            {this.state.players.map(player => <PlayerCard />)}
        </div>
    )
}

export default PlayerList