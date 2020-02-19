import React, { Component } from "react";
import Antet from "./antet";
import Nav from "./Nav";
import Proiecte from "./proiecte";
import Adaugare from "./adaugare";
import Despre from "./despre";
import Contact from "./contact";
import Notfound from "./notFound";
import Footer from "./footer";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
    render() {
        const stil = {
            backgroundColor: "#ddd",
            height: "60vh"
        };
        // console.log("App this.state:", this.state);
        return (
            <div className="container">
                <Antet />
                <div className="row mr-0 ml-0">
                    <div className="col" style={stil}>
                        <Nav />
                    </div>
                    <div className="col-9">
                        <Switch>
                            <Route exact path="/" component={Proiecte} />
                            <Route path="/adaugare" component={Adaugare} />
                            <Route path="/despre" component={Despre} />
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
