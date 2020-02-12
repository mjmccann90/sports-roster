import React, { Component } from 'react';
import CoachManager from '../../modules/CoachManager';
import './CoachForm.css'

class CoachForm extends Component {
    state = {
        coachName: "",
        coachTitle: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewCoach = evt => {
        evt.preventDefault();
        if (this.state.coachName === "" || this.state.coachTitle === "") {
            window.alert("Please put in a coach name and their title")
        } else {
            this.setState({ loadingStatus: true });
            const coach = {
                coachName: this.state.coachName,
                coachTitle: this.state.coachTitle
            };
            CoachManager.post(coach)
                .then(() => this.props.history.push("/coaches"));
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
                                id="coachName"
                                placeholder="Coach Name" />
                            <label htmlFor="coachName">Name</label>

                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="coachTitle"
                                placeholder="Coach Title"
                            />
                            <label htmlFor="coachTitle">Coach Title</label>
                        </div>

                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewCoach}
                            >Submit</button>

                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default CoachForm