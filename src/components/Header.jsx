import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2 px-4 sm:px-6 md:px-0">
      <img
        className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[420px] max-w-full"
        src={logo}
        alt="logo"
      />
      <p className="text-accent text-sm sm:text-base">
        Journalism Without Fear or Favour
      </p>
      <p className="font-semibold text-accent text-xs sm:text-sm">
        {format(new Date(), "EEEE , MMMM dd , yyyy")}
      </p>
    </div>
  );
};

export default Header;
