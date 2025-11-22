import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";

const RightAside = () => {
  return (
    <div className="space-y-6 px-2 md:px-0">
      <div className="sticky top-4 space-y-6">
        <SocialLogin />
        <FindUs />
        <QZone />
      </div>
    </div>
  );
};

export default RightAside;
