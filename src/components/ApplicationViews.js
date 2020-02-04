import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './home/Home'
import PlayerCard from './players/PlayerCard'
import PlayerDetail from './players/PlayerDetail'
import PlayerForm from './players/PlayerForm'


class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />


                <Route exact path="/players" render={(props) => {
                    return <PlayerCard {...props} />
                }} />
                <Route exact path="/players" render={(props) => {
                    return <PlayerList {...props} />
                }} />
                <Route exact path="/players/:playerId(\d+)" render={(props) => {
                    return <PlayerDetail playerId={parseInt(props.match.params.playerId)} {...props} />
                }} />
                <Route exact path="/players/new" render={(props) => {
                    return <PlayerForm {...props} />
                }} />


            </React.Fragment>
        )
    }
}

export default ApplicationViews