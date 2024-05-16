import Sidebar from "./Components/Sidebar";
import NavLinks from "./Components/NavLinks";
import Body from "./Components/Sections";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import StackIcons from "./utils/StackDisplay";

export default function Home() {
  return (
    <body>
        <NavLinks />
        <Sidebar />
        <Body />
        <StackIcons />
        <Contact />
        <Footer />
    </body>
  );
}
