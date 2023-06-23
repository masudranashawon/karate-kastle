import { useRef } from "react";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import {
  useGsapsectionTextUnvile,
  useGsapSectionSubtitle,
  useGsapTrainersScale,
  useGsapTrainersRev,
} from "../hooks/gsap";

const Trainers = () => {
  const trainersRef = useRef(null);
  const sectionTextRef = useRef(null);
  const subtitleRef = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  useGsapsectionTextUnvile(sectionTextRef, trainersRef);
  useGsapSectionSubtitle(subtitleRef, trainersRef);
  useGsapTrainersScale(card2, trainersRef, 1.8);
  useGsapTrainersScale(card3, trainersRef, 1.8);
  useGsapTrainersRev(card1, trainersRef, "-150%", 2.2);
  useGsapTrainersRev(card4, trainersRef, "150%", 2.2);

  return (
    <section className='trainers' id='trainers' ref={trainersRef}>
      <div className='container'>
        <div className='card-header'>
          <h2 className='section-title'>
            Our <span>Trainers</span>
            <span className='text-slider' ref={sectionTextRef}></span>
          </h2>
          <p className='trainers-subtitle' ref={subtitleRef}>
            Unleashing the Power Within Guided by Seasoned Masters, Fueled by
            Unyielding Passion
          </p>
        </div>

        <div className='card-grid'>
          <div className='card' ref={card1}>
            <div className='card-image'>
              <img
                src='https://i.ibb.co/N6CPkX6/trainer1.png'
                alt='Martial art grandmaster'
              />
            </div>
            <div className='card-body'>
              <div>
                <h2>Hiroshi Yamamoto</h2>
                <p>Grandmaster</p>
              </div>
              <div className='card-icons'>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaInstagram />
                </a>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className='card' ref={card2}>
            <div className='card-image'>
              <img
                src='https://i.ibb.co/StwH6SW/trainer2.png'
                alt='Martial art master'
              />
            </div>
            <div className='card-body'>
              <div>
                <h2>Emily Rodriguez</h2>
                <p>Master</p>
              </div>
              <div className='card-icons'>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaInstagram />
                </a>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className='card' ref={card3}>
            <div className='card-image'>
              <img
                src='https://i.ibb.co/Tw5pbJq/trainer3.png'
                alt='Martial art youth instructor'
              />
            </div>
            <div className='card-body'>
              <div>
                <h2>Emi Tanaka</h2>
                <p>Youth Instructor</p>
              </div>
              <div className='card-icons'>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaInstagram />
                </a>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className='card' ref={card4}>
            <div className='card-image'>
              <img
                src='https://i.ibb.co/pf2JVGj/trainer4.png'
                alt='Martial art weapons instructor'
              />
            </div>
            <div className='card-body'>
              <div>
                <h2>Kaori Suzuki</h2>
                <p>Weapons Instructor</p>
              </div>
              <div className='card-icons'>
                <a
                  href='https://www.facebook.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href='https://instagram.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaInstagram />
                </a>
                <a
                  href='https://www.twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='card-icon'
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
