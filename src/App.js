import React, { Component } from "react";
import Home from "./home";
import Proiecte from "./proiecte";
import Tehnologii from "./tehnologii";
import Despre from "./despre";
import Notfound from "./notFound";
import { Route, Switch, NavLink } from "react-router-dom";
// import "./nav.css";

class App extends Component {
    render() {
        const stil_hr = {
            borderTop: "1px solid grey"
        };

        const stil = {
            backgroundColor: "#dddddd",
            height: "100vh"
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-3" style={stil}>
                        <h2 className="mt-5 mb-3">Menu</h2>
                        <nav className="list-group">
                            <li className="list-group-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink
                                    to="/Proiecte"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Proiecte
                                </NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink
                                    to="/tehnologii"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Tehnologii
                                </NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink
                                    to="/despre"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                >
                                    Despre
                                </NavLink>
                            </li>
                        </nav>
                    </div>
                    <div className="col-9">
                        <h2 className="mt-5">Marian Horoiu - Portfolio</h2>
                        <hr style={stil_hr} />
                        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/Proiecte" component={Proiecte} />
                            <Route path="/tehnologii" component={Tehnologii} />
                            <Route path="/despre" component={Despre} />
                            <Route component={Notfound} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
