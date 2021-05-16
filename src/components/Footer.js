import React, { Component } from "react";

const Footer = props => {
    return (
        <footer>
            <p className="footer-links">
                <a href="https://clevertap.com/contact-us" target="_blank">
                    Contact Us
        </a>
                <span> / </span>
                <a href="https://clevertap.com" target="_blank">
                    More Details
        </a>
            </p>
            <p>
                <strong>© 2013 onwards. All Rights Reserved. CleverTap is brought to you by WizRocket, Inc.</strong> 
      </p>
        </footer>
    );
};

export default Footer;
