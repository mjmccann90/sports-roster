import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

    handleLogout = () => {
        this.props.clearUser();
        this.props.history.push('/');
    }

    render() {

        return (
            <header>
                <h1 className="site-title">Titans' 2019 Roster<br />
                    <small></small>
                </h1>
                <nav>
                    <ul className="container">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        {(this.props.user) ?
                            <li><Link className="nav-link" to="/players">Players</Link></li>
                            : null}
                        {(this.props.user) ?
                            <>
                                <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
                            </>
                            : <li><Link className="nav-link" to="/login"></Link></li>
                            /* <li><Link className="nav-link" to="/Coaches">Coaches</Link></li> */
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(NavBar);