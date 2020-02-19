import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import "./proiectCard.css";

class ProiectCard extends Component {
    render() {
        // console.log("proiectCard this.props", this.props);
        return (
            <>
                <div className="proiectCard d-inline-block btn">
                    <h5>{this.props.titlu}</h5>
                    <p>{this.props.tehnologie}</p>
                    <p>{this.props.descriere}</p>
                    <MDBBtn
                        color="indigo"
                        className="float-right"
                        id={this.props.id}
                        onClick={this.props.deleteProject}
                    >
                        Delete
                    </MDBBtn>
                </div>
            </>
        );
    }
}

export default ProiectCard;
