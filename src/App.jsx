import BottomHero from "./Components/BottomHero";
import ContentGroup from "./Components/ContentGroup";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar"
import Rectangles from "./Components/Rectangles";
import './output.css';




function App() {

  return (
    <div className="100vh">
      <Navbar />
      <Hero />
      <Rectangles />
      <Info />
      <ContentGroup />
      <BottomHero />
      <Footer />
    </div>
  )
}

export default App;
