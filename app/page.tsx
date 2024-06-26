import React from "react";
import Sidebar from "./Components/Sidebar";
import NavLinks from "./Components/NavLinks";
import Sections from "./Components/Sections";
import Footer from "./Components/Footer";

const Home = () => {
  return (
    <main className="container m-auto p-4">
      <NavLinks />
      <div className="container flex grid-cols-2 p-1 gap-0">
          <Sidebar />
          <Sections />
      </div>
      <Footer />
    </main>
  );
}

export default Home