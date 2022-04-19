import React, { useState } from "react";

const Contact = function () {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log("if there was a database you would see==>", formState);
    }

    return (
        <div className="container">
            <h2>Contact me</h2>

            <form id="contact-form" className="form-row d-flex flex-column align-items-center p-4" onSubmit={handleSubmit}>
                <div className="form-group col-md-4">
                    <label htmlFor="name" className="p-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="form-control m-1"
                        name="name"
                        defaultValue={name}
                    />
                </div>
                <div className="form-group col-md-4">
                    <label className="p-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        className=" form-control m-1"
                        type="email"
                        name="email"
                        defaultValue={email}
                    />
                </div>
                <div className="form-group col-md-4 ">
                    <label htmlFor="message" className="p-1">
                        Message
                    </label>
                    <textarea
                        className=" form-control m-1"
                        name="message"
                        rows="4"
                        defaultValue={message}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
