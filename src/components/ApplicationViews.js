import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './home/Home'
import PlayerCard from './players/PlayerCard'


class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/players" render={(props) => {
                    return <PlayerCard />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews