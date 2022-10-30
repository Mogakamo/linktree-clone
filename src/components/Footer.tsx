import React from "react";
import zuri from "../assets/zuri.png";
import I4G from "../assets/I4G.png";

const Footer = () => {
  return (
    <div className="py-[48px] space-y-5 flex md:flex-row flex-col items-start justify-start md:items-center w-full md:justify-between">
      <a href="https://training.zuri.team/">
        <img src={zuri} alt="Zuri Team" />
      </a>

      <p className="text-gray-500 text-[16px]">
        HNG Internship 9 Frontend Task
      </p>

      <a href="https://ingressive.org/">
        <img src={I4G} alt="Ingresive 4 Good" />
      </a>
    </div>
  );
};

export default Footer;
