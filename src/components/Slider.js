import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://i.ibb.co/tLdxGdH/slider1.png",
    headline: "The ultimate self-defense tool for girls",
    body: "Karate Kastle offers a wide range of martial arts classes for students of all ages and skill levels. Our curriculum includes traditional and modern styles of Karate, Taekwondo and Kung Fu, taught by experienced and certified instructors. We believe that martial arts training should be well-rounded, not only focusing on physical skills but also on mental and spiritual development.",
    cta: "Discover the benefits",
    target: "features",
  },
  {
    id: 2,
    src: "https://i.ibb.co/6nT75Dh/slider2.png",
    headline: "Train like a champion at Karate Kastle",
    body: "At Karate Kastle, we believe in providing our students with a well-rounded martial arts education, including traditional and modern styles such as Karate, Taekwondo and Kung Fu.",
    cta: "About Us",
    target: "about",
  },
  {
    id: 3,
    src: "https://i.ibb.co/Pmvjwt9/slider3.png",
    headline: "Elevate your karate skills to the next level",
    body: "Karate Kastle is dedicated to providing the highest quality martial arts instruction in a variety of styles, including Karate, Taekwondo and Kung Fu, for students of all ages and skill levels.",
    cta: "Join our community",
    target: "register",
  },
];

const Slider = () => {
  // Manual Sliding functionality
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className='slider-frame'>
      <div
        className='slider'
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {/* Take taka from data arrey */}
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className='slider-buttons'>
        <button onClick={prevSlide} className='prev-btn'>
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button onClick={nextSlide} className='next-btn'>
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
