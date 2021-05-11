import Axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

    showToast = (message) => {
        toast(message)
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' render={(props) => (
                            <Login {...props} showToast={this.showToast} />
                        )} />
                        <Route exact path='/home' render={(props) => (
                            <Home {...props} showToast={this.showToast} />
                        )} />
                    </Switch>
                    <ToastContainer />
                </div>
            </Router>
        );
    }
}

export default App;