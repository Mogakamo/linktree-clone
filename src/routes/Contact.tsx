import React from "react";

const Contact = () => {
  return (
    <div className="mx-48 my-28 h-screen">
      <h1 className="text-">Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col">
          <label htmlFor="f_name">First name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="border px-5 py-2 rounded-md shadow-md"
          />
        </div>
        <div>
          <label htmlFor="f_name">First name</label>
          <input type="text" placeholder="Enter your first name" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
