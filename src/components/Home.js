import About from "./About";
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
    </div>
  );
};

export default Home;
