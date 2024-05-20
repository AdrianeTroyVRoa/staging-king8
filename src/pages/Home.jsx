import Header from "../components/Header";
import TopSec from "../components/TopSec";
import MenuSec from "../components/MenuSec";
import Visit from "../components/Visit";
import Video from "../components/Video";
import Contact from "../components/Contact";
import "../style/output.css";

function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <TopSec />
      <MenuSec />
      <Visit />
      <Video />
      <Contact />
    </div>
  );
}

export default Home;
