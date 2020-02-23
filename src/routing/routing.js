import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import AddProject from "../pages/AddProject/addProject";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact";
import notFound from "../pages/NotFound/notFound";

class Routing extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Projects} />
                    <Route path="/addProject" component={AddProject} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route component={notFound} />
                </Switch>
            </div>
        );
    }
}

export default Routing;
