import React from "react";

const Links = () => {
  return (
    <div
      className="flex flex-col w-full text-center 
            "
    >
      <a
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="https://training.zuri.team/"
      >
        Twitter link
      </a>
      <div
        className="bg-gray-200 py-[28px] rounded-lg 
            h-[76px] mb-2"
      >
        Zuri team
      </div>
      <div
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
      >
        Zuri books
      </div>
      <div
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
      >
        Python books
      </div>
      <div
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
      >
        Background check for coders
      </div>
      <div
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
      >
        Design books
      </div>
    </div>
  );
};

export default Links;
