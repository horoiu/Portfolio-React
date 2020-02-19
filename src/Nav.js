import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        const stil = { fontWeight: "bold", color: "red" };
        const stilH5 = { fontWeight: "bold", marginTop: "30px" };

        return (
            <div>
                <h5 style={stilH5}>Menu</h5>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            className="nav-link"
                            activeStyle={stil}
                        >
                            Proiecte:
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/adaugare"
                            className="nav-link"
                            activeStyle={stil}
                        >
                            Adaugare
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/despre"
                            className="nav-link"
                            activeStyle={stil}
                        >
                            Despre
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            className="nav-link"
                            activeStyle={stil}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
    n;
}

export default Nav;
