import React, { Component } from "react";
import Header from "../Header/Header.jsx";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./App.css";
import Routing from "../../routing/routing.js";

class App extends Component {
    render() {
        // console.log("App this.state:", this.state);

        return (
            <div className="container">
                <Header />
                <div className="row mr-0 ml-0">
                    <div className="col style">
                        <Nav />
                    </div>
                    <div className="col-9">
                        <Routing />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
