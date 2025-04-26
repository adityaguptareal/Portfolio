import React from "react";
import { logoIconsList } from "../constants";

const LogoIcons = ({ icon }) => {
  return (
    <div className="flex-none flex-ceter marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

function LogoSection() {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />

      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcons key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
