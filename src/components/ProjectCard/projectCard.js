import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import "./projectCard.css";

class ProjectCard extends Component {
    render() {
        // console.log("projectCard this.props", this.props);
        return (
            <>
                <div className="projectCard d-inline-block btn">
                    <h5>{this.props.title}</h5>
                    <p>{this.props.tehnology}</p>
                    <p>{this.props.description}</p>
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

export default ProjectCard;
