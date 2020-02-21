import React from "react";

//The file should be renamed to JSX extension since it contains React JSX syntax

function About() {
    return (
        <div>
            <h2 className="mt-5 text-center font-weight-bold">
                <em>About</em> page
            </h2>
            <div className="d-flex justify-content-around">
                <ul className="d-flex justify-content-around">
                    <li className="mr-5">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit,
                    </li>
                    <li className="mr-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                    </li>
                    <li className="mr-5">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident, similique sunt
                        in culpa qui officia deserunt mollitia animi, id est
                        laborum et dolorum fuga.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
