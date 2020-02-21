import React from "react";
import "./footer.css";

const year = new Date().getFullYear();
function Footer() {
    return (
        <div className="text-center">
            <h5 className="footer">
                ©{year} DevSpace.ro. All rights reserved.
            </h5>
        </div>
    );
}

export default Footer;
