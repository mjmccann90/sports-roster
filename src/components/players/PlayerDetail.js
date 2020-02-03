import React, { Component } from 'react';
import PlayerManager from '../../modules/PlayerManager';
import './PlayerDetail.css';

class PlayerDetail extends Component {
    state = {
        name: "",
        position: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true })
        PlayerManager.delete(this.props.playerId)
            .then(() => this.props.history.push("/players"))
    }

    componentDidMount() {
        console.log("PlayerDetail: ComponentDidMount");
        PlayerManager.get(this.props.playerId)
            .then((player) => {
                this.setState({
                    name: player.name,
                    position: player.position,
                    loadingStatus: false,
                });
            });
    }
    render() {
        return (
            <div className="content">
                <div className="card-content">
                    <picture>
                        <img src={require('placeholder')} alt="placeholder" />
                    </picture>
                    <h3>Name:<span style={{ color: 'darkslategrey' }}>{this.stste.name}</span></h3>
                    <p>Position:{this.state.position}</p>
                </div>
            </div>
        );
    }
}

export default PlayerDetail