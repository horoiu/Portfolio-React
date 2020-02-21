import React from "react";

// This can also be a functional component since we do not use state

function NotFound() {
    return (
        <div>
            <h3 className="mt-5 text-center">Page Not Found</h3>
            <p>
                <em>Page not found.</em>.
            </p>
        </div>
    );
}

export default NotFound;
