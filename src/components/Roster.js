import React, { Component } from 'react';
import Navbar from "./nav/Navbar";
import ApplicationViews from "./ApplicationViews"
import './Roster.css';

class Roster extends Component {
    state = {
        user: false
    }
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    setUser = (authObj) => {
        localStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
        )
        this.setState({
            user: this.isAuthenticated()
        });
    }

    clearUser = () => {
        localStorage.clear()

        this.setState({
            user: this.isAuthenticated()
        });
    }
    componentDidMount() {
        this.setState({
            user: this.isAuthenticated()
        })
    }



    render() {
        return (
            <div>
                <h1></h1>
                <div>
                    <Navbar user={this.state.user} clearUser={this.clearUser} />
                    <ApplicationViews user={this.state.user}
                        setUser={this.setUser} />
                </div>
            </div>
        );
    }
}

export default Roster