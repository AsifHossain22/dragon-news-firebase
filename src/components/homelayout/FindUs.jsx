import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item text-sm py-2">
            <FaFacebook /> <span className="ml-2">Facebook</span>
          </button>
          <button className="btn bg-base-100 justify-start join-item text-sm py-2">
            <FaTwitter /> <span className="ml-2">Twitter</span>
          </button>
          <button className="btn bg-base-100 justify-start join-item text-sm py-2">
            <FaInstagram /> <span className="ml-2">Instagram</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
