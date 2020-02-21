import React, { Component } from "react";

// This can also be a functional component since we do not use state

class NotFound extends Component {
    render() {
        return (
            <>
                <h3 className="mt-5">Pagină inexistentă</h3>
                <p>
                    <em>Pagina inexistentă</em>.
                </p>
            </>
        );
    }
}

export default NotFound;
