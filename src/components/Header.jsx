import { animateScroll as scroll } from "react-scroll";
import { Icon } from "@iconify/react";
import Me from "../assets/JpdeClaro.png";
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
    <div className="Header lg:mt-[300px] relative grid lg:grid-cols-2 grid-cols-none grid-flow-row xl:px-[86px] lg:px-[60px] lg:gap-[150px] lg:justify-between">
      {/* =====Scroll to Top btn===== */}
      <button
        className="fixed bottom-10 right-10 hidden md:block text-[30px] text-lightTextContent dark:text-darkModeText "
        onClick={scrollTo}
      >
        <Icon
          className=" hover:text-cyan1 z-[99]"
          icon="iconoir:fast-arrow-top"
        ></Icon>
      </button>
      {/* ========Vertical bullet line ========= */}
      <div className="bg-none absolute xl:left-[550px] lg:left-[40%] text-[35px] hidden lg:block">
        <svg
          className="xl:pt-[25px] lg:pt-[22px] fill-[#CBD5E1] dark:fill-[#334155] lg:block hidden xl:w-[96px] xl:h-[4642px] lg:w-[70px] z-[-1]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96 4642"
          fill="none"><path d="M93.5 14H96C96 12.6193 94.8807 11.5 93.5 11.5V14ZM93.5 3427H96L96 3426.99L93.5 3427ZM1.16667 3427C1.16667 3434.36 7.1362 3440.33 14.5 3440.33C21.8638 3440.33 27.8333 3434.36 27.8333 3427C27.8333 3419.64 21.8638 3413.67 14.5 3413.67C7.1362 3413.67 1.16667 3419.64 1.16667 3427ZM1.16667 14C1.16667 21.3638 7.1362 27.3333 14.5 27.3333C21.8638 27.3333 27.8333 21.3638 27.8333 14C27.8333 6.6362 21.8638 0.666667 14.5 0.666667C7.1362 0.666667 1.16667 6.6362 1.16667 14ZM1.16667 469C1.16667 476.364 7.1362 482.333 14.5 482.333C21.8638 482.333 27.8333 476.364 27.8333 469C27.8333 461.636 21.8638 455.667 14.5 455.667C7.1362 455.667 1.16667 461.636 1.16667 469ZM1.16667 1029C1.16667 1036.36 7.1362 1042.33 14.5 1042.33C21.8638 1042.33 27.8333 1036.36 27.8333 1029C27.8333 1021.64 21.8638 1015.67 14.5 1015.67C7.1362 1015.67 1.16667 1021.64 1.16667 1029ZM1.16667 1675C1.16667 1682.36 7.1362 1688.33 14.5 1688.33C21.8638 1688.33 27.8333 1682.36 27.8333 1675C27.8333 1667.64 21.8638 1661.67 14.5 1661.67C7.1362 1661.67 1.16667 1667.64 1.16667 1675ZM1.16667 2017C1.16667 2024.36 7.1362 2030.33 14.5 2030.33C21.8638 2030.33 27.8333 2024.36 27.8333 2017C27.8333 2009.64 21.8638 2003.67 14.5 2003.67C7.1362 2003.67 1.16667 2009.64 1.16667 2017ZM93.5 2447L96 2447.01V2447H93.5ZM1.16667 2447C1.16667 2454.36 7.1362 2460.33 14.5 2460.33C21.8638 2460.33 27.8333 2454.36 27.8333 2447C27.8333 2439.64 21.8638 2433.67 14.5 2433.67C7.1362 2433.67 1.16667 2439.64 1.16667 2447ZM92 2783L89.5 2782.99C89.5 2782.99 89.5 2783 89.5 2783.01L92 2783ZM92.0012 2783.5L94.5012 2783.49L92.0012 2783.5ZM0.666667 2783.5C0.666667 2790.86 6.6362 2796.83 14 2796.83C21.3638 2796.83 27.3333 2790.86 27.3333 2783.5C27.3333 2776.14 21.3638 2770.17 14 2770.17C6.6362 2770.17 0.666667 2776.14 0.666667 2783.5ZM93.5 4628V4630.5C94.8807 4630.5 96 4629.38 96 4628H93.5ZM1.66667 4628C1.66667 4635.36 7.6362 4641.33 15 4641.33C22.3638 4641.33 28.3333 4635.36 28.3333 4628C28.3333 4620.64 22.3638 4614.67 15 4614.67C7.6362 4614.67 1.66667 4620.64 1.66667 4628ZM0.666667 4211.5C0.666667 4218.86 6.6362 4224.83 14 4224.83C21.3638 4224.83 27.3333 4218.86 27.3333 4211.5C27.3333 4204.14 21.3638 4198.17 14 4198.17C6.6362 4198.17 0.666667 4204.14 0.666667 4211.5ZM93.5 3424.5H14.5V3429.5H93.5V3424.5ZM93.5 11.5H14.5V16.5H93.5V11.5ZM91 14V469H96V14H91ZM93.5 466.5H14.5V471.5H93.5V466.5ZM91 469V1029H96V469H91ZM93.5 1026.5H14.5V1031.5H93.5V1026.5ZM91 1029V1675H96V1029H91ZM93.5 1672.5H14.5V1677.5H93.5V1672.5ZM91 1675V2017H96V1675H91ZM93.5 2014.5H14.5V2019.5H93.5V2014.5ZM91 2017V2447H96V2017H91ZM93.5 2444.5H14.5V2449.5H93.5V2444.5ZM91 2446.99L89.5 2782.99L94.5 2783.01L96 2447.01L91 2446.99ZM89.5 2783.01L89.5012 2783.51L94.5012 2783.49L94.5 2782.99L89.5 2783.01ZM89.5012 2783.51L91 3427.01L96 3426.99L94.5012 2783.49L89.5012 2783.51ZM92.0012 2781H14V2786H92.0012V2781ZM93.5 4625.5H15V4630.5H93.5V4625.5ZM91 3427V4211.5H96V3427H91ZM91 4211.5V4628H96V4211.5H91ZM93.5 4209H14V4214H93.5V4209Z" />
        </svg>
      </div>
      {/* =======HEADER,FOOTER & CONTENT======== */}

      {/* Myself Image */}
      <div className="lg:hidden md:px-[100px] 375:px-[40px] md:pt-[200px]  pt-[100px] pb-[50px]">
        <div className="absolute md:top-[100px] md:left-20 375:top-[1px] 375:left-5 top-[3px] z-[98] ">
          <img
            className="md:w-[650px] md:h-[500px]  w-[450px] h-[300px] 375:h-[350px] rounded-b-full"
            src={Me}
            alt="my Picture half body"
          />
        </div>
        <div className="flex items-center justify-center">
          <svg
            className=" fill-[#0F172A] stroke-[#64748B] dark:fill-[#F8FAFC] dark:stroke-[#334155] stroke-[18px] md:w-[498px] md:h-[456px] w-[270px] h-[270px] 375:w-[300px] 375:h-[300px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 498 456"
            fill="none"
          >
            <path d="M384.666 45.1914C397.195 53.9641 408.411 63.9131 418.268 74.7848C479.601 142.427 488.364 245.785 433.781 323.737C417.688 346.721 397.636 365.285 375.192 379.153C321.513 412.322 254.151 418.633 194.537 394.306C180.95 388.761 167.765 381.625 155.236 372.852C87.7384 325.59 58.3561 244.185 74.0852 168.316C79.4412 142.482 90.0274 117.29 106.121 94.3066C169.476 3.82554 294.185 -18.1641 384.666 45.1914Z" />
            <path
              d="M433.781 323.737L488.254 361.879M433.781 323.737C417.688 346.721 397.636 365.285 375.192 379.153M433.781 323.737C488.364 245.785 479.601 142.427 418.268 74.7848M106.121 94.3066C169.476 3.82554 294.185 -18.1641 384.666 45.1914C397.195 53.9641 408.411 63.9131 418.268 74.7848M106.121 94.3066L54.5134 58.1708M106.121 94.3066C90.0274 117.29 79.4412 142.482 74.0852 168.316M442.942 426.592L401.575 397.627L375.192 379.153M461.268 13.3747L428.287 60.4756L418.268 74.7848M9.20095 122.884L57.1211 156.438L74.0852 168.316M157.889 446.645C157.889 446.645 175.559 421.409 191.687 398.376L194.537 394.306M74.0852 168.316C58.3562 244.185 87.7384 325.59 155.236 372.852C167.765 381.625 180.95 388.761 194.537 394.306M375.192 379.153C321.513 412.322 254.151 418.633 194.537 394.306"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* ======Section 1 ======= */}
      <div
        id="About"
        className="xl:mr-[110px] lg:mr-[60px] lg:px-0 lg:py-0 md:pt-[150px] pt-[100px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none"
      >
        {/* HEADER */}
        <div className="relative headerNumber Flex">
          <span className="justify-start lg:items-start xl:text-[150px] lg:text-[125px] text-[90px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px] md:top-[-80px] top-[-80px]">
            01
          </span>
        </div>
        <div className="lg:px-0 md:md:px-[25px] px-2 flex flex-col items-base lg:flex-none xl:mb-[235px] lg:mb-[149px] lg:text-right text-justify dark:text-darkModeText">
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
        <div className="grid lg:grid-cols-none md:grid-cols-2 grid-cols-1 md:gap-x-10 lg:bg-transparent dark:lg:bg-transparent bg-bglight dark:bg-bgdark lg:pt-0 lg:px-0 pt-10  md:px-[25px] px-2">
          {/* EDUCATION */}
          <div className="xl:mb-[385px] lg:mb-[262px] lg:text-right text-justify dark:text-darkModeText">
            <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]">
              <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                Edu
              </span>
              cation:
            </p>
            <p className="Content xl:pl-[150px] xl:text-[18px] lg:text-[15px] text-[13px]">
              WHERE INSTRUCTION MET INSPIRATION, SHAPING THE CHAPTERS OF MY LIFE
            </p>
          </div>
          {/* CERTIFICATION */}
          <div className="md:block hidden xl:mb-[311px] lg:mb-[170px] lg:text-right text-justify dark:text-darkModeText">
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
      {/* CONTENT */}
      <div className=" grid lg:grid-cols-none md:grid-cols-2 gap-[20px] pt-10 lg:px-0  md:px-[25px] px-2 ">
        {/* MySelf Image */}
        <div className="hidden lg:block">
          <div className="absolute top-[-110px] xl:right-0 right-[-100px] z-[98] ">
            <img
              className="md:w-[750px] md:h-[550px] 375:h-[350px] rounded-b-full"
              src={Me}
              alt="my Picture half body"
            />
          </div>
          <div className="xl:static lg:relative left-[-100px]">
            <svg
              className="drop-shadow-xl fill-[#0F172A] stroke-[#64748B] dark:fill-[#F8FAFC] dark:stroke-[#334155] stroke-[18px] md:w-[498px] md:h-[456px] w-[300px] h-[300px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 498 456"
              fill="none"
            >
              <path d="M384.666 45.1914C397.195 53.9641 408.411 63.9131 418.268 74.7848C479.601 142.427 488.364 245.785 433.781 323.737C417.688 346.721 397.636 365.285 375.192 379.153C321.513 412.322 254.151 418.633 194.537 394.306C180.95 388.761 167.765 381.625 155.236 372.852C87.7384 325.59 58.3561 244.185 74.0852 168.316C79.4412 142.482 90.0274 117.29 106.121 94.3066C169.476 3.82554 294.185 -18.1641 384.666 45.1914Z" />
              <path
                d="M433.781 323.737L488.254 361.879M433.781 323.737C417.688 346.721 397.636 365.285 375.192 379.153M433.781 323.737C488.364 245.785 479.601 142.427 418.268 74.7848M106.121 94.3066C169.476 3.82554 294.185 -18.1641 384.666 45.1914C397.195 53.9641 408.411 63.9131 418.268 74.7848M106.121 94.3066L54.5134 58.1708M106.121 94.3066C90.0274 117.29 79.4412 142.482 74.0852 168.316M442.942 426.592L401.575 397.627L375.192 379.153M461.268 13.3747L428.287 60.4756L418.268 74.7848M9.20095 122.884L57.1211 156.438L74.0852 168.316M157.889 446.645C157.889 446.645 175.559 421.409 191.687 398.376L194.537 394.306M74.0852 168.316C58.3562 244.185 87.7384 325.59 155.236 372.852C167.765 381.625 180.95 388.761 194.537 394.306M375.192 379.153C321.513 412.322 254.151 418.633 194.537 394.306"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] mb-[20px] xl:pr-0 lg:pr-[120px]">
          {divEducation.map((content, index) => (
            <DivComponent
              key={index}
              content={content}
              icon="mdi:education-outline"
            />
          ))}
        </div>
        {/* CERTIFICATION */}
        <div className=" xl:mb-[311px] lg:mb-[170px] xl:pr-0 lg:pr-[120px] lg:text-right text-justify dark:text-darkModeText">
          <div className="md:hidden">
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
          <div className=" flex flex-col text-start gap-[20px]">
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
      <div
        id="Skills"
        className="xl:mr-[110px] lg:mr-[60px] lg:px-0 lg:py-0 md:pt-[150px] pt-[100px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none"
      >
        {/* HEADER */}
        <div className="relative headerNumber Flex">
          <span className="justify-start items-start xl:text-[150px] lg:text-[125px] text-[90px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px] md:top-[-80px] top-[-80px]">
            02
          </span>
        </div>
        <div className="xl:mb-[132px] lg:mb-[76px] lg:text-right text-justify lg:px-0 md:px-[25px] px-2 dark:text-darkModeText">
          <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[42px] lg:text-[35px] md:text-[28px] text-[21px]">
            <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
              Wha
            </span>
            t I do:
          </p>
          <p className="Content xl:pl-[100px] lg:pl-[20px] xl:text-[18px] lg:text-[15px] text-[13px]">
            EXPLORE MY DIVERSE SKILL SET, RANGING FROM TECHNICAL PROFICIENCY AND
            CREATIVE ABILITIES
          </p>
        </div>
        {/* TECH STACKS */}
        <div className="lg:pt-0 lg:px-0 pt-10 md:px-[25px] px-2 dark:lg:bg-transparent lg:bg-transparent bg-bglight dark:bg-bgdark xl:mb-[126px] lg:mb-[41px] lg:text-right text-justify dark:text-darkModeText">
          <div className="hidden lg:block">
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
      {/* CONTENT */}
      <div className="lg:px-0 md:px-[25px] px-2">
        <div className="grid lg:grid-cols-none grid-cols-none md:grid-cols-3 xl:gap-[25px] gap-[20px] mb-[20px] relative overflow-hidden cursor-pointer drop-shadow-md">
          <div className="flex gap-2 py-10 bg-bgService1 bg-cover bg-center hover:scale-[1.2] ease-in-out transition-transform rounded-sm justify-center">
            <Icon className="text-cyan1 lg:text-[24px]" icon="mdi:web"></Icon>
            <p className=" xl:text-[18px] lg:text-[15px] text-[13px] Hero hover:text-white">
              UI/UX
            </p>
          </div>
          <div className="flex gap-2 py-10 bg-bgService2 bg-cover bg-center hover:scale-[1.2] ease-in-out transition-transform rounded-sm justify-center">
            <Icon
              className="text-cyan1 lg:text-[24px]"
              icon="simple-icons:unocss"
            ></Icon>
            <p className=" xl:text-[18px] lg:text-[13px] text-[13px] Hero hover:text-white">
              MOCKUP / FRAMEWORK DESIGN
            </p>
          </div>
          <div className="flex gap-2 py-10 bg-bgService3 bg-cover bg-center hover:scale-[1.2] ease-in-out transition-transform rounded-sm justify-center">
            <Icon
              className="text-cyan1 lg:text-[24px]"
              icon="jam:screen"
            ></Icon>
            <p className=" xl:text-[18px] lg:text-[15px] text-[13px] Hero hover:text-white">
              WEB DEVELOPMENT
            </p>
          </div>
        </div>
        <div className="lg:pt-0 lg:px-0 pt-10 dark:lg:bg-transparent lg:bg-transparent bg-bglight dark:bg-bgdark xl:mb-[126px] lg:mb-[41px] lg:text-right text-justify dark:text-darkModeText">
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
          <div className="grid md:grid-cols-2 md:grid-rows-4 gap-[20px] text-justify lg:px-0 p-[20px]">
            <div className="flex gap-3 items-center pl-5 bn5 drop-shadow-sm bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]">
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="ri:html5-line"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                HTML
              </p>
            </div>
            <div className="flex gap-3 items-center pl-5 bn5 drop-shadow-sm bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]">
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="uim:css3"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                CSS
              </p>
            </div>
            <div className="flex gap-3 items-center pl-5 bn5 drop-shadow-sm bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]">
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="tabler:file-type-js"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                JAVASCRIPT
              </p>
            </div>
            <div className="flex gap-3 items-center pl-5 bn5 drop-shadow-sm bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]">
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="tabler:brand-nodejs"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                NODE JS
              </p>
            </div>
            <div className="flex gap-3 items-center pl-5 bn5 drop-shadow-sm bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]">
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="devicon:reactbootstrap"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                REACT BOOTSTRAP
              </p>
            </div>
            <div className="flex gap-3 items-center pl-5 bn5 drop-shadow-sm bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]">
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="file-icons:tailwind"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                TAILWIND
              </p>
            </div>
            <div className="flex gap-3 items-center pl-5 bn5 drop-shadow-sm bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]">
              <Icon
                className="text-cyan1 text-[24px]   "
                icon="solar:figma-bold-duotone"
              ></Icon>
              <p className="Content xl:text-[18px] lg:text-[15px] text-[13px]">
                FIGMA
              </p>
            </div>
            <div className="flex gap-3 items-center pl-5 bn5 drop-shadow-sm bg-slate-100 dark:bg-slate-800 p-[20px] lg:p-[10px] xl:p-[20px]">
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
      <div
        id="Projects"
        className="xl:mr-[110px] lg:mr-[60px] lg:px-0 lg:py-0  pt-[100px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none"
      >
        {/* HEADER */}
        <div className="relative headerNumber Flex">
          <span className="justify-start items-start xl:text-[150px] lg:text-[125px] text-[90px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px] md:top-[-80px] top-[-80px]">
            03
          </span>
        </div>
        <div className="xl:mb-[158px] lg:mb-[96px] lg:text-right text-justify dark:text-darkModeText lg:px-0 md:px-[25px] px-2">
          <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[42px] lg:text-[35px] md:text-[28px] text-[21px]">
            <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
              My
            </span>{" "}
            Projects:
          </p>
          <p className="Content xl:pl-[0px] lg:pl-[0px] xl:text-[18px] lg:text-[15px] text-[13px] uppercase">
            Each project reflects my commitment to innovation and attention to
            detail.
          </p>
        </div>
        <div className="lg:bg-transparent dark:lg:bg-transparent bg-bglight dark:bg-bgdark lg:pt-0 lg:px-0 pt-10  md:px-[25px] px-2">
          {/* Project 1 */}
          <div className="xl:mb-[528px] lg:mb-[380px] lg:text-right text-justify dark:text-darkModeText">
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
              E - COMMERSE WEBSITE
            </p>
          </div>

          {/* Project 2*/}
          <div className="lg:block hidden xl:mb-[506px] lg:mb-[325px] lg:text-right text-justify dark:text-darkModeText">
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
        </div>
      </div>
      {/* CONTENT */}
      <div className="lg:px-0 md:px-[25px] px-2">
        {/* Banner Image */}
        <div className="lg:block hidden xl:w-[560px] xl:h-[200px] overflow-hidden ">
          <img
            className=" opacity-70"
            src={Banner}
            alt="Project Banner Image"
          />
        </div>
        {/* Header */}
        <div className="lg:hidden xl:mb-[506px] lg:mb-[100px] lg:text-right text-justify dark:text-darkModeText">
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

        <div className=" text-start gap-[20px]">
          {divProject1.map((content, index) => (
            <DivComponent key={index} content={content} />
          ))}
          <div>IMAGE HERE</div>
        </div>
        <div className=" text-start gap-[20px]">
          {divProject2.map((content, index) => (
            <DivComponent key={index} content={content} />
          ))}
          <div>IMAGE HERE</div>
        </div>
      </div>

      {/* ======Section 4 ======= */}
      <div
        id="Contact"
        className="lg:flex flex flex-wrap xl:mr-[110px] lg:mr-[60px] lg:px-0 lg:py-0  pt-[100px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none"
      >
        {/* FOOTER */}
        <div className="relative headerNumber Flex">
          <span className="justify-start items-start xl:text-[150px] lg:text-[125px] text-[90px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px] md:top-[-80px] top-[-80px]">
            04
          </span>
        </div>
        <div className="md:bg-transparent dark:md:bg-transparent bg-bglight dark:bg-bgdark order-1 lg:order-none xl:mb-[30px] lg:mb-[0px] mb-[20px] lg:text-right text-justify dark:text-darkModeText lg:px-0 md:px-[25px] px-2">
          <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:text-[42px] lg:text-[35px] md:text-[28px] text-[21px]">
            <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
              Get
            </span>{" "}
            in Touch:
          </p>
          <p className="Content xl:mb-[30px] lg:mb-[25px] lg:pl-[80px] xl:text-[18px] lg:text-[15px] text-[13px]">
            CONTACT INFORMATION Lorem ipsum dolor sit amet.
          </p>
        </div>
        {/* FOLLOW UPS */}
        <div className="md:bg-transparent dark:md:bg-transparent bg-bglight dark:bg-bgdark order-2 lg:mb-[100px] lg:text-right text-justify dark:text-darkModeText  lg:px-0 md:px-[25px] px-2 md:ml-20 lg:ml-0">
          <div className="Hero flex flex-col gap-4 text-start xl:pl-[150px] lg:pl-[80px] xl:text-[17px] lg:text-[15px] text-[13px]">
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
          <div className="hidden lg:block">
            <p className="Heading pt-10  xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[30px] lg:text-[20px] text-[20px]">
              <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                Fol
              </span>
              low me on:
            </p>
            <div className="Hero drop-shadow-md flex md:justify-end justify-center md:gap-5 gap-2 xl:text-[40px] md:text-[30px] text-[20px]">
              <a href="">
                <Icon className="dark:text-cyan1" icon="mdi:facebook"></Icon>
              </a>
              <a href="">
                <Icon className="dark:text-cyan1" icon="ri:messenger-fill"></Icon>
              </a>
              <a href="">
                <Icon
                  className="dark:text-cyan1"
                  icon="basil:instagram-solid"
                ></Icon>
              </a>
              <a href="">
                <Icon
                  className="dark:text-cyan1"
                  icon="grommet-icons:linkedin-option"
                ></Icon>
              </a>
              <a href="">
                <Icon className="dark:text-cyan1" icon="mdi:github"></Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="lg:mt-5 mt-7 lg:px-0 md:px-[25px] px-2 lg:mb-0 mb-10">
        <form className="grid grid-cols-1 gap-3 rounded-sm md:grid-cols-2 lg:gap-6 lg:grid-cols-1 md:grid-rows2 dark:text-slate-200" action="">
              <input className="pl-6 focus:ring-cyan1 p-2 bg-bgFormColor2 dark:bg-bgFormColor1 focus:outline-none focus:ring-[3px] rounded-sm " type="text" name="" id=""  placeholder="Name"/>
              <input className='pl-6 focus:ring-cyan1 p-2 bg-bgFormColor2 dark:bg-bgFormColor1 focus:outline-none focus:ring-[3px] rounded-sm' type="email" name="" id="" placeholder="Email" />
              <textarea className='pl-6 pt-2 bg-bgFormColor2 dark:bg-bgFormColor1 focus:outline-none focus:ring-[3px] rounded-sm focus:ring-cyan1 lg:col-auto md:col-span-2' name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          
            <div className="relative flex justify-end gap-5 btn">
            <button className="transition-[.3s] drop-shadow-sm active:scale-[.95] hover:bg-slate-400 text-lightModeContrast dark:text-darkModeText rounded-full border-[3px] w-[100px] h-9 lg:w-[120px] lg:h-10 lg:border-[4px] lg:text-[19px]  md:w-[135px] md:h-10 md:text-[17px] border-cyan2 dark:border-cyan1">
              <a href="#">Resume</a>
            </button>
            <button type="submit" className="transition-[.3s] hover:animate-none  drop-shadow-sm active:scale-[.95] hover:bg-slate-400 text-darkModeText rounded-full w-[100px] h-9 lg:w-[120px] lg:h-10 lg:text-[19px]  md:w-[135px] md:h-10 md:text-[17px] bg-cyan2 dark:border-cyan1">
              Submit
            </button>
            <span className="animate-ping  w-6 h-6 rounded-full bg-cyan1 absolute right-[-2px]"></span>
          </div>
        </form>
        {/* FOLLOW UPS */}
        <div className="lg:hidden">
            <p className="Heading pt-10  xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[30px] lg:text-[20px] text-[20px]">
              <span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">
                Fol
              </span>
              low me on:
            </p>
            <div className="Hero drop-shadow-md flex justify-center md:gap-5 gap-2 xl:text-[40px] md:text-[30px] text-[20px]">
              <a href="">
                <Icon className="dark:text-cyan1" icon="mdi:facebook"></Icon>
              </a>
              <a href="">
                <Icon className="dark:text-cyan1" icon="ri:messenger-fill"></Icon>
              </a>
              <a href="">
                <Icon
                  className="dark:text-cyan1"
                  icon="basil:instagram-solid"
                ></Icon>
              </a>
              <a href="">
                <Icon
                  className="dark:text-cyan1"
                  icon="grommet-icons:linkedin-option"
                ></Icon>
              </a>
              <a href="">
                <Icon className="dark:text-cyan1" icon="mdi:github"></Icon>
              </a>
            </div>
          </div>
        
      </div>
      
    </div>
  );
};

export default Header;
