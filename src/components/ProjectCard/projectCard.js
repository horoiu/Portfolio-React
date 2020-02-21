import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import "./projectCard.css";

class ProjectCard extends Component {
    render() {
        // console.log("projectCard this.props", this.props);

        // We can destructurate the props here to make the JSX cleaner
        // e.g.  const { titlu, tehnologie, descriere, id, deleteProject } = this.props;
        // and the use them without the this.props '<h5>{titlu}</h5>'
        const {
            title,
            technology,
            description,
            id,
            deleteProject
        } = this.props;

        return (
            <div className="projectCard d-inline-block btn">
                <h5>{title}</h5>
                <p>{technology}</p>
                <p>{description}</p>
                <MDBBtn
                    color="indigo"
                    className="float-right"
                    id={id}
                    onClick={deleteProject}
                >
                    Delete
                </MDBBtn>
            </div>
        );
    }
}

export default ProjectCard;
