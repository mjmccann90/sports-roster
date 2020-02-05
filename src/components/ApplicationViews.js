import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './home/Home'
import PlayerDetail from './players/PlayerDetail'
import PlayerForm from './players/PlayerForm'
import Login from './auth/Login'
import PlayerList from './players/PlayerList'
import PlayerEditForm from './players/PlayerEditForm';


class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") != null

    render() {
        return (
            <React.Fragment>

                <Route path="/login" Component={Login} />

                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />


                {/* <Route exact path="/players" render={props => {
                    if (this.props.user) {
                        return <PlayerList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} /> */}

                <Route exact path="/players" render={(props) => {
                    return <PlayerList {...props} />
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


            </React.Fragment>
        )
    }
}

export default ApplicationViews