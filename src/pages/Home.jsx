import Header from "../components/Header";
import TopSec from "../components/TopSec";
import MenuSec from "../components/MenuSec";
import Visit from "../components/Visit";
import Video from "../components/Video";
import Contact from "../components/Contact";
import "../style/output.css";
import Footer from "../components/Footer";
import LoggedInHeader from "../components/LoggedInHeader";

function Home() {
  return (
    <div className="scroll-smooth">
      <LoggedInHeader />
      <TopSec />
      <MenuSec />
      <Visit />
      <Video />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
