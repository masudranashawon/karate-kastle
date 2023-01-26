import { useRef } from "react";
import { CgMenuRight } from "react-icons/cg";
import { useGsapLinkDownFall } from "../hooks/gsap";

const Navbar = () => {
  const mainNavRef = useRef(null);
  const logoRef = useRef(null);
  const navLink1 = useRef(null);
  const navLink2 = useRef(null);
  const navLink3 = useRef(null);
  const navLink4 = useRef(null);
  const navLink5 = useRef(null);
  const navLink6 = useRef(null);
  const navLink7 = useRef(null);

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

  useGsapLinkDownFall(navSecArr);

  return (
    <nav className='navbar' ref={mainNavRef}>
      <div className='container navbar-container'>
        <div className='logo-sec' ref={logoRef}>
          <a href='./'>
            <img
              className='logo'
              src='https://i.ibb.co/dGhty6N/karate-kastle-logo.png'
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
              <a className='main-nav-link' href='#about'>
                About
              </a>
            </li>
            <li ref={navLink3}>
              <a className='main-nav-link' href='#gallery'>
                Gallery
              </a>
            </li>
            <li ref={navLink4}>
              <a className='main-nav-link' href='#trainers'>
                Trainers
              </a>
            </li>
            <li ref={navLink5}>
              <a className='main-nav-link' href='#why-us'>
                Why Choose us
              </a>
            </li>
            <li ref={navLink6}>
              <a className='main-nav-link' href='#contact'>
                Contact
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
