import React, { Component } from "react";

//This can also be a functional component since we do not use state

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
