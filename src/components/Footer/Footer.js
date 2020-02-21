import React from "react";
import "./footer.css";

const year = new Date().getFullYear();
function Footer() {
    return (
        <div className="text-center footer">
            <h5>©{year} DevSpace.ro. All rights reserved.</h5>
        </div>
    );
}

export default Footer;
