import React, { Component } from "react";

class Nav extends Component {
    render() {
        const stil = { fontWeight: "bold", color: "red" };
        const stilH3 = { fontSize: "20px", marginTop: "30px" };
        return (
            <div>
                <h3 style={stilH3}>Meniul aplicației</h3>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            className="nav-link"
                            activeStyle={stil}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/noutati"
                            className="nav-link"
                            activeStyle={stil}
                        >
                            Noutăți
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
                    <li className="nav-item">
                        <NavLink
                            to="/despre"
                            className="nav-link"
                            activeStyle={stil}
                        >
                            Despre
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
    n;
}

export default Nav;
