import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <>
                <form className="container needs-validation">
                    <div className="container">
                        <h1 className="mt-2 mb-3 font-weight-bold text-center">
                            <em>Contact </em>Page
                        </h1>
                        <div className="ml-5 form-inline">
                            <label
                                className="font-weight-bold"
                                // for="formGroupExampleInput"
                            >
                                Hi, my name is:
                            </label>
                            <input
                                type="text"
                                className="ml-2 form-control"
                                id="formGroupExampleInput"
                                placeholder="your name"
                            />
                        </div>
                        <div className="ml-5 mt-4 form-inline">
                            <label
                                className="font-weight-bold"
                                // for="inputEmail4"
                            >
                                My Email adress is:
                            </label>
                            <input
                                type="email"
                                className="ml-2 form-control"
                                id="inputEmail4"
                                placeholder="your email"
                            />
                        </div>
                        <div className="ml-5 mt-4 form-inline">
                            <label
                                className="font-weight-bold"
                                // for="formGroupExampleInput"
                            >
                                I'd like to talk about:
                            </label>
                            <select className="ml-2 form-control">
                                <option>a general project</option>
                                <option>my development future</option>
                                <option>a possible collaboration</option>
                            </select>
                        </div>
                        <div className="ml-5 mt-4 form-inline">
                            <label
                                className="ml-2 font-weight-bold"
                                // for="formGroupExampleInput"
                            >
                                My budget is:
                            </label>
                            <select className="ml-2 form-control">
                                <option>still being worked out</option>
                                <option>less than 500 E</option>
                                <option>less then 1000 E</option>
                                <option>more then 1000 E</option>
                            </select>
                        </div>
                        <div className="ml-5 mt-4 form-inline">
                            <label
                                className="ml-2 font-weight-bold"
                                // for="formGroupExampleInput"
                            >
                                Here's a bit about my project:
                            </label>
                            <textarea
                                className="ml-2 w-40 form-control"
                                id="exampleFormControlTextarea1"
                                rows="2"
                            ></textarea>
                        </div>
                        <button type="submit" className="mt-5 btn btn-primary">
                            Let's do this
                        </button>
                    </div>
                </form>
            </>
        );
    }
}

export default Contact;
