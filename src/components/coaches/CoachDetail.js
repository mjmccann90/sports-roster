import React, { Component } from 'react';
import CoachManager from '../../modules/CoachManager';
import './CoachDetail.css';

class CoachDetail extends Component {
    state = {
        CoachName: "",
        coachTitle: "",
        //imgUrl: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        this.setState({ loadingStatus: true })
        CoachManager.delete(this.props.coachId)
            .then(() => this.props.history.push("/coaches"))
    }

    componentDidMount() {
        CoachManager.get(this.props.coachId)
            .then((coach) => {
                this.setState({
                    name: coach.coachName,
                    title: coach.coachTitle,
                    //imgUrl: player.url,
                    loadingStatus: false,
                });
            });
    }
    render() {
        if (this.state.loadingStatus) return <p>Loading...</p>
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        {/* <img src={require('./Images/${this.state.imgUrl}')} /> */}
                        <i className="fas fa-user"></i>
                    </picture>
                    <h3><span style={{ color: 'darkslategrey' }}>{this.state.coachName}</span></h3>
                    <p>Title:{this.state.coachTitle}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Release</button>

                </div>
            </div>
        );
    }
}

export default CoachDetail