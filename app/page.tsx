import Sidebar from "./Components/Sidebar";
import Topnav from "./Components/Topnav";
import Body from "./Components/Body";

export default function Home() {
  return (
    <main >
      <Topnav />
      <Sidebar />
      <Body />
    </main>
  );
}
