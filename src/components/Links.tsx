import React from "react";

const Links = () => {
  return (
    <div
      className="flex flex-col w-full text-center 
            px-10"
    >
      <a
        className="bg-gray-200 py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="http://books.zuri.team"
        id="books"
      >
        <h1 className="font-semibold text-sm">Zuri Books</h1>
        <p className="text-xs">
          Grab yourself a copy of the best reads with books covering a wide
          range of coding areas and topics
        </p>
      </a>
      <a
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="https://books.zuri.team/python-for-beginners?ref_id=mog.dev"
        id="book__python"
      >
        <h1 className="font-semibold text-sm">Python</h1>
        <p className="text-xs">
          Want to get started with programming? Grab your self a copy and learn
          how to program with Python.
        </p>
      </a>
      <a
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="https://background.zuri.team"
        id="pitch"
      >
        <h1 className="font-semibold text-sm">Background Check for Coders</h1>
        <p className="text-xs">
          Doubting your programming skills? Worry no more because we have
          programs that will help you get on track. Click the link to learn
          more.
        </p>
      </a>
      <a
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="https://books.zuri.team/design-rules"
        id="book__design"
      >
        <h1 className="font-semibold text-sm">Get Started with Design</h1>
        <p className="text-xs">
          Grab a copy to get a taste on how designing softwares feels like.
        </p>
      </a>
    </div>
  );
};

export default Links;
