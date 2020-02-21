import React, { Component } from "react";
import Header from "../Header/Header.jsx";
import Nav from "../Nav/Nav";
import Projects from "../Projects/Projects";
import AddProject from "../../addProject";
import About from "../About/About.jsx";
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
    render() {
        // We can move the style outside the class (even in another file if necessary), since has no computed parts and it's
        // all hardcoded, this way we prevent the re-declaration in on every render

        // console.log("App this.state:", this.state);
        return (
            <div className="container">
                <Header />
                <div className="row mr-0 ml-0">
                    <div className="col style">
                        <Nav />
                    </div>
                    <div className="col-9">
                        <Switch>
                            <Route exact path="/" component={Projects} />
                            <Route path="/addProject" component={AddProject} />
                            <Route path="/About" component={About} />
                            <Route path="/Contact" component={Contact} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;