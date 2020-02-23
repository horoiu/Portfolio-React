import React, { Component } from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import {
    setLocalStorage,
    readLocalStorage
} from "../../services/localStorage.js";

const initialState = {
    id: 0,
    title: "",
    tehnology: "",
    description: ""
};
class AddProject extends Component {
    constructor(props) {
        super(props);

        //Since this initialState is used as default and never changed, it could be extracted outside the class in a const.
        this.initialState = initialState;

        //  Initialize "state" object
        this.state = this.initialState;

        //  Functii de tratare a evenimentelor "change" si "submit"
        this.handleChange = this.handleChange.bind(this);
        this.addProject = this.addProject.bind(this);
    }

    handleChange(ev) {
        const { name, value } = ev.target;

        this.setState({
            [name]: value
        });
    }

    addProject(item) {
        console.log("Clicked Save Project button");

        const projects = readLocalStorage();
        console.log("addProject: projects:", projects);

        // const projects = this.state;
        console.log("this.state:", this.state);
        let actualList = projects;
        actualList.push({
            id: actualList.length
                ? actualList[actualList.length - 1].id + 1
                : 1,
            title: item.title,
            technology: item.technology,
            description: item.description
        });
        console.log("actualList", actualList);
        // this.setState({ projectsList: actualList });

        // localStorage
        // setLocalStorage("projectsList", actualList);

        //     this.addProject(this.state);
        //     this.setState(this.initialState); // Empty the form
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Add a new Project</h2>
                <form className="mx-3 grey-text">
                    <MDBInput
                        name="title"
                        label="Title"
                        icon="edit"
                        hint="Project Name"
                        group
                        type="text"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <MDBInput
                        name="technology"
                        label="Technology"
                        icon="keyboard"
                        hint="Programming Language or Framework"
                        group
                        type="text"
                        value={this.state.technology}
                        onChange={this.handleChange}
                    />
                    <MDBInput
                        name="description"
                        label="Description"
                        icon="sticky-note"
                        hint="Say something"
                        group
                        type="textarea"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <div className="text-center">
                        <MDBBtn color="indigo" onClick={this.addProject}>
                            Save Project
                        </MDBBtn>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProject;
