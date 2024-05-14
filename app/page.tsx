import Sidebar from "./Components/Sidebar";
import NavLinks from "./Components/NavLinks";
import Body from "./Components/Body";

export default function Home() {
  return (
    <main className="h-screen font-mono">
      <NavLinks />
      <Sidebar />
      <Body />
    </main>
  );
}
