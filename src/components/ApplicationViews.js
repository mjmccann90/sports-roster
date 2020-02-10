import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './home/Home'
import Login from './auth/Login'
// Player imports
import PlayerDetail from './players/PlayerDetail'
import PlayerForm from './players/PlayerForm'
import PlayerList from './players/PlayerList'
import PlayerEditForm from './players/PlayerEditForm';
// Coach imports
import CoachDetail from './coaches/CoachDetail'
import CoachForm from './coaches/CoachForm'
import CoachList from './coaches/CoachList'
import CoachEditForm from './coaches/CoachEditForm';


class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") != null

    render() {
        return (
            <React.Fragment>

                <Route path="/login" render={props => {
                    return <Login setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                {/* Players */}
                <Route exact path="/players" render={props => {
                    if (this.props.user) {
                        return <PlayerList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/players/:playerId(\d+)" render={(props) => {
                    return <PlayerDetail playerId={parseInt(props.match.params.playerId)} {...props} />
                }} />
                <Route path="/players/new" render={(props) => {
                    return <PlayerForm {...props} />
                }} />
                <Route path="/players/:playerId(\d+)/edit" render={props => {
                    return <PlayerEditForm {...props} />
                }} />


                {/* coaches */}
                <Route exact path="/coaches" render={props => {
                    if (this.props.user) {
                        return <CoachList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/coaches/:coachId(\d+)" render={(props) => {
                    return <CoachDetail coachId={parseInt(props.match.params.coachId)} {...props} />
                }} />
                <Route path="/coaches/new" render={(props) => {
                    return <CoachForm {...props} />
                }} />
                <Route path="/coaches/:coachId(\d+)/edit" render={props => {
                    return <CoachEditForm {...props} />
                }} />


            </React.Fragment>
        )
    }
}

export default ApplicationViews