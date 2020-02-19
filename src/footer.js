import React, { Component } from "react";

class Footer extends Component {
    render() {
        const year = new Date().getFullYear();

        return (
            <div className="text-center">
                <h5>©{year} DevSpace.ro. All rights reserved.</h5>
            </div>
        );
    }
}

export default Footer;
