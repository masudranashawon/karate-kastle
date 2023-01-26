import About from "./About";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Slider />
      <About />
    </div>
  );
};

export default Home;
