import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    onContactUsPressed = (e) => {
        e.preventDefault()
        console.log(this.props)
        this.props.history.push({
            pathname: `/contact`
        });
    }

    render() {
        return (
            <footer>
                <p className="footer-links">
                    <Link to="/contact" >
                        Contact us
                    </Link>
                    <span> / </span>
                    <a target="_self" href="https://clevertap.com">
                        More Details
                    </a>
                </p>
                <p>
                    <strong>© 2013 onwards. All Rights Reserved. CleverTap is brought to you by WizRocket, Inc.</strong>
                </p>
            </footer>
        );
    }
};

export default withRouter(Footer);
