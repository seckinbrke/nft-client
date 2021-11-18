import React, {
    Component
} from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from "react-page-loading";

//Package CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//Template SCSS & CSS Style
import "./assets/css/style.scss";
import "./assets/css/responsive.scss";

//Component Import
import HomeTwo from "./pages/HomeTwo";

class App extends Component {
    render() {
        return ( 
            <Router>

     
        <div className = "App" >
            <div>
            <Page 
            loader = {"bubble-spin"}
            color = {"#71c21b"}
            size = {9}>

        <Switch>
            <Route path = "/"
            component = {HomeTwo}
            /> 
        </Switch>
             </Page> 
             </div> 
             </div>
             </Router>
        );
    }
}
export default App;