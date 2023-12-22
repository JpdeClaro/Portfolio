import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../assets/NavBar.png";
import Navbar2 from "../assets/Navbar2.png";
import ProfilePic from "../assets/Profile.jpg";
import { Icon } from "@iconify/react";
import { Link as ScrollLink } from "react-scroll";

const Hero = ({ darkMode, toggleDarkMode }) => {
  Hero.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
  };

  const SunMoonBtn = () => {
    return (
      <>
        <button
          onClick={toggleDarkMode}
          className="z-[99] text-cyan1 "
          aria-label={darkMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
          {darkMode ? (
            <Icon
              id="lightModeBtn"
              className="w-[40px] h-[40px] drop-shadow-sm"
              icon="line-md:sun-rising-filled-loop"
            />
          ) : (
            <Icon
              id="darkModeBtn"
              className="w-[40px] h-[40px] drop-shadow-md"
              icon="line-md:moon-rising-filled-loop"
            />
          )}
        </button>
      </>
    );
  };

  const [menu, setMenu] = useState(true);

  return (
    <div className=" lg:bg-none lg:dark:bg-none bg-bgImgLight lg:dark:bg-[none] dark:bg-bgImgDark bg-no-repeat bg-fixed pt-[80px] md:pt-[100px] lg:pt-[70px] xl:mb-[300px]  md:px-[66px] px-8 pb-[80px]">
      
      <div className="relative flex flex-wrap justify-center">
        {/* ========NAVBAR=========== */}
        <div id="" className="hidden lg:block">
          {darkMode ? (
            <img className="lg:w-[100%] " src={Navbar} alt="Navbar" />
          ) : (
            <img className="lg:w-[100%]" src={Navbar2} alt="Navbar2" />
          )}

          
        </div>
        {/* ============md-sm:Profile/Logo========== */}
        <div
            id="Home"
            className="lg:hidden 
            md:mb-10 mb-5
            md:w-[230px] w-[200px] 
            border-[10px] border-[rgb(100,116,139)] dark:border-lightModeContrast  lg:border-none rounded-full shadow-sm shadow-black dark:shadow-none
            "
          >
            <img
              className="rounded-full"
              src={ProfilePic}
              alt="Profile Picture"
            />
        </div>
        <div className="absolute top-0 bg-green-500 left-1/2">
          <div className="relative">
            <ScrollLink
              to="Skills"
              offset={-123}
              smooth={true}
              duration={500}
              className="Hero btn-hover1 lg:text-[18px]  text-lightModeContrast dark:text-darkModeContrast hidden lg:block navlink absolute xl:top-[80px] lg:top-[70px] -left-8"
            >
              Skills
            </ScrollLink>

            <ScrollLink
              to="Contact"
              offset={-123}
              smooth={true}
              duration={500}
              className="Hero btn-hover1 lg:text-[18px]  text-lightModeContrast dark:text-darkModeContrast hidden lg:block navlink absolute xl:top-[80px] lg:top-[70px] lg:-right-[280px] 1175:-right-[320px] xl:-right-[350px]"
            >
              Contact
            </ScrollLink>

            <ScrollLink
              to="Projects"
              offset={-123}
              smooth={true}
              duration={500}
              className="Hero btn-hover1 lg:text-[18px]  text-lightModeContrast dark:text-darkModeContrast hidden lg:block navlink absolute lg:top-[130px] lg:-left-[180px] 1175:top-[160px] xl:top-[180px] xl:-left-[210px]"
            >
              Projects
            </ScrollLink>

            <ScrollLink
              to="About"
              offset={-123}
              smooth={true}
              duration={500}
              className="Hero btn-hover1 lg:text-[18px]  text-lightModeContrast dark:text-darkModeContrast hidden lg:block navlink absolute lg:top-[130px] lg:-right-[180px] 1175:top-[160px] xl:top-[180px] xl:-right-[200px] "
            >
              About me
            </ScrollLink>
          </div>
          
        </div>

          {/* =======Dark/LightMODE Btns======== */}

          <div className="relative">
            <div className="xl:block hidden darkMode-btn absolute lg:right-4 lg:top-[92px]  xl:right-7 xl:top-[125px]">
              <SunMoonBtn />
            </div>
          </div>
          
          <div className="xl:hidden lg:block hidden darkMode-btn absolute lg:right-4 lg:top-[92px] 1175:top-[110px] 1175:right-6">
            <SunMoonBtn />
          </div>

          {/* ==========CTA========== */}
        <div className="xl:top-[300px] top-[260px] lg:absolute">
          <div className="Hero text-[17px] md:text-[30px] xl:mx-[220px] xl:pl-[100px] 1175:mx-[160px] 1100:mx-[130px] lg:mx-[100px] lg:pl-[80px] xl:text-[35px] lg:text-[32px] justify-center text-justify drop-shadow-md dark:drop-shadow-none ">
              <span className="lg:border-t-[5px] border-t-2 border-cyan1 rounded-t-sm">
                He
              </span>
              llo!, <br /> I`m{" "}
              <span className="text-cyan2 dark:text-cyan1">
                John Patrick DeClaro{" "}
              </span>
              a Web Developer with a passion in Front-End and UI/UX.
            </div>
            {/* ========CTA Buttons======== */}
            <div className="btn flex justify-center gap-5 relative xl:mt-[50px] lg:mt-[150px] mt-[50px]">
              <button className="bn4 transition-[.3s] drop-shadow-sm active:scale-[.95] hover:bg-slate-400 text-lightModeContrast dark:text-darkModeText rounded-full border-[3px] w-[100px] h-9 lg:w-[150px] lg:h-12 lg:border-[4px] lg:text-[19px]  md:w-[135px] md:h-10 md:text-[17px] border-cyan2 dark:border-cyan1">
                <a href="#">Resume</a>
              </button>
              <button className="bn4 transition-[.3s] hover:animate-none  drop-shadow-sm active:scale-[.95] hover:bg-slate-400 text-darkModeText rounded-full w-[100px] h-9 lg:w-[150px] lg:h-12 lg:text-[19px]  md:w-[135px] md:h-10 md:text-[17px] bg-cyan2 dark:border-cyan1">
                <a href="#">Hire me</a>
                <span className="absolute top-0 w-6 h-6 rounded-full animate-ping bg-cyan1 "></span>
              </button>
              
            </div>
        </div>
        
        </div>
          {/* =======Dark/LightMODE Btns======== */}
          <div className="absolute lg:hidden darkMode-btn top-4 right-4 md:top-7 md:right-10 ">
            <SunMoonBtn />
          </div>
        
        {/* =========SM-MD NavBurger Menu======== */}
        <div className="navbar">
        <div className="menu-btn lg:hidden">
          {/* =====NAVMENU btn============= */}
          <button onClick={() => setMenu(!menu)}>
            <Icon
              className="z-[99] dark:text-darkModeText active:border-2 rounded-md fixed left-5 top-5 md:top-7 md:left-9 md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
              icon="line-md:menu"
            />
          </button>
        </div>
        {/* ===========sm:NAVLINK MENU========= */}
        <div
          className={`flex flex-col text-[19px] text-center lg:hidden duration-300 delay-75 ease-in pt-[150px] fixed left-0 backdrop-blur w-full h-full bg-white/30 p-10 z-[99] drop-shadow-md ${
            menu ? " left-[-1050px] top-0" : "top-0"
          }`}
        >
          <button onClick={() => setMenu(true)}>
            <Icon
              className="menu-btn-close hover:text-cyan1 active:scale-[.9] rounded-md w-[30px] h-[30px] fixed right-5 top-5"
              icon="line-md:menu-to-close-alt-transition"
            />
          </button>
          <ScrollLink to="About" offset={-123} smooth={true} duration={400}>
            <button
              onClick={() => setMenu(true)}
              className="mb-5 btn-hover navlink "
            >
              About
            </button>
          </ScrollLink>
          <ScrollLink to="Skills" offset={-123} smooth={true} duration={400}>
            <button
              onClick={() => setMenu(true)}
              className="mb-5 btn-hover navlink "
            >
              Skills
            </button>
          </ScrollLink>
          <ScrollLink to="Projects" offset={-123} smooth={true} duration={400}>
            <button
              onClick={() => setMenu(true)}
              className="mb-5 btn-hover navlink "
            >
              Projects
            </button>
          </ScrollLink>
          <ScrollLink to="Contact" offset={-123} smooth={true} duration={400}>
            <button
              onClick={() => setMenu(true)}
              className="mb-5 btn-hover navlink "
            >
              Contact
            </button>
          </ScrollLink>
          <ScrollLink to="Home" offset={-123} smooth={true} duration={400}>
            <button
              onClick={() => setMenu(true)}
              className="mb-5 btn-hover navlink "
            >
              HOME
            </button>
          </ScrollLink>
        </div>

      </div>
      
    </div>
  );
};

export default Hero;
