import Sidebar from "./Components/Sidebar";
import NavLinks from "./Components/NavLinks";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <body>
        <NavLinks />
        <Sidebar />
        <Body />
        <Contact />
        <Footer />
    </body>
  );
}
