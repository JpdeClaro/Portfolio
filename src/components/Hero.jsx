import { useState } from "react";
import PropTypes from "prop-types";
import ProfilePic from "../assets/Profile.jpg";
import { Icon } from "@iconify/react";
import { Link as ScrollLink } from "react-scroll";

const Hero = ({ darkMode, toggleDarkMode }) => {
  Hero.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
  };

  const [menu, setMenu] = useState(true);

  return (
    <div className=" lg:bg-none lg:dark:bg-none bg-bgImgLight lg:dark:bg-[none] dark:bg-bgImgDark bg-no-repeat bg-fixed pt-[60px] xl:pt-[80px] xl:mb-[300px]  md:px-[66px] px-8 pb-[80px] flex flex-wrap justify-center relative ">
      {/* ============Profile/Logo========== */}
      <div
        id="Hero"
        className="
        xl:left-[160px] xl:top-[97px]
        lg:left-[78px] lg:top-[120px] lg:absolute 
        md:mb-10
        mb-5 border-[10px] border-[rgb(100,116,139)] dark:border-lightModeContrast rounded-full lg:border-none  shadow-sm shadow-black dark:shadow-none
        "
      >
        <img
          className="xl:w-[259px] xl:h-[259px] lg:w-[200px] lg:h-[200px]  rounded-full md:w-[230px] w-[150px]"
          src={ProfilePic}
          alt="Profile Picture"
        />
      </div>
      {/* ============NAVBAR========== */}
      <div className="navbar">
        <div className="menu-btn lg:hidden">
          {/* =====NAVMENU btn============= */}
          <button onClick={() => setMenu(!menu)}>
            <Icon
              className="z-[99] dark:text-darkModeText active:border-2 rounded-md fixed left-5 top-5 md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
              icon="line-md:menu"
            />
          </button>
        </div>
        {/* ===========sm:NAVLINK MENU========= */}
        <div
          className={`flex flex-col text-[19px] text-center lg:hidden duration-300 delay-75 ease-in pt-[150px] fixed left-0 backdrop-blur w-full h-full bg-white/30 p-10 z-[99] drop-shadow-md ${
            menu ? " left-[-780px] top-0" : "top-0"
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
          <ScrollLink to="Hero" offset={-123} smooth={true} duration={400}>
            <button
              onClick={() => setMenu(true)}
              className="mb-5 btn-hover navlink "
            >
              HOME
            </button>
          </ScrollLink>
        </div>

        {/* =======Dark/LightMODE Btns======== */}
        <div className="darkMode-btn absolute right-5 top-5 xl:right-[170px] xl:top-[200px] lg:right-[82px] lg:top-[195px] active:scale-[.95] cursor-pointer transition-transform duration-300 ease-in-out delay-100 ">
          <button
            onClick={toggleDarkMode}
            className="z-[99] text-cyan1 "
            aria-label={
              darkMode ? "Switch to Dark Mode" : "Switch to Light Mode"
            }
          >
            {darkMode ? (
              <Icon
                id="lightModeBtn"
                className=" lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] drop-shadow-sm"
                icon="line-md:sun-rising-filled-loop"
              />
            ) : (
              <Icon
                id="darkModeBtn"
                className="lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] drop-shadow-sm"
                icon="line-md:moon-rising-filled-loop"
              />
            )}
          </button>
        </div>

        {/* ===========lg-xl:NAVLINK MENU========== */}
        <div className="relative">
          <ScrollLink
            to="Skills"
            offset={-123}
            smooth={true}
            duration={500}
            className="Hero btn-hover1 lg:text-[18px]  text-lightModeContrast dark:text-darkModeContrast hidden lg:block navlink absolute xl:top-[80px] xl:right-[570px] bg-[none] lg:top-[100px] lg:right-[435px]"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="Contact"
            offset={-123}
            smooth={true}
            duration={500}
            className="Hero btn-hover1 lg:text-[18px]  text-lightModeContrast dark:text-darkModeContrast hidden lg:block navlink absolute xl:top-[80px] xl:right-[240px] bg-[none] lg:top-[100px] lg:right-[180px]"
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="About"
            offset={-123}
            smooth={true}
            duration={500}
            className="Hero btn-hover1 lg:text-[18px]  text-lightModeContrast dark:text-darkModeContrast hidden lg:block navlink absolute xl:top-[180px] xl:right-[710px] bg-[none] lg:top-[180px] lg:right-[540px]"
          >
            About me
          </ScrollLink>
          <ScrollLink
            to="Projects"
            offset={-123}
            smooth={true}
            duration={500}
            className="Hero btn-hover1 lg:text-[18px]  text-lightModeContrast dark:text-darkModeContrast hidden lg:block navlink absolute xl:top-[180px] xl:right-[400px] bg-[none] lg:top-[180px] lg:right-[300px]"
          >
            Projects
          </ScrollLink>
        </div>
        {/* ========NAVBAR=========== */}
        <svg
          className="navbar hidden lg:block w-[100%] h-[411px] fill-[#64748B] dark:fill-[#334155]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1155 411"
          fill="none"
        >
          <path d="M283.971 143.665L274.973 143.847L283.971 143.665ZM553 220C553 224.971 557.029 229 562 229C566.971 229 571 224.971 571 220H553ZM410 57C410 52.0294 405.971 48 401 48C396.029 48 392 52.0294 392 57H410ZM730 57C730 52.0294 725.971 48 721 48C716.029 48 712 52.0294 712 57H730ZM872 220C872 224.971 876.029 229 881 229C885.971 229 890 224.971 890 220H872ZM283.871 131.5C278.901 131.5 274.871 135.529 274.871 140.5C274.871 145.471 278.901 149.5 283.871 149.5V131.5ZM1058.5 140.5C1058.5 167.01 1079.99 188.5 1106.5 188.5C1133.01 188.5 1154.5 167.01 1154.5 140.5C1154.5 113.99 1133.01 92.5 1106.5 92.5C1079.99 92.5 1058.5 113.99 1058.5 140.5ZM146.5 402L140.136 408.364C141.838 410.066 144.152 411.016 146.559 411C148.966 410.984 151.267 410.004 152.947 408.28L146.5 402ZM209.447 350.28C212.915 346.72 212.841 341.022 209.28 337.553C205.72 334.085 200.022 334.159 196.553 337.72L209.447 350.28ZM94.864 337.636C91.3492 334.121 85.6508 334.121 82.136 337.636C78.6213 341.151 78.6213 346.849 82.136 350.364L94.864 337.636ZM275 146.5C275 217.469 217.469 275 146.5 275V293C227.41 293 293 227.41 293 146.5H275ZM146.5 275C75.5314 275 18 217.469 18 146.5H0C0 227.41 65.5903 293 146.5 293V275ZM18 146.5C18 75.5314 75.5314 18 146.5 18V0C65.5903 0 0 65.5903 0 146.5H18ZM146.5 18C216.582 18 273.563 74.1052 274.973 143.847L292.97 143.483C291.361 63.9639 226.401 0 146.5 0V18ZM274.973 143.847C274.991 144.729 275 145.613 275 146.5H293C293 145.492 292.99 144.486 292.97 143.483L274.973 143.847ZM571 220V140.5H553V220H571ZM410 140.5V57H392V140.5H410ZM730 140.5V57H712V140.5H730ZM890 220V140.5H872V220H890ZM283.871 149.5H401V131.5H283.871V149.5ZM401 149.5H562V131.5H401V149.5ZM562 149.5H721V131.5H562V149.5ZM721 149.5H881V131.5H721V149.5ZM881 149.5H1106.5V131.5H881V149.5ZM155.5 402V284H137.5V402H155.5ZM152.947 408.28L209.447 350.28L196.553 337.72L140.053 395.72L152.947 408.28ZM152.864 395.636L94.864 337.636L82.136 350.364L140.136 408.364L152.864 395.636Z" />
        </svg>

        {/* ==========CTA========== */}
      </div>
      <div className="Hero mb-10 text-[17px] md:text-[30px] xl:text-[35px] lg:text-[32px] justify-center text-justify drop-shadow-md dark:drop-shadow-none md:px-[60px] lg:pl-[150px] lg:pr-[150px] xl:pr-[250px] lg:absolute lg:top-[370px] lg:left-[120px] xl:top-[400px] xl:left-[280px]">
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
      <div className="btn flex justify-center gap-5 relative xl:mt-[170px] lg:mt-[150px]">
        <button className="transition-[.3s] drop-shadow-sm active:scale-[.95] hover:bg-slate-400 text-lightModeContrast dark:text-darkModeText rounded-full border-[3px] w-[100px] h-9 lg:w-[150px] lg:h-12 lg:border-[4px] lg:text-[19px]  md:w-[135px] md:h-10 md:text-[17px] border-cyan2 dark:border-cyan1">
          <a href="#">Resume</a>
        </button>
        <button className="transition-[.3s] hover:animate-none  drop-shadow-sm active:scale-[.95] hover:bg-slate-400 text-darkModeText rounded-full w-[100px] h-9 lg:w-[150px] lg:h-12 lg:text-[19px]  md:w-[135px] md:h-10 md:text-[17px] bg-cyan2 dark:border-cyan1">
          <a href="#">Hire me</a>
        </button>
        <span className="animate-ping  w-6 h-6 rounded-full bg-cyan1 absolute right-[-2px]"></span>
      </div>
    </div>
  );
};

export default Hero;
