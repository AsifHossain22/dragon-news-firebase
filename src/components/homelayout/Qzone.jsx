import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-4">
        <img
          src={swimmingImage}
          alt=""
          className="w-full object-cover rounded-md"
        />
        <img
          src={classImage}
          alt=""
          className="w-full object-cover rounded-md"
        />
        <img
          src={playImage}
          alt=""
          className="w-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default QZone;
