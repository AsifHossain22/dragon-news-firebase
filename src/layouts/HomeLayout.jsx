import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="min-h-screen bg-transparent">
      <header className="bg-transparent">
        {import.meta.env.VITE_name}
        <div className="w-full max-w-6xl mx-auto px-4">
          <Header />
          <div className="mt-3">
            <LatestNews />
          </div>
          <div className="mt-3">
            <Navbar />
          </div>
        </div>
      </header>

      <main className="w-full max-w-6xl mx-auto mt-4 px-4 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="hidden lg:block lg:col-span-3 sticky top-4 self-start">
          <LeftAside />
        </aside>

        <section className="col-span-1 lg:col-span-6">
          <div className="py-2">
            {state === "loading" ? <Loading /> : <Outlet />}
          </div>
        </section>

        <aside className="hidden lg:block lg:col-span-3 sticky top-4 self-start">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
