import Sidebar from "./Components/Sidebar";
import NavLinks from "./Components/NavLinks";
import Body from "./Components/Sections";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import StackIcons from "./utils/Tools";

const Home = () => {
  return (
    <body>
      <NavLinks />
      <div className="box-border grid grid-cols-2 p-5 m-7">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </body>
  );
}
export default Home