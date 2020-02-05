import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Roster from './components/Roster';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
    <Router>
        <Roster />
    </Router>
    , document.getElementById('root'));
