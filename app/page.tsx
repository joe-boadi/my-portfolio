import React from "react";
import Sidebar from "./Components/Sidebar";
import NavLinks from "./Components/NavLinks";
import Body from "./Components/Sections";
import Footer from "./Components/Footer";

const Home = () => {
  return (
      <main className="container mx-auto p-4">
        <NavLinks />
        <div className="flex grid-cols-2 p-1 gap-0">
            <Sidebar />
            <Body />
        </div>
        <Footer />
      </main>
  );
}

export default Home