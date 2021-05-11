import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.css'
import { withRouter } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: ""
        }
    }

    profilePushPressed = (e) => {
        e.preventDefault()

        clevertap.profile.push({
            "Site": {
                "Name": "Carl Johnson",                  
                "Identity": 420,                    
                "Email": this.state.email,           
                "Phone": "+919999999999",             
                "Gender": "M",                        
                "DOB": new Date("1988-08-24"), 
                "Photo": 'https://img1.svg.com/img/gallery/what-the-critics-are-saying-about-yakuza-like-a-dragon/intro-1602524858.jpg',    // URL to the Image
            }
        })

        this.props.showToast("CleverTap Profile Push Event Recorded!")
        
        this.props.history.push({
            pathname: `/home`
        });
    }

    onUserLoginPressed = () => {
        clevertap.onUserLogin.push({
            "Site": {
                "Name": "Niko Bellic",                  
                "Identity": 420,                    
                "Email": this.state.email,           
                "Phone": "+919999999999",             
                "Gender": "M",                        
                "DOB": new Date("1988-08-24"), 
                "Photo": 'https://img1.svg.com/img/gallery/what-the-critics-are-saying-about-yakuza-like-a-dragon/intro-1602524858.jpg',    // URL to the Image
            }
        })
        this.props.showToast("CleverTap OnUserLogin Event Recorded!")

        this.props.history.push({
            pathname: `/home`
        });
    }

    emailChanged = (event) => {
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.submitPressed}>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>this.emailChanged(event)}/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                        <button onClick={this.profilePushPressed} className="btn btn-primary btn-block">Profile Push</button>
                        <button onClick={this.onUserLoginPressed} className="btn btn-primary btn-block">On User Login</button>
                        {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
                    </form>
                </div></div>
        );
    }
}

export default withRouter(Login)