import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            mobile: ""
        }
    }

    onSubmitPressed = (e) => {
        e.preventDefault()

        const eventProps = {
            "ContactEmail": this.state.email,
            "ContactMobile": this.state.mobile
        }
        clevertap.event.push("Contact Details Pushed", eventProps);

        this.props.showToast("CleverTap Contact Details Pushed Event Recorded!")

        this.props.history.goBack()
    }

    emailChanged = (event) => {
        this.setState({ email: event.target.value })
    }

    mobileChanged = (event) => {
        this.setState({ mobile: event.target.value })
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.submitPressed}>
                        <h3>Contact us</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => this.emailChanged(event)} />
                        </div>

                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input type="number" className="form-control" placeholder="Enter Mobile Number" onChange={(event) => this.mobileChanged(event)} />
                        </div>
                        
                        <button onClick={this.onSubmitPressed} className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div></div>
        );
    }
}

export default withRouter(Contact)