import { animateScroll as scroll } from "react-scroll";
import { Icon } from "@iconify/react";
import ContactForm from "./ContactForm";
import WardrobeManila from "../assets/WardrobeManila.png";
import OrganizeMe from "../assets//OrganizeMe.png";
import MySelf from "../assets/JpdeClaro.png";
import DarkMyself from "../assets/Dark-JpdeClaro.png";
import Banner from "../assets/Project-banner.jpg";

const Header = () => {
  const DivComponent = ({ content, icon, spanCon }) => (
    <div className="flex rounded-sm bg-slate-50 dark:bg-slate-800 drop-shadow-md">
      <Icon
        className="text-cyan1 lg:text-[60px] text-[40px] lg:pb-10 pb-5 mr-2"
        icon={icon}
      ></Icon>
      <div>
        <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
          {content}
        </p>
        <span className=" text-cyan1 xl:text-[18px] lg:text-[15px] text-[13px]">
          {spanCon}
        </span>
      </div>
    </div>
  );

  const divEducation = [
    "BACHELOR OR SECONDARY EDUCATION RAMON MAGSAYSAY MEMORIAL COLLEGES General Santos City, Philippines 9500 May, 2022",
    `HUMANITIES IN SOCIAL SCIENCES
    GENERAL SANTOS CITY NATIONAL HIGH SCHOOL - SHS
    AWARD: w/ Honor
    General Santos City, Philippines 9500
    April, 2018`,
  ];

  const divCertification = [
    `FULL - STACK WEB DEVELOPMENT
    KODEGO - Bootcamp
    AWARD: Top - Student
    Aug  - October , 2023 
    `,
    `LICENSURE EXAMINATION FOR TEACHER 
    PRC  XII - KORONADAL 
    REMARKS: Passed
    Koronadal, Philippines 9500
    March 2023
    `,
  ];

  const divProject1 = [
    `A to-do list app; use as personal task management companion. With a commitment to simplicity, efficiency, and organization, empower to take control of your tasks and make the most of every day.`,
  ];

  const divProject2 = [
    `An e-commerce platform that primarily focuses on fashion and clothing. Its purpose is to provide consumers with a wide range of trendy and affordable clothing, accessories, and fashion items.`,
  ];

  // Btn
  const scrollTo = () => {
    scroll.scrollTo();
  };

  return (
    <div className=" Header lg:mt-[500px] relative grid lg:grid-cols-2 grid-cols-none grid-flow-row  lg:px-[60px] lg:gap-[150px] lg:justify-between">
      {/* =====Scroll to Top btn===== */}
      <button
        className="fixed bottom-10 right-10 hidden md:block text-[30px] text-lightTextContent dark:text-darkModeText "
        onClick={scrollTo}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Icon
          className=" hover:text-cyan1 z-[99]"
          icon="iconoir:fast-arrow-top"
        ></Icon>
      </button>
      {/* ========Vertical bullet line ========= */}
      {/* <div className="bg-none absolute xl:left-[550px] lg:left-[40%] text-[35px] hidden lg:block">
        <svg
          className="fill-[#CBD5E1] dark:fill-[#334155] lg:block hidden xl:w-[96px] xl:h-[100%] lg:w-[70px] z-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 97 5424"
          fill="none"
        >
          <path
            d="M94.461 14H96.961C96.961 12.6193 95.8417 11.5 94.461 11.5V14ZM94.3481 4234L96.8481 4234L96.8481 4234L94.3481 4234ZM2.01476 4234C2.01476 4241.36 7.98429 4247.33 15.3481 4247.33C22.7119 4247.33 28.6814 4241.36 28.6814 4234C28.6814 4226.64 22.7119 4220.67 15.3481 4220.67C7.98429 4220.67 2.01476 4226.64 2.01476 4234ZM2.12772 14C2.12772 21.3638 8.09726 27.3333 15.4611 27.3333C22.8249 27.3333 28.7944 21.3638 28.7944 14C28.7944 6.6362 22.8249 0.666667 15.4611 0.666667C8.09726 0.666667 2.12772 6.6362 2.12772 14ZM2.12772 696.5C2.12772 703.864 8.09726 709.833 15.4611 709.833C22.8249 709.833 28.7944 703.864 28.7944 696.5C28.7944 689.136 22.8249 683.167 15.4611 683.167C8.09726 683.167 2.12772 689.136 2.12772 696.5ZM2.12772 1121C2.12772 1128.36 8.09726 1134.33 15.4611 1134.33C22.8249 1134.33 28.7944 1128.36 28.7944 1121C28.7944 1113.64 22.8249 1107.67 15.4611 1107.67C8.09726 1107.67 2.12772 1113.64 2.12772 1121ZM2.12772 1850.5C2.12772 1857.86 8.09726 1863.83 15.4611 1863.83C22.8249 1863.83 28.7944 1857.86 28.7944 1850.5C28.7944 1843.14 22.8249 1837.17 15.4611 1837.17C8.09726 1837.17 2.12772 1843.14 2.12772 1850.5ZM94.461 2460L96.961 2460.01V2460H94.461ZM2.12773 2460C2.12773 2467.36 8.09727 2473.33 15.4611 2473.33C22.8249 2473.33 28.7944 2467.36 28.7944 2460C28.7944 2452.64 22.8249 2446.67 15.4611 2446.67C8.09727 2446.67 2.12773 2452.64 2.12773 2460ZM92.9658 3131.5V3134C94.3443 3134 95.4627 3132.88 95.4658 3131.51L92.9658 3131.5ZM0.632487 3131.5C0.632487 3138.86 6.60202 3144.83 13.9658 3144.83C21.3296 3144.83 27.2992 3138.86 27.2992 3131.5C27.2992 3124.14 21.3296 3118.17 13.9658 3118.17C6.60202 3118.17 0.632487 3124.14 0.632487 3131.5ZM92.961 2783L95.461 2783C95.461 2781.62 94.3417 2780.5 92.961 2780.5C91.5803 2780.5 90.461 2781.62 90.461 2783L92.961 2783ZM1.62557 3539.5C1.62557 3546.86 7.59511 3552.83 14.9589 3552.83C22.3227 3552.83 28.2922 3546.86 28.2922 3539.5C28.2922 3532.14 22.3227 3526.17 14.9589 3526.17C7.59511 3526.17 1.62557 3532.14 1.62557 3539.5ZM94.4609 5410.5V5413C95.8417 5413 96.9609 5411.88 96.9609 5410.5L94.4609 5410.5ZM2.62763 5410.5C2.62763 5417.86 8.59716 5423.83 15.961 5423.83C23.3248 5423.83 29.2943 5417.86 29.2943 5410.5C29.2943 5403.14 23.3248 5397.17 15.961 5397.17C8.59716 5397.17 2.62763 5403.14 2.62763 5410.5ZM94.461 4993.5L96.961 4993.5L96.961 4993.5L94.461 4993.5ZM1.62767 4993.5C1.62767 5000.86 7.59721 5006.83 14.961 5006.83C22.3248 5006.83 28.2943 5000.86 28.2943 4993.5C28.2943 4986.14 22.3248 4980.17 14.961 4980.17C7.59721 4980.17 1.62767 4986.14 1.62767 4993.5ZM94.3481 4231.5H15.3481V4236.5H94.3481V4231.5ZM94.461 11.5H15.4611V16.5H94.461V11.5ZM91.961 14V696.5H96.961V14H91.961ZM94.461 694H15.4611V699H94.461V694ZM91.961 696.5V1121H96.961V696.5H91.961ZM94.461 1118.5H15.4611V1123.5H94.461V1118.5ZM91.961 1121V1850.5H96.961V1121H91.961ZM94.461 1848H15.4611V1853H94.461V1848ZM91.961 1850.5V2460H96.961V1850.5H91.961ZM94.461 2457.5H15.4611V2462.5H94.461V2457.5ZM91.961 2459.99L90.4658 3131.49L95.4658 3131.51L96.961 2460.01L91.961 2459.99ZM92.9658 3129H13.9658V3134H92.9658V3129ZM95.4658 3131.5L95.461 2783L90.461 2783L90.4658 3131.5L95.4658 3131.5ZM90.461 2783L90.46 3539.5L95.46 3539.5L95.461 2783L90.461 2783ZM90.46 3539.5L91.8481 4234L96.8481 4234L95.46 3539.5L90.46 3539.5ZM92.96 3537H14.9589V3542H92.96V3537ZM94.4609 5408H15.961V5413H94.4609V5408ZM91.8481 4234L91.961 4993.5L96.961 4993.5L96.8481 4234L91.8481 4234ZM91.961 4993.5L91.9609 5410.5L96.9609 5410.5L96.961 4993.5L91.961 4993.5ZM94.461 4991H14.961V4996H94.461V4991Z"
          />
        </svg>
      </div> */}

      {/* =======HEADER,FOOTER & CONTENT======== */}

      {/* Myself Image */}
      <div
        className="lg:hidden md:px-[100px] 375:px-[40px] pt-[200px]"
        data-aos="zoom-in"
        data-aos-delay="2000"
        // data-aos-duration="1000"
      >
        <div className="hidden dark:block">
          <img src={DarkMyself} alt="MySelf in DarkMode" />
        </div>
        <div className="dark:hidden">
          <img src={MySelf} alt="MySelf in LightMode" />
        </div>
      </div>

      {/* ====== Section 1 ======= */}
      <div className="Timeline">
        <div
          id="About"
          className="pr-10 lg:py-0 md:pt-[150px] pt-[100px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none"
        >
          {/* HEADER */}
          <div className="relative headerNumber Flex">
            <span
              className="justify-start lg:items-start xl:text-[150px] lg:text-[125px] text-[90px] text-lightNumber dark:text-darkModeNumber  mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px] md:top-[-80px] top-[-80px]"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              01
            </span>
            <div
              className="Timeline-Dot1"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              {/* Timeline-Dot */}
            </div>
          </div>

          <div
            className="lg:px-0 md:md:px-[25px] px-2 flex flex-col items-base lg:flex-none xl:mb-[435px] lg:mb-[149px] lg:text-right text-justify dark:text-darkModeText"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[42px] lg:text-[35px] md:text-[28px] text-[21px]">
              <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                Lea
              </span>
              rn something about me:
            </p>
            <p className="Content xl:pl-[150px] lg:pl-[80px] xl:text-[18px] lg:text-[15px] text-[13px]">
              HERES A LITTLE INSIGHT OF WHO AM I
            </p>
          </div>

          <div className="grid lg:grid-cols-none md:grid-cols-2 grid-cols-1 md:gap-x-10 lg:bg-transparent dark:lg:bg-transparent bg-bglight dark:bg-bgdark lg:px-0 md:pt-10  md:px-[25px] px-2">
            {/* EDUCATION */}
            <div
              className="relative xl:mb-[250px] lg:mb-[290px] lg:text-right text-justify dark:text-darkModeText"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <div className="Timeline-Dot1">{/* {Timeline-Dot} */}</div>
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]">
                <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                  Edu
                </span>
                cation:
              </p>
              <p className="Content xl:pl-[150px] xl:text-[18px] lg:text-[15px] text-[13px]">
                WHERE INSTRUCTION MET INSPIRATION, SHAPING THE CHAPTERS OF MY
                LIFE
              </p>
            </div>
            {/* CERTIFICATION */}
            <div
              className="relative md:block hidden xl:mb-[311px] lg:text-right text-justify dark:text-darkModeText"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <div className="Timeline-Dot1">{/* {Timeline-Dot} */}</div>
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]">
                <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                  Cer
                </span>
                tification:
              </p>
              <p className="Content lg:mb-0 mb-[25px] xl:pl-[100px] lg:pl-[50px] xl:text-[18px] lg:text-[15px] text-[13px]">
                {" "}
                HERE ARE MY CREDENTIALS THAT DEFINE MY EXCELLENCE THIS YEAR 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className=" grid lg:grid-cols-none md:grid-cols-2 gap-[20px] lg:px-0  md:px-[25px] px-2 mt-5 lg:mt-0">
        {/* MySelf Image LG-XL */}
        <div
          className="hidden lg:block"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <div className="">
            <img
              className="hidden h-auto dark:block w-[auto]"
              src={DarkMyself}
              alt="MySelf in DarkMode"
            />
          </div>
          <div className="">
            <img
              className="block h-auto dark:hidden w-[auto]"
              src={MySelf}
              alt="MySelf in LightMode"
            />
          </div>
        </div>
        {/* Education */}
        <div
          className="flex flex-col gap-[20px] mb-[20px] xl:pr-0 xl:mt-[120px]"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          {divEducation.map((content, index) => (
            <DivComponent
              key={index}
              content={content}
              icon="mdi:education-outline"
            />
          ))}
        </div>
        {/* CERTIFICATION */}
        <div className="xl:mb-[311px] lg:mb-[170px] lg:text-right text-justify dark:text-darkModeText">
          <div
            className="md:hidden"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]">
              <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                Cer
              </span>
              tification:
            </p>
            <p className="Content lg:mb-0 mb-[25px] xl:pl-[100px] lg:pl-[50px] xl:text-[18px] lg:text-[15px] text-[13px]">
              {" "}
              HERE ARE MY CREDENTIALS THAT DEFINE MY EXCELLENCE THIS YEAR 2023
            </p>
          </div>
          <div
            className=" flex flex-col text-start gap-[20px] lg:mt-[160px]"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            {divCertification.map((content, index) => (
              <DivComponent
                key={index}
                content={content}
                icon="ri:award-line"
                spanCon="Certification"
              />
            ))}
          </div>
        </div>
      </div>

      {/* ======Section 2 ======= */}
      <div className="Timeline">
        <div
          id="Skills"
          className=" lg:pr-10 lg:py-0 md:pt-[150px] pt-[100px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none"
        >
          {/* HEADER */}
          <div className="relative headerNumber Flex">
            <span className="justify-start items-start xl:text-[150px] lg:text-[125px] text-[90px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px] md:top-[-80px] top-[-80px]">
              02
            </span>
            <div
              className="Timeline-Dot"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              {/* Timeline-Dot */}
            </div>
          </div>
          <div
            className="lg:mb-[76px] lg:text-right text-justify lg:px-0 md:px-[25px] px-2 dark:text-darkModeText"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[42px] lg:text-[35px] md:text-[28px] text-[21px]">
              <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                Wha
              </span>
              t I do:
            </p>
            <p className="Content xl:pl-[100px] lg:pl-[20px] xl:text-[18px] lg:text-[15px] text-[13px]">
              EXPLORE MY DIVERSE SKILL SET, RANGING FROM TECHNICAL PROFICIENCY
              AND CREATIVE ABILITIES
            </p>
          </div>
          {/* TECH STACKS */}
          <div className="relative xl:mt-[400px] lg:mt-[300px] lg:pt-0 lg:px-0 pt-10 md:px-[25px] px-2 dark:lg:bg-transparent lg:bg-transparent bg-bglight dark:bg-bgdark lg:text-right text-justify dark:text-darkModeText">
            <div
              className="hidden lg:block"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <div
                className="Timeline-Dot"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                {/* {Timeline-Dot} */}
              </div>
              <p className="Heading xl:mb-[30px] lg:mb-[22px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]">
                <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                  Tec
                </span>
                h Stack:
              </p>
              <p className="Content xl:pl-[100px] lg:pl-[20px] xl:text-[18px] lg:text-[15px] text-[13px]">
                HERE ARE THE LANGUAGES AND TOOLS I USED
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="lg:px-0 md:px-[25px] px-2 xl:mt-[150px] lg:mt-[41px]">
        <div className="grid lg:grid-cols-none grid-cols-none md:grid-cols-3 xl:gap-[25px] gap-[20px] mb-[20px] relative overflow-hidden cursor-pointer drop-shadow-md">
          <div
            className="flex gap-2 py-10 bg-bgService1 bg-cover bg-center hover:scale-[1.3] ease-in-out transition-transform rounded-sm justify-center"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <Icon className="text-cyan1 lg:text-[24px]" icon="mdi:web"></Icon>
            <p className=" xl:text-[18px] lg:text-[15px] text-[13px] Hero hover:text-white">
              UI/UX
            </p>
          </div>
          <div
            className="flex gap-2 py-10 bg-bgService2 bg-cover bg-center hover:scale-[1.2] ease-in-out transition-transform rounded-sm justify-center"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <Icon
              className="text-cyan1 lg:text-[24px]"
              icon="simple-icons:unocss"
            ></Icon>
            <p className=" xl:text-[18px] lg:text-[13px] text-[13px] Hero hover:text-white">
              MOCKUP / FRAMEWORK DESIGN
            </p>
          </div>
          <div
            className="flex gap-2 py-10 bg-bgService3 bg-cover bg-center hover:scale-[1.2] ease-in-out transition-transform rounded-sm justify-center"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <Icon
              className="text-cyan1 lg:text-[24px]"
              icon="jam:screen"
            ></Icon>
            <p className=" xl:text-[18px] lg:text-[15px] text-[13px] Hero hover:text-white">
              WEB DEVELOPMENT
            </p>
          </div>
        </div>
        <div className="pt-10 text-justify lg:pt-0 lg:px-0 dark:lg:bg-transparent lg:bg-transparent bg-bglight dark:bg-bgdark lg:text-right dark:text-darkModeText">
          <div className="lg:hidden">
            <p className="Heading xl:mb-[30px] lg:mb-[22px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]">
              <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                Tec
              </span>
              h Stack:
            </p>
            <p className="Content xl:pl-[100px] lg:pl-[20px] xl:text-[18px] lg:text-[15px] text-[13px]">
              HERE ARE THE LANGUAGES AND TOOLS I USED
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:grid-rows-4 gap-[20px] rounded-sm text-justify lg:px-0 p-[20px] xl:mt-[126px] lg:mt-[60px]">
            <div
              className="flex gap-3 items-center pl-5 bn5 drop-shadow-md bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="ri:html5-line"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                HTML
              </p>
              <span className="absolute top-0 right-0 w-6 h-6 rounded-full animate-ping bg-cyan1"></span>
            </div>
            <div
              className="flex gap-3 items-center pl-5 bn5 drop-shadow-md bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="uim:css3"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                CSS
              </p>
            </div>
            <div
              className="flex gap-3 items-center pl-5 bn5 drop-shadow-md bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="tabler:file-type-js"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                JAVASCRIPT
              </p>
            </div>
            <div
              className="flex gap-3 items-center pl-5 bn5 drop-shadow-md bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="tabler:brand-nodejs"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                NODE JS
              </p>
            </div>
            <div
              className="flex gap-3 items-center pl-5 bn5 drop-shadow-md bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="devicon:reactbootstrap"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                REACT BOOTSTRAP
              </p>
            </div>
            <div
              className="flex gap-3 items-center pl-5 bn5 drop-shadow-md bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="file-icons:tailwind"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                TAILWIND
              </p>
            </div>
            <div
              className="flex gap-3 items-center pl-5 bn5 drop-shadow-md bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="solar:figma-bold-duotone"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                FIGMA
              </p>
            </div>
            <div
              className="flex gap-3 items-center pl-5 bn5 drop-shadow-md bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]"
              data-aos="zoom-in-up"
              data-aos-delay="1000"
            >
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="ri:reactjs-line"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                REACT JS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ======Section 3 ======= */}
      <div className="Timeline">
        <div
          id="Projects"
          className="lg:pr-10 md:pt-[150px] lg:py-0 lg:mt-[100px] lg:pt-0 pt-[100px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none"
        >
          {/* HEADER */}
          <div className="relative headerNumber Flex">
            <span className="justify-start items-start xl:text-[150px] lg:text-[125px] text-[90px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px] md:top-[-80px] top-[-80px]">
              03
            </span>
            <div
              className="Timeline-Dot"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              {/* Timeline-Dot */}
            </div>
          </div>
          <div
            className="xl:mb-[158px] lg:mb-[96px] lg:text-right text-justify dark:text-darkModeText lg:px-0 md:px-[25px] px-2"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[42px] lg:text-[35px] md:text-[28px] text-[21px]">
              <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                My
              </span>{" "}
              recent Projects:
            </p>
            <p className="Content xl:pl-[0px] lg:pl-[0px] xl:text-[18px] lg:text-[15px] text-[13px] uppercase">
              Each project reflects my commitment to innovation and attention to
              detail.
            </p>
          </div>
          <div className="hidden lg:block lg:bg-transparent dark:lg:bg-transparent bg-bglight dark:bg-bgdark lg:pt-0 lg:px-0 pt-10  md:px-[25px] px-2">
            {/* Project 1 */}
            <div
              className="relative text-justify lg:text-right dark:text-darkModeText"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <div
                className="Timeline-Dot1"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                {/* {Timeline-Dot} */}
              </div>
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]">
                <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                  Org
                </span>
                anizeMe
              </p>
              <p className="Content flex gap-1 xl:pl-[150px] lg:pl-[80px] xl:text-[18px] lg:text-[15px] text-[13px]">
                <Icon
                  className="text-cyan1 xl:text-[30px] md:text-[24px] text-[20px]"
                  icon="mingcute:web-fill"
                ></Icon>
                TODO-LIST-APP
              </p>
            </div>

            {/* Project 2*/}
            <div
              className="relative xl:mt-[580px] lg:mt-[450px] lg:block hidden lg:text-right text-justify dark:text-darkModeText"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <div
                className="Timeline-Dot1"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                {/* {Timeline-Dot} */}
              </div>
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]">
                <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                  War
                </span>
                drobe Manila
              </p>
              <p className="Content flex gap-1 xl:pl-[150px] lg:pl-[80px] xl:text-[18px] lg:text-[15px] text-[13px]">
                <Icon
                  className="text-cyan1 xl:text-[30px] md:text-[24px] text-[20px]"
                  icon="mingcute:web-fill"
                ></Icon>
                E - COMMERSE WEBSITE
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="lg:px-0 md:px-[25px] px-2 lg:mt-[100px]">
        {/* Banner Image */}
        <div
          className="lg:block hidden w-[100%] h-[150px] xl:h-[200px] lg:h-[150px] overflow-hidden mb-10 "
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <img
            className=" opacity-70"
            src={Banner}
            alt="Project Banner Image"
          />
        </div>
        {/* Header */}
        <div
          className="lg:hidden lg:text-right text-justify dark:text-darkModeText mt-[80px]"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px text-[20px]">
            <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
              Org
            </span>
            anizeMe
          </p>
          <p className="Content flex gap-1 xl:pl-[150px] lg:pl-[80px] xl:text-[18px] lg:text-[15px] text-[13px]">
            <Icon
              className="text-cyan1 xl:text-[30px] md:text-[24px] text-[20px]"
              icon="mingcute:web-fill"
            ></Icon>
            To-do-list App
          </p>
        </div>

        <div
          className=" text-start gap-[20px] drop-shadow-md xl:mt-[210px] lg:mt-[160px]"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          {divProject1.map((content, index) => (
            <DivComponent key={index} content={content} />
          ))}
          <img className="mt-5 rounded-sm" src={OrganizeMe} alt="OrganizeMe" />
        </div>

        {/* Header */}
        <div
          className="lg:hidden lg:text-right text-justify dark:text-darkModeText mt-[80px]"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px text-[20px]">
            <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
              War
            </span>
            drobe Manila
          </p>
          <p className="Content flex gap-1 xl:pl-[150px] lg:pl-[80px] xl:text-[18px] lg:text-[15px] text-[13px]">
            <Icon
              className="text-cyan1 xl:text-[30px] md:text-[24px] text-[20px]"
              icon="mingcute:web-fill"
            ></Icon>
            E - COMMERSE WEBSITE
          </p>
        </div>
        <div
          className=" text-start gap-[20px] drop-shadow-md xl:mt-[210px] lg:mt-[160px]"
          data-aos="fade-right"
          data-aos-delay="1000"
        >
          {divProject2.map((content, index) => (
            <DivComponent key={index} content={content} />
          ))}
          <img
            href=""
            className="mt-5 rounded-sm"
            src={WardrobeManila}
            alt="Wardrobe Manila"
          />
        </div>
      </div>

      {/* ======Section 4 ======= */}
      <div className="Timeline">
        <div
          id="Contact"
          className="xl:mt-[150px] md:pt-[150px] lg:mt-[100px] flex-wrap lg:pr-10 lg:py-0  pt-[100px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none"
        >
          {/* FOOTER */}
          <div className="relative headerNumber Flex">
            <span className="justify-start items-start xl:text-[150px] lg:text-[125px] text-[90px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px] md:top-[-80px] top-[-80px]">
              04
            </span>
            <div
              className="Timeline-Dot"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              {/* Timeline-Dot */}
            </div>
          </div>
          <div
            className="md:bg-transparent dark:md:bg-transparent order-1 lg:order-none xl:mb-[30px] lg:mb-[0px] mb-[20px] lg:text-right text-justify dark:text-darkModeText lg:px-0 md:px-[25px] px-2"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:text-[42px] lg:text-[35px] md:text-[28px] text-[21px]">
              <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                Get
              </span>{" "}
              in Touch:
            </p>
            <p className="Content xl:mb-[30px] lg:mb-[25px] lg:pl-[80px] xl:text-[18px] lg:text-[15px] text-[13px]">
              CONTACT INFORMATION {/*Lorem ipsum dolor sit amet. */}
            </p>
          </div>
          {/* FOLLOW UPS */}
          <div className="md:bg-transparent dark:md:bg-transparent bg-bglight dark:bg-bgdark order-2 lg:mb-[100px] lg:text-right text-justify dark:text-darkModeText  lg:px-0 md:px-[25px] px-2 md:ml-20 lg:ml-0">
            <div
              className="Hero flex flex-col gap-4 text-start xl:pl-[150px] lg:pl-[80px] xl:text-[17px] lg:text-[15px] text-[13px] mt-4"
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              <span className="flex gap-2 ">
                <Icon
                  className="text-cyan1 xl:text-[30px] md:text-[24px] text-[20px]"
                  icon="mdi:paper-airplane"
                ></Icon>
                jpdec003@gmail.com
              </span>
              <span className="flex gap-2 ">
                <Icon
                  className=" text-cyan1 xl:text-[30px] md:text-[24px] text-[20px]"
                  icon="bi:phone"
                ></Icon>
                +639262460292 - Globe/Tm
              </span>
              <span className="flex gap-2 ">
                <Icon
                  className="text-cyan1 xl:text-[38px] md:text-[32px] text-[20px]"
                  icon="mdi:address-marker-outline"
                ></Icon>
                Polomolok South Cotabato, Philippines
              </span>
            </div>
            <div className="relative hidden lg:block">
              <div
                className="Timeline-Dot1"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                {/* {Timeline-Dot} */}
              </div>
              <p
                className="Heading pt-10  xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[30px] lg:text-[20px] text-[20px]"
                data-aos="fade-left"
                data-aos-delay="1000"
              >
                <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                  Fol
                </span>
                low me on:
              </p>
              <div
                className="Hero drop-shadow-md flex md:justify-end justify-center md:gap-5 gap-2 xl:text-[40px] md:text-[30px] text-[20px]"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <a href="https://www.facebook.com/jpdeclarodev/">
                  <Icon
                    className=" dark:text-cyan1 hover:text-cyan1 dark:hover:text-slate-100"
                    icon="mdi:facebook"
                  ></Icon>
                </a>
                <a href="https://codepen.io/John-Patrick-DeClaro">
                  <Icon
                    className=" dark:text-cyan1 hover:text-cyan1 dark:hover:text-slate-100"
                    icon="fa-brands:codepen"
                  ></Icon>
                </a>
                <a href="">
                  <Icon
                    className=" dark:text-cyan1 hover:text-cyan1 dark:hover:text-slate-100"
                    icon="basil:instagram-solid"
                  ></Icon>  
                </a>
                <a href="https://www.linkedin.com/in/jpdeclaro/">
                  <Icon
                    className=" dark:text-cyan1 hover:text-cyan1 dark:hover:text-slate-100"
                    icon="grommet-icons:linkedin-option"
                  ></Icon>
                </a>
                <a href="https://github.com/JpdeClaro">
                  <Icon
                    className=" dark:text-cyan1 hover:text-cyan1 dark:hover:text-slate-100"
                    icon="mdi:github"
                  ></Icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div id="ContactForm" className="lg:mt-[150px] xl:mt-[200px] mt-7 lg:px-0 md:px-[25px] px-2 lg:mb-0 mb-10">
        <ContactForm />

        {/* FOLLOW UPS */}
        <div
          className="block lg:hidden"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <p className="Heading pt-10  xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[30px] lg:text-[20px] text-[20px]">
            <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
              Fol
            </span>
            low me on:
          </p>
          <div className="Hero drop-shadow-md flex justify-center md:gap-5 gap-2 xl:text-[40px] md:text-[30px] text-[20px]">
            <a href="https://www.facebook.com/jpdeclarodev/">
              <Icon
                className="dark:text-cyan1 hover:text-cyan1 dark:hover:text-slate-100"
                icon="mdi:facebook"
              ></Icon>
            </a>
            <a href="https://codepen.io/John-Patrick-DeClaro">
              <Icon
                className="dark:text-cyan1 hover:text-cyan1 dark:hover:text-slate-100"
                icon="fa-brands:codepen"
              ></Icon>
            </a>
            <a href="">
              <Icon
                className="dark:text-cyan1 hover:text-cyan1 dark:hover:text-slate-100"
                icon="basil:instagram-solid"
              ></Icon>
            </a>
            <a href="https://www.linkedin.com/in/jpdeclaro/">
              <Icon
                className="dark:text-cyan1"
                icon="grommet-icons:linkedin-option"
              ></Icon>
            </a>
            <a href="https://github.com/JpdeClaro">
              <Icon
                className="dark:text-cyan1 hover:text-cyan1 dark:hover:text-slate-100"
                icon="mdi:github"
              ></Icon>
            </a>
          </div>
        </div>
      </div>
      <span className="px-2 mt-5 mb-10 text-sm text-center content dark:text-slate-100">
        ©2024 JpDeClaroDevPorfolio
      </span>
    </div>
  );
};

export default Header;
