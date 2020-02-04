import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './home/Home'
import PlayerCard from './players/PlayerCard'
import PlayerDetail from './players/PlayerDetail'
import PlayerForm from './players/PlayerForm'
import Login from './auth/Login'


class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") != null

    render() {
        return (
            <React.Fragment>

                <Route path="/login" Component={Login} />

                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />


                <Route exact path="/players" render={(props) => {
                    return <PlayerCard {...props} />
                }} />

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


            </React.Fragment>
        )
    }
}

export default ApplicationViews