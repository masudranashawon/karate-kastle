import Navbar from "./Navbar";
import Slider from "./Slider";
import About from "./About";
import Gallery from "./Gallery";
import Trainers from "./Trainers";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Slider />
      <About />
      <Gallery />
      <Trainers />
      <Footer />
    </div>
  );
};

export default Home;
