import React, { Component } from "react";

// Since we do not use 'state' we can make this component a functional component, which is basically
// just a function that returns JSX. More here : https://reactjs.org/docs/components-and-props.html

class Antet extends Component {
    render() {
        return (
            <div className="text-center jumbotron">
                <h3 className="display-3 font-weight-bold justify">
                    PORTFOLIO - ReactJS App
                </h3>
            </div>
        );
    }
}

export default Antet;
