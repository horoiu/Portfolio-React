import React from "react";
import { Link } from "react-router-dom";

function error(msg) {
    // console.log("error(): ", msg);
    return (
        <div className="text-center">
            <h2 className="mt-5">ERROR Page</h2>
            <br></br>
            <h4>There is an error: "{msg}" !</h4>
            <p>
                Would you like to return to<Link to="/"> Project's</Link> page
                instead?
            </p>
        </div>
    );
}

export default error;
