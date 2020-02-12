import React, { Component } from 'react';
import CoachManager from "../../modules/CoachManager";
import "./CoachForm.css"

class CoachEditForm extends Component {
    state = {
        coachName: "",
        coachTitle: "",
        //url: "",
        id: "",
        loadingstatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };

    updateExistingCoach = evt => {
        evt.preventDefault()
        this.setState({ loadingstatus: true });
        const editedCoach = {
            id: this.props.match.params.id,
            coachName: this.state.coachName,
            coachTitle: this.state.coachTitle,
            //url: this.state.url
        };
        CoachManager.update(editedCoach)
            .then(() => this.props.history.push("/coaches"))
    }
    componentDidMount() {
        CoachManager.get(this.props.match.params.id)
            .then(coach => {
                this.setState({
                    coachName: coach.coachName,
                    coachTitle: coach.coachTitle,
                    //url: player.url,
                    loadingstatus: false,
                });
            });
    }
    render() {
        return (
            <>
                <form onSubmit={this.updateExistingCoach}>
                    <fieldset>
                        <div className="formgrid">
                            <input type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="coachName"
                                value={this.state.coachName}
                            />
                            <label htmlFor="coachName">Coach Name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="title"
                                value={this.state.coachTitle}
                            />
                            <label htmlFor="title">Coaching Title</label>
                        </div>

                        <div className="alignRight">
                            <button type="button" disabled={this.state.loadingstatus}
                                onClick={this.updateExistingCoach}
                                className="btn btn-primary">Submit</button>

                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default CoachEditForm