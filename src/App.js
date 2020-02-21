import React, { Component } from "react";
import Antet from "./Antet.js";
import Nav from "./Nav";
import Projects from "./Projects";
import AddProject from "./addProject";
import About from "./about.jsx";
import Contact from "./contact";
import Notfound from "./notFound";
import Footer from "./footer";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
    render() {
        // We can move the style outside the class (even in another file if necessary), since has no computed parts and it's
        // all hardcoded, this way we prevent the re-declaration in on every render

        // console.log("App this.state:", this.state);
        return (
            <div className="container">
                <Antet />
                <div className="row mr-0 ml-0">
                    <div className="col style">
                        <Nav />
                    </div>
                    <div className="col-9">
                        <Switch>
                            <Route exact path="/" component={Projects} />
                            <Route path="/addProject" component={AddProject} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route component={Notfound} />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
