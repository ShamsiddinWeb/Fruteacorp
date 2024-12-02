import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../../Components/Header";

const Home = (routes) => {
  return (
    <div className="flex flex-col w-full">
      <ScrollRestoration />
      <Header/>
      <main>
        <Outlet />
      </main> 
    </div>
  );
};

export default Home;