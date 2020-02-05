import React, { Component } from 'react';
import PlayerManager from '../../modules/PlayerManager';
import './PlayerDetail.css';

class PlayerDetail extends Component {
    state = {
        name: "",
        position: "",
        imgUrl: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true })
        PlayerManager.delete(this.props.playerId)
            .then(() => this.props.history.push("/players"))
    }

    componentDidMount() {
        PlayerManager.get(this.props.playerId)
            .then((player) => {
                this.setState({
                    name: player.name,
                    position: player.position,
                    imgUrl: player.url,
                    loadingStatus: false,
                });
            });
    }
    render() {
        if (this.state.loadingStatus) return <p>Loading...</p>
        return (
            <div className="content">
                <div className="card-content">
                    <picture>
                        {/* <img src={require('./Images/${this.state.imgUrl}')} /> */}
                        <i className="fas fa-user"></i>
                    </picture>
                    <h3><span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
                    <p>Position:{this.state.position}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>

                </div>
            </div>
        );
    }
}

export default PlayerDetail