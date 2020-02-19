import React, { Component } from "react";
import { MDBBtn, MDBInput } from "mdbreact";

class Formular extends Component {
    constructor(props) {
        super(props);
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
        this.adaugaProiect = this.adaugaProiect.bind(this);
    }

    handleChange(ev) {
        const { name, value } = ev.target;

        this.setState({
            [name]: value
        });
    }

    adaugaProiect() {
        this.props.adaugProiect(this.state);
        this.setState(this.initialState); // Golesc formularul
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Enter new Project</h2>
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
                        <MDBBtn
                            color="indigo"
                            onClick={this.props.adaugProiect}
                        >
                            Save Project
                        </MDBBtn>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formular;

// import React, { Component } from "react";
// class Adaugare extends Component {
//     render() {
//         return (
//             <>
//                 <h3 className="mt-5">Adaugare</h3>
//                 <p>
//                     Pagina de <em>Adaugare</em> proiecte.
//                 </p>
//             </>
//         );
//     }
// }

// export default Adaugare;
