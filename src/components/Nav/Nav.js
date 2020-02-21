import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
    render() {
        return (
            <div>
                <h5 className="styleH5">Menu</h5>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            className="nav-link"
                            activeClassName="active"
                        >
                            Projects:
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/addProject"
                            className="nav-link"
                            activeClassName="active"
                        >
                            Add project
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/about"
                            className="nav-link"
                            activeClassName="active"
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            className="nav-link"
                            activeClassName="active"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;
