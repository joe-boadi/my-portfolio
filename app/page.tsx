import Sidebar from "./Components/Sidebar";
import NavLinks from "./Components/NavLinks";
import Body from "./Components/Body";

export default function Home() {
  return (
    <main className="h-screen font-mono">
      <NavLinks />
      <div className="grid grid-cols-2">
        <Sidebar />
        <Body />
      </div>
    </main>
  );
}
