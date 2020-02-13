import React, { Component } from 'react';
import CoachCard from './CoachCard';
import CoachManager from '../../modules/CoachManager';


class CoachList extends Component {
    state = {
        coaches: [],
    }

    deleteCoach = id => {
        CoachManager.delete(id)
            .then(() => {
                CoachManager.getAll()
                    .then((newCoaches) => {
                        this.setState({
                            coaches: newCoaches
                        })
                    })
            })
    }


    componentDidMount() {
        CoachManager.getAll()
            .then((coaches) => {
                this.setState({
                    coaches: coaches
                })
            })
    }

    render() {
        return (
            <>
                <section className="section-content">
                    <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => { this.props.history.push("/coaches/new") }}>
                        Add Coach
                    </button>

                </section>

                <div className="container-cards">
                    {this.state.coaches.map(coach =>
                        <CoachCard
                            key={coach.id}
                            coach={coach}
                            deleteCoach={this.deleteCoach}
                            {...this.props} />
                    )}
                </div>
            </>
        )
    }
}

export default CoachList