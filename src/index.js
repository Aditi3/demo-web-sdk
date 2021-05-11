import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import QuickView from "./components/QuickView";
import "./scss/style.scss";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

//CLEVERTAP INITIALIZATION
import clevertap from 'clevertap-web-sdk';
import App from "./App";

clevertap.privacy.push({ optOut: false });
clevertap.init('W9R-486-4W5Z');
clevertap.setLogLevel(3);



ReactDOM.render(<HashRouter>
  <App />
</HashRouter>, document.getElementById("root"));
