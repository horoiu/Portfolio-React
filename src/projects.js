import React, { Component } from "react";
import ProjectCard from "./projectCard";
import projectsList from "./projectsList.js"; //This is ok, but the file should be JS

// console.log("projects.js: ProjectsList = ", ProjectsList);
class Projects extends Component {
    constructor(props) {
        super(props);
        console.log("Projects.js: constructor()");

        this.state = { projectsList: projectsList };
        // this.state = {
        //     projectsList: [
        //         {
        //             id: 1,
        //             title: "TITLU PROIECT-1",
        //             tehnology: "WordPress",
        //             description:
        //                 "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
        //         },
        //         {
        //             id: 2,
        //             title: "TITLU PROIECT-2",
        //             tehnology: "HTML & CSS",
        //             description:
        //                 "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
        //         },
        //         {
        //             id: 3,
        //             title: "TITLU PROIECT-3",
        //             tehnology: "JavaScript",
        //             description:
        //                 "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
        //         },
        //         {
        //             id: 4,
        //             title: "TITLU PROIECT-4",
        //             tehnology: "MySQL- & APEX",
        //             description:
        //                 "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae."
        //         },
        //         {
        //             id: 5,
        //             title: "TITLU PROIECT-5",
        //             tehnology: "React-JS",
        //             description:
        //                 "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
        //         },
        //         {
        //             id: 6,
        //             title: "TITLU PROIECT-6",
        //             tehnology: "C-Sharp",
        //             description:
        //                 "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        //         }
        //     ]
        // };

        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject(ev) {
        const idProject = parseInt(ev.target.id);
        // parseInt can return NaN, parseInt('a'), would be safer to check and return here to avoid unexpected results from filter

        const { projectsList } = this.state;

        // If it is a short one liner, we can use the shorthand syntax because its easier to read. It's a matter of preference anyway.
        // e.g. const sirNou = proiecte.filter(item => item.id !== idProiect);
        const newList = projectsList.filter(item => item.id !== idProject);

        this.setState({ projectsList: newList });

        // We should decouple by extracting this in a separate file (e.g. a service)
        localStorage.setItem("projectsList", JSON.stringify(newList));
    }

    //Working on LocalStorage
    componentDidMount() {
        console.log("Projects.js: ComponentDidMount()");

        // const projectsList = JSON.parse(localStorage.getItem("projectsList"));
        // localStorage.setItem("projectsList", JSON.stringify(newList));
        // if (localStorage.getItem("projectsList") !== []) {
        //     console.log("local state IF", projectsList);
        //     this.setState({
        //         projectsList: JSON.parse(localStorage.getItem("projectsList"))
        //     });
        // } else {
        //     console.log("local state ELSE", projectsList);
        //     this.setState({ projectsList: ProjectsList });
        //     // this.setState({ projectsList: [] });
        //     localStorage.setItem(
        //         "projectsList",
        //         JSON.stringify(this.state.projectsList)
        //     );
        // }
    }

    render() {
        console.log("Projects.js: render()");
        // console.log("projects.js this.state:", this.state);

        let list = this.state.projectsList.map(item => (
            <ProjectCard
                key={item.id}
                id={item.id}
                title={item.title}
                tehnology={item.tehnology}
                description={item.description}
                deleteProject={this.deleteProject}
            />
        ));

        // console.log("projects.js list:", list);
        return (
            <>
                <h3 className="mt-2 text-center font-weight-bold">
                    Project's list
                </h3>
                <div className="container">{list}</div>
            </>
        );
    }
}

export default Projects;
