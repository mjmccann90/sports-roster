import React, { Component } from 'react';
import PlayerManager from "../../modules/PlayerManager";
import "./PlayerForm.css"

class PlayerEditForm extends Component {
    state = {
        playerName: "",
        position: "",
        url: "",
        id: "",
        loadingstatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };

    updateExistingPlayer = evt => {
        evt.preventDefault()
        this.setState({ loadingstatus: true });
        const editedPlayer = {
            id: this.props.match.params.playerId,
            name: this.state.playerName,
            position: this.state.position,
            url: this.state.url
        };
        PlayerManager.update(editedPlayer)
            .then(() => this.props.history.push("/players"))
    }
    componentDidMount() {
        PlayerManager.get(this.props.match.params.playerId)
            .then(player => {
                this.setState({
                    playerName: player.name,
                    position: player.position,
                    url: player.url,
                    loadingstatus: false,
                });
            });
    }
    render() {
        return (
            <>
                <form onSubmit={this.updateExistingPlayer}>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="playerName"
                                value={this.state.playerName}
                            />
                            <label htmlFor="playerName">Player Name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="position"
                                value={this.state.position}
                            />
                            <label htmlFor="position">Player Position</label>
                        </div>

                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingstatus}
                                onClick={this.updateExistingPlayer}
                                className="btn btn-primary">Submit</button>

                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default PlayerEditForm