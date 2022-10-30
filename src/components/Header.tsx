import React from "react";
import profile_img from "../assets/amos.jpg";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={profile_img}
        alt="Profile picture"
        id="profile__img"
        className="h-[88px] w-[88px] rounded-full"
      />
      {/* Twitter username */}
      <h1 id="twitter" className="font-bold text-[20px] my-5">
        m_ogakadev
      </h1>
      {/* slack username */}
      {/* <h1 className="slack">mog.dev</h1> */}
    </div>
  );
};

export default Header;
