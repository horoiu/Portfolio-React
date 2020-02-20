import React, { Component } from "react";
import { MDBBtn, MDBInput } from "mdbreact";

class AddProject extends Component {
    constructor(props) {
        super(props);

        //Since this initialState is used as default and never changed, it could be extracted outside the class in a const.
        this.initialState = {
            id: 0,
            titlu: "",
            tehnologie: "",
            descriere: ""
        };

        //  Initializez obiectul "state"
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

        const proiecte = this.state;
        var sirAct = proiecte;
        sirAct.push({
            id: sirAct.length ? sirAct[sirAct.length - 1].id + 1 : 1,
            titlu: item.titlu,
            technologie: item.technologie,
            descriere: item.descriere
        });
        console.log("sirAct", sirAct);
        this.setState({ proiecte: sirAct });

        this.addProject(this.state);
        this.setState(this.initialState); // Golesc formularul
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Add a new Project</h2>
                <form className="mx-3 grey-text">
                    <MDBInput
                        name="titlu"
                        label="Title"
                        icon="edit"
                        hint="Project Name"
                        group
                        type="text"
                        value={this.state.titlu}
                        onChange={this.handleChange}
                    />
                    <MDBInput
                        name="loc"
                        label="Technology"
                        icon="map"
                        hint="Programming Language or Framework"
                        group
                        type="text"
                        value={this.state.loc}
                        onChange={this.handleChange}
                    />
                    <MDBInput
                        name="descriere"
                        label="Description"
                        icon="sticky-note"
                        hint="Say something"
                        group
                        type="textarea"
                        value={this.state.descriere}
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
