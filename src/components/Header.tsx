import React from "react";
import profile_img from "../assets/amos.jpg";
import share from "../assets/icons/share.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center">
      <button className="ml-64" title="Share link">
        <img src={share} alt="Share btn" className=" h-10" />
      </button>

      <img
        src={profile_img}
        alt="Profile picture"
        id="profile__img"
        className="h-[88px] w-[88px] rounded-full"
      />

      {/* Twitter username */}
      <a
        href="https://twitter.com/m_ogakadev"
        id="twitter"
        className="font-bold text-[20px] my-5"
      >
        m_ogakadev
      </a>
      {/* slack username */}
      <h1 className="slack hidden">mog.dev</h1>
    </div>
  );
};

export default Header;
