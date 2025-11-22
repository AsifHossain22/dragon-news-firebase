import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logged Out Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-between gap-4 px-3 sm:px-6">
      <div className="text-sm truncate max-w-[30%] sm:max-w-[40%]">
        {user && <span className="hidden sm:inline">{user.email}</span>}
      </div>

      <nav className="hidden sm:flex gap-6 items-center text-accent">
        <NavLink to="/" className="text-sm">
          Home
        </NavLink>
        <NavLink to="/about" className="text-sm">
          About
        </NavLink>
        <NavLink to="/career" className="text-sm">
          Career
        </NavLink>
      </nav>

      {/* Mobile: small nav (condensed) */}
      <div className="flex items-center gap-3">
        <img
          className="w-9 h-9 rounded-full object-cover"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary px-3 py-1 text-sm"
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-3 py-1 text-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
