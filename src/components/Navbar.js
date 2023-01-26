import { useRef } from "react";
import { CgMenuRight } from "react-icons/cg";
import { useLinkDownFall } from "../hooks/gsap";

const Navbar = () => {
  const mainNavRef = useRef(null);
  const logoRef = useRef();
  const navLink1 = useRef();
  const navLink2 = useRef();
  const navLink3 = useRef();
  const navLink4 = useRef();
  const navLink5 = useRef();
  const navLink6 = useRef();
  const navLink7 = useRef();

  const navSecArr = [
    logoRef,
    navLink1,
    navLink2,
    navLink3,
    navLink4,
    navLink5,
    navLink6,
    navLink7,
  ];

  const toggleMenu = () => {
    console.log(mainNavRef.current);
    mainNavRef.current.classList.toggle("nav-open");
  };

  const clickOnClose = () => {
    mainNavRef.current.classList.remove("nav-open");
  };

  useLinkDownFall(navSecArr);

  return (
    <nav className='navbar' ref={mainNavRef}>
      <div className='container navbar-container'>
        <div className='logo-sec' ref={logoRef}>
          <a href='./'>
            <img
              className='logo'
              src='https://i.ibb.co/5BjmCK8/karate-kastle-logo.png'
              alt='logo'
            />
          </a>
        </div>

        {/* NAVBAR */}
        <nav className='main-nav' onClick={clickOnClose}>
          <ul className='main-nav-list'>
            <li ref={navLink1}>
              <a className='main-nav-link' href='/'>
                Home
              </a>
            </li>
            <li ref={navLink2}>
              <a className='main-nav-link' href='#features'>
                Features
              </a>
            </li>
            <li ref={navLink3}>
              <a className='main-nav-link' href='#abot'>
                About
              </a>
            </li>
            <li ref={navLink4}>
              <a className='main-nav-link' href='#gallery'>
                Gallery
              </a>
            </li>
            <li ref={navLink5}>
              <a className='main-nav-link' href='#trainers'>
                Trainers
              </a>
            </li>
            <li ref={navLink6}>
              <a className='main-nav-link' href='#why-us'>
                Why Choose Us
              </a>
            </li>
            <li ref={navLink7}>
              <a className='main-nav-link nav-cta' href='#reg-now'>
                REGISTER NOW
              </a>
            </li>
          </ul>
        </nav>

        {/* MOBILE NAV */}
        <button className='btn-mobile-nav' onClick={toggleMenu}>
          <CgMenuRight size={"3rem"} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
