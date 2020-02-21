import React, { Component } from "react";
import ProiectCard from "./proiectCard";
// import LProiecte from "./proiecte.json"; //This is ok, but the file should be JS


// console.log("proiecte.js: LProiecte = ", LProiecte);
class Proiecte extends Component {
    constructor(props) {
        super(props);

        // this.state = { proiecte: LProiecte };
        this.state = {
            proiecte: [
                {
                    id: 1,
                    titlu: "TITLU PROIECT-1",
                    tehnologie: "WordPress",
                    descriere:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                    id: 2,
                    titlu: "TITLU PROIECT-2",
                    tehnologie: "HTML & CSS",
                    descriere:
                        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
                },
                {
                    id: 3,
                    titlu: "TITLU PROIECT-3",
                    tehnologie: "JavaScript",
                    descriere:
                        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
                },
                {
                    id: 4,
                    titlu: "TITLU PROIECT-4",
                    tehnologie: "MySQL- & APEX",
                    descriere:
                        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae."
                },
                {
                    id: 5,
                    titlu: "TITLU PROIECT-5",
                    tehnologie: "React-JS",
                    descriere:
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
                },
                {
                    id: 6,
                    titlu: "TITLU PROIECT-6",
                    tehnologie: "C-Sharp",
                    descriere:
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
                }
            ]
        };

        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject(ev) {
        
        const idProiect = parseInt(ev.target.id);
        // parseInt can return NaN, parseInt('a'), would be safer to check and return here to avoid unexpected results from filter

        const { proiecte } = this.state;
        
        // If it is a short one liner, we can use the shorthand syntax because its easier to read. It's a matter of preference anyway.
        // e.g. const sirNou = proiecte.filter(item => item.id !== idProiect);
        const sirNou = proiecte.filter(item => {
            return item.id !== idProiect;
        });

        this.setState({
            proiecte: sirNou
        });

        // We should decouple by extracting this in a separate file (e.g. a service)
        localStorage.setItem("proiecte", JSON.stringify(sirNou));
    }

    //Working on LocalStorage
    componentDidMount() {
        if (localStorage.getItem("proiecte")) {
            console.log("local state IF");
            this.setState({
                proiecte: JSON.parse(localStorage.getItem("proiecte"))
            });
        } else {
            console.log("local state ELSE");
            // this.setState({ proiecte: [] });
        }
    }

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
