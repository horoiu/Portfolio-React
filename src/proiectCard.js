import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import "./proiectCard.css";

class ProiectCard extends Component {
    render() {
        // console.log("proiectCard this.props", this.props);

        // We can destructurate the props here to make the JSX cleaner
        // e.g.  const { titlu, tehnologie, descriere, id, deleteProject } = this.props;
        // and the use them without the this.props '<h5>{titlu}</h5>'

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
