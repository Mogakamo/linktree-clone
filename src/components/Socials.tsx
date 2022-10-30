import React from "react";
import slack from "../assets/icons/slack.png"
import github from "../assets/icons/github.png"

const Socials = () => {
  return (
    <div className="flex flex-row items-center w-full justify-center space-x-5 py-5">
        <a href="#mog.dev">
            <img src={slack} alt="username" />
        </a>
        <a href="https://github.com/Mogakamo/linktree-clone.git">
            <img src={github} alt="github repo" />
        </a>
    </div>
  );
};

export default Socials;
