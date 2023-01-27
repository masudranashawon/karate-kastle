import { useRef } from "react";

import { TbKarate, TbYoga } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { GiSwordwoman } from "react-icons/gi";
import {
  useGsapsectionTextUnvile,
  useGsapRedLineDownFall,
  useGsapAboutDescUpward,
  useGsapKarateStyleDownFall,
  useGsapAboutBackward,
} from "../hooks/gsap";

const About = () => {
  const sectionTextRef = useRef(null);
  const aboutRef = useRef(null);
  const redLineRef = useRef(null);
  const aboutDescRef = useRef(null);
  const karateStyleRef1 = useRef(null);
  const karateStyleRef2 = useRef(null);
  const karateStyleRef3 = useRef(null);
  const karateStyleRef4 = useRef(null);
  const aboutImageRef = useRef(null);

  const karateStyleRefArr = [
    karateStyleRef1,
    karateStyleRef2,
    karateStyleRef3,
    karateStyleRef4,
  ];

  useGsapsectionTextUnvile(sectionTextRef, aboutRef);
  useGsapRedLineDownFall(redLineRef, aboutRef);
  useGsapAboutDescUpward(aboutDescRef, aboutRef);
  useGsapKarateStyleDownFall(karateStyleRefArr, aboutRef);
  useGsapAboutBackward(aboutImageRef, aboutRef);

  return (
    <section className='about' id='about' ref={aboutRef}>
      <div className='container about-container'>
        <div className='left-sec'>
          <div className='about-content'>
            <span className='red-line' ref={redLineRef}></span>
            <h2 className='section-title'>
              Welcome to <span>Karate Kastle</span>
              <span className='text-slider' ref={sectionTextRef}></span>
            </h2>
            <p className='about-description' ref={aboutDescRef}>
              Karate Kastle is a premier martial arts institute that offers a
              wide range of traditional and modern styles of Karate, Taekwondo,
              and Kung Fu for students of all ages and skill levels. Our
              experienced and certified instructors provide high-quality
              instruction that fosters discipline, self-confidence, and
              self-defense skills. We believe in providing a well-rounded
              martial arts education that not only focuses on physical skills
              but also on mental and spiritual development. Join our community
              and start your martial arts journey today at Karate Kastle.
            </p>
          </div>
          <div className='about-karate'>
            <div className='karate-style' ref={karateStyleRef1}>
              <div className='icon'>
                <TbKarate />
              </div>
              <div className='about-karate-style'>
                <h3>Shotokan Karate</h3>
              </div>
            </div>
            <div className='karate-style' ref={karateStyleRef2}>
              <div className='icon'>
                <GrYoga />
              </div>
              <div className='about-karate-style'>
                <h3>Goju-ryu Karate</h3>
              </div>
            </div>
            <div className='karate-style' ref={karateStyleRef3}>
              <div className='icon wado-wyu'>
                <TbYoga />
              </div>
              <div className='about-karate-style'>
                <h3>Wado-ryu Karate</h3>
              </div>
            </div>
            <div className='karate-style' ref={karateStyleRef4}>
              <div className='icon'>
                <GiSwordwoman />
              </div>
              <div className='about-karate-style'>
                <h3>Kyokushin Karate</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='right-sec'>
          <div className='about-image' ref={aboutImageRef}>
            <img
              src='https://i.ibb.co/7SKyT2V/about-image.png'
              alt='Two women try to learn karate'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
