import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <header className="w-full max-w-3xl mx-auto py-4 px-4">
        <Navbar />
      </header>

      <main className="w-full max-w-3xl mx-auto py-6 px-4 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
