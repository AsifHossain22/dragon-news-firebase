import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-4 text-base">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-secondary btn-outline w-full justify-center items-center py-2">
          <FcGoogle size={20} /> <span className="ml-2">Login with Google</span>
        </button>
        <button className="btn btn-outline btn-primary w-full justify-center items-center py-2">
          <FaGithub size={20} /> <span className="ml-2">Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
