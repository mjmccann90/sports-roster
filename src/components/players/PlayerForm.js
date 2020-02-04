import React, { Component } from 'react';
import PlayerManager from '../../modules/PlayerManager';
import './PlayerForm.css'

class PlayerForm extends Component {
    state = {
        playerName: "",
        position: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewPlayer = evt => {
        evt.preventDefault();
        if (this.state.playerName === "" || this.state.position === "") {
            window.alert("Please put in a player name and position")
        } else {
            this.setState({ loadingStatus: true });
            const player = {
                name: this.state.playerName,
                position: this.state.position
            };
            PlayerManager.post(player)
                .then(() => this.props.history.push("/players"));
        }
    };
    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="playerName"
                                placeholder="Player Name" />
                            <label htmlFor="playerName">Name</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="position"
                                placeholder="Position"
                            />
                            <label htmlFor="position">Position</label>
                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewPlayer}
                            >Submit</button>

                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default PlayerForm