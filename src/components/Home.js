import About from "./About";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Slider />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
