import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Coach.css'

class CoachCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        <i className="fas fa-user"></i>
                    </picture>

                    <h3><span className="card-coach-name">{this.props.coach.coachName}</span></h3>

                    <p>Title: {this.props.coach.coachTitle}</p>

                    <button type="button" onClick={() => this.props.deleteCoach(this.props.coach.coachId)}>Fire</button>

                    <Link to={`/coaches/${this.props.coach.coachId}`}><button>Details</button></Link>

                    <button type="button"
                        onClick={() => { this.props.history.push(`/coaches/${this.props.coach.coachId}/edit`) }}>Edit</button>
                </div>
            </div >
        );
    }
}

export default CoachCard;