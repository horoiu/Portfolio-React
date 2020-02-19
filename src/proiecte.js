import React, { Component } from "react";
import ProiectCard from "./proiectCard";
import LProiecte from "./proiecte.json";

// console.log("proiecte.js: LProiecte = ", LProiecte);
class Proiecte extends Component {
    constructor(props) {
        super(props);
        this.state = { proiecte: LProiecte };

        this.deleteProject = this.deleteProject.bind(this);
        this.addProject = this.addProject.bind(this);
    }
    deleteProject(ev) {
        const idProiect = parseInt(ev.target.id);
        const { proiecte } = this.state;
        const sirNou = proiecte.filter(item => {
            return item.id !== idProiect;
        });

        this.setState({
            proiecte: sirNou
        });
        localStorage.setItem("proiecte", JSON.stringify(sirNou));
    }

    addProject(act) {
        console.log("addProject from proiecte.js ");
        const { proiecte } = this.state;
        var sirAct = proiecte;
        sirAct.push({
            id: sirAct.length ? sirAct[sirAct.length - 1].id + 1 : 1,
            titlu: act.titlu,
            technologie: act.technologie,
            descriere: act.descriere
        });
        console.log("sirAct", sirAct);
        this.setState({ proiecte: sirAct });
    }

    // componentDidMount() {
    //     if (localStorage.getItem("proiecte")) {
    //         console.log("local state IF");
    //         this.setState({
    //             proiecte: JSON.parse(localStorage.getItem("proiecte"))
    //         });
    //     } else {
    //         console.log("local state ELSE");
    //         // this.setState({ proiecte: [] });
    //     }
    // }

    render() {
        // console.log("proiecte.js this.state:", this.state);
        let lista = this.state.proiecte.map(item => (
            <ProiectCard
                key={item.id}
                id={item.id}
                titlu={item.titlu}
                tehnologie={item.tehnologie}
                descriere={item.descriere}
                deleteProject={this.deleteProject}
            />
        ));

        // console.log("proiecte.js lista:", lista);
        return (
            <>
                <h3 className="mt-2 text-center font-weight-bold">
                    Project's list
                </h3>
                <div className="container">{lista}</div>
            </>
        );
    }
}

export default Proiecte;
