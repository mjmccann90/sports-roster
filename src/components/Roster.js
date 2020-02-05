import React, { Component } from 'react';
import Navbar from "./nav/Navbar";
import ApplicationViews from "./ApplicationViews"
import './Roster.css';

class Roster extends Component {
    render() {
        return (
            <div>
                <h1></h1>
                <div>
                    <Navbar />
                    <ApplicationViews />
                </div>
            </div>
        );
    }
}

export default Roster