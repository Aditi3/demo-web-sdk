import Axios from 'axios';
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from "./components/Login";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './components/Contact';

class App extends Component {
componentDidMount() {
    clevertap.notifications.push({
        "apnsWebPushId":"<apple web push id>", //only for safari browser
        "apnsWebPushServiceUrl":"<safari package service url>",//only for safari browser
        "titleText":'Would you like to receive Push Notifications?',
        "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
        "okButtonText":'Sign me up!',
        "rejectButtonText":'No thanks',
        "okButtonColor":'#f28046',
        "serviceWorkerPath": "./firebase-messaging-sw.js"});
        
}


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
                        <Route exact path='/contact' render={(props) => (
                            <Contact {...props} showToast={this.showToast} />
                        )} />
                    </Switch>
                    <ToastContainer />
                </div>
            </Router>
        );
    }
}

export default App;