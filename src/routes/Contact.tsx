import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="md:mx-48 md:my-28 my-10 px-5 h-auto space-y-5">
      <h1 className="text-[36px] font-semibold">Contact Me</h1>
      <p className="text-[20px] text-gray-600 leading-[30px]">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <div className="md:grid grid-cols-2 gap-10 mt-5 ">
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="first_name"
            className="text-[14px] text-gray-700 font-medium"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            className="border-2 px-5 py-2 rounded-md shadow-md outline-none"
          />
        </div>
        <div className="flex flex-col space-y-2 mt-3 md:mt-0">
          <label
            htmlFor="last_name"
            className="text-[14px] text-gray-700 font-medium"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            className="border-2 px-5 py-2 rounded-md shadow-md  outline-none"
          />
        </div>
      </div>
      <div className=" space-y-2">
        <label
          htmlFor="email"
          className="text-[14px] text-gray-700 font-medium"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="yourname@gmail.com"
          className="w-full border-2 px-5 py-2 rounded-md  outline-none shadow-md"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <label
          htmlFor="message"
          className="text-[14px] text-gray-700 font-medium"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          className="border-2 px-5 py-2 rounded-md shadow-md outline-none h-[132px]"
        />
      </div>
      <div className="space-x-1 flex items-center">
        <input
          type="checkbox"
          className="h-[20px] w-[20px] rounded-lg"
        />
        <span className="text-[16px] text-gray-600">
          You agree to providing your data to Amos Nyaburi who may contact you.
        </span>
      </div>
      <button id="btn__submit" className="w-full font-semibold bg-blue-600 px-[12px] text-white rounded-md py-[20px]">
        Send message
      </button>
      <div className="border-t-2 ">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
