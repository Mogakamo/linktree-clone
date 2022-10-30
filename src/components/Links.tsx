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
        href="http://twitter.com/m_ogakadev"
        id="twitter"
      >
        Twitter Link
      </a>
      <a
        className="bg-gray-200 py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="http://training.zuri.team"
        id="btn__zuri"
      >
        Zuri Team
      </a>
      <a
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="http://books.zuri.team"
        id="books"
        title="Get a variety of books ranging from coding to design."
      >
        Zuri books
      </a>
      
      <a
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="https://books.zuri.team/python-for-beginners?ref_id=mog.dev"
        id="book__python"
        title="Want to get started with programming? Grab your self a copy and learn
        how to program with Python."
      >
        Python Books
      </a>

      <a
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="https://background.zuri.team"
        id="pitch"
        title="Doubting your programming skills? Worry no more because we have
        programs that will help you get on track. Click the link to learn
        more."
      >
        Background Check for Coders
      </a>
      <a
        className="bg-gray-200  py-[28px] rounded-lg 
            h-[76px] mb-2"
        href="https://books.zuri.team/design-rules"
        id="book__design"
        title="Grab a copy to get a taste on how designing softwares feels like."
      >
        Design Books
      </a>
    </div>
  );
};

export default Links;
