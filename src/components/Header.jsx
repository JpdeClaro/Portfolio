import { animateScroll as scroll } from 'react-scroll';
import { Icon } from '@iconify/react';



const Header = () => {

// Btn
  const scrollTo = () => {
    scroll.scrollTo();
};

  return (

      <div className="Header lg:mt-[300px] relative grid lg:grid-cols-2 grid-cols-none grid-flow-row xl:px-[86px] lg:px-[60px] lg:gap-[150px] lg:justify-between">

          {/* =====Scroll to Top btn===== */}
          <button className='fixed bottom-10 right-10 hidden lg:block text-[30px] text-lightTextContent dark:text-darkModeText' onClick={scrollTo}><Icon className=' hover:text-cyan1' icon='iconoir:fast-arrow-top'></Icon></button>
          {/* ========Vertical bullet line ========= */}
          <div className="bg-none absolute xl:left-[550px] lg:left-[40%] text-[35px] hidden lg:block">
            <svg className="xl:pt-[25px] lg:pt-[22px] fill-[#CBD5E1] dark:fill-[#334155] lg:block hidden xl:w-[96px] xl:h-[4642px] lg:w-[70px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 4642" fill="none">
              <path d="M93.5 14H96C96 12.6193 94.8807 11.5 93.5 11.5V14ZM93.5 3427H96L96 3426.99L93.5 3427ZM1.16667 3427C1.16667 3434.36 7.1362 3440.33 14.5 3440.33C21.8638 3440.33 27.8333 3434.36 27.8333 3427C27.8333 3419.64 21.8638 3413.67 14.5 3413.67C7.1362 3413.67 1.16667 3419.64 1.16667 3427ZM1.16667 14C1.16667 21.3638 7.1362 27.3333 14.5 27.3333C21.8638 27.3333 27.8333 21.3638 27.8333 14C27.8333 6.6362 21.8638 0.666667 14.5 0.666667C7.1362 0.666667 1.16667 6.6362 1.16667 14ZM1.16667 469C1.16667 476.364 7.1362 482.333 14.5 482.333C21.8638 482.333 27.8333 476.364 27.8333 469C27.8333 461.636 21.8638 455.667 14.5 455.667C7.1362 455.667 1.16667 461.636 1.16667 469ZM1.16667 1029C1.16667 1036.36 7.1362 1042.33 14.5 1042.33C21.8638 1042.33 27.8333 1036.36 27.8333 1029C27.8333 1021.64 21.8638 1015.67 14.5 1015.67C7.1362 1015.67 1.16667 1021.64 1.16667 1029ZM1.16667 1675C1.16667 1682.36 7.1362 1688.33 14.5 1688.33C21.8638 1688.33 27.8333 1682.36 27.8333 1675C27.8333 1667.64 21.8638 1661.67 14.5 1661.67C7.1362 1661.67 1.16667 1667.64 1.16667 1675ZM1.16667 2017C1.16667 2024.36 7.1362 2030.33 14.5 2030.33C21.8638 2030.33 27.8333 2024.36 27.8333 2017C27.8333 2009.64 21.8638 2003.67 14.5 2003.67C7.1362 2003.67 1.16667 2009.64 1.16667 2017ZM93.5 2447L96 2447.01V2447H93.5ZM1.16667 2447C1.16667 2454.36 7.1362 2460.33 14.5 2460.33C21.8638 2460.33 27.8333 2454.36 27.8333 2447C27.8333 2439.64 21.8638 2433.67 14.5 2433.67C7.1362 2433.67 1.16667 2439.64 1.16667 2447ZM92 2783L89.5 2782.99C89.5 2782.99 89.5 2783 89.5 2783.01L92 2783ZM92.0012 2783.5L94.5012 2783.49L92.0012 2783.5ZM0.666667 2783.5C0.666667 2790.86 6.6362 2796.83 14 2796.83C21.3638 2796.83 27.3333 2790.86 27.3333 2783.5C27.3333 2776.14 21.3638 2770.17 14 2770.17C6.6362 2770.17 0.666667 2776.14 0.666667 2783.5ZM93.5 4628V4630.5C94.8807 4630.5 96 4629.38 96 4628H93.5ZM1.66667 4628C1.66667 4635.36 7.6362 4641.33 15 4641.33C22.3638 4641.33 28.3333 4635.36 28.3333 4628C28.3333 4620.64 22.3638 4614.67 15 4614.67C7.6362 4614.67 1.66667 4620.64 1.66667 4628ZM0.666667 4211.5C0.666667 4218.86 6.6362 4224.83 14 4224.83C21.3638 4224.83 27.3333 4218.86 27.3333 4211.5C27.3333 4204.14 21.3638 4198.17 14 4198.17C6.6362 4198.17 0.666667 4204.14 0.666667 4211.5ZM93.5 3424.5H14.5V3429.5H93.5V3424.5ZM93.5 11.5H14.5V16.5H93.5V11.5ZM91 14V469H96V14H91ZM93.5 466.5H14.5V471.5H93.5V466.5ZM91 469V1029H96V469H91ZM93.5 1026.5H14.5V1031.5H93.5V1026.5ZM91 1029V1675H96V1029H91ZM93.5 1672.5H14.5V1677.5H93.5V1672.5ZM91 1675V2017H96V1675H91ZM93.5 2014.5H14.5V2019.5H93.5V2014.5ZM91 2017V2447H96V2017H91ZM93.5 2444.5H14.5V2449.5H93.5V2444.5ZM91 2446.99L89.5 2782.99L94.5 2783.01L96 2447.01L91 2446.99ZM89.5 2783.01L89.5012 2783.51L94.5012 2783.49L94.5 2782.99L89.5 2783.01ZM89.5012 2783.51L91 3427.01L96 3426.99L94.5012 2783.49L89.5012 2783.51ZM92.0012 2781H14V2786H92.0012V2781ZM93.5 4625.5H15V4630.5H93.5V4625.5ZM91 3427V4211.5H96V3427H91ZM91 4211.5V4628H96V4211.5H91ZM93.5 4209H14V4214H93.5V4209Z"/>
            </svg>
          </div>
          {/* =======HEADER,FOOTER & CONTENT======== */}
          <div className="text-white text-[35px] bg-green-600 lg:hidden">
            My Image Appear here
          </div>

{/* ======Section 1 ======= */}
          <div id="About" className="xl:mr-[110px] lg:mr-[60px] lg:px-0 lg:py-0 md:pb-[30px] md:pt-[150px] md:px-[25px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none">
            {/* HEADER */}
            <div className="headerNumber Flex relative">
              <a href="#About" className="justify-start lg:items-start xl:text-[150px] lg:text-[125px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px] top-[-150px]">01</a>
            </div>
            <div className="flex flex-col items-base lg:flex-none xl:mb-[235px] lg:mb-[149px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[42px] lg:text-[35px] text-[28px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Lea</span>rn something about me:</p>
              <p className="Content xl:pl-[150px] lg:pl-[80px] xl:text-[18px] lg:text-[15px]">HERES A LITTLE INSIGHT OF WHO AM I</p>
            </div>
            {/* EDUCATION */}
            <div className="lg:block hidden xl:mb-[385px] lg:mb-[262px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Edu</span>cation:</p>                                    
              <p className="Content xl:pl-[150px] xl:text-[18px] lg:text-[15px]">WHERE INSTRUCTION MET INSPIRATION, SHAPING THE CHAPTERS OF MY LIFE</p>
            </div>
            {/* CERTIFICATION */}
            <div className="lg:block hidden xl:mb-[311px] lg:mb-[170px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Cer</span>tification:</p>                                    
              <p className="Content xl:pl-[100px] lg:pl-[50px] xl:text-[18px] lg:text-[15px]"> HERE ARE MY CREDENTIALS THAT DEFINE  MY EXCELLENCE THIS YEAR 2023</p>
            </div>
          </div>
          {/* CONTENT */}
          <div className="grid md:grid-cols-2 py-10  px-[25px]">
            {/* EDUCATION */}
            <div className=" block lg:hidden xl:mb-[385px] lg:mb-[262px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Edu</span>cation:</p>                                    
              <p className="Content xl:pl-[150px] xl:text-[18px] lg:text-[15px]">WHERE INSTRUCTION MET INSPIRATION, SHAPING THE CHAPTERS OF MY LIFE</p>
            </div>
            {/* CERTIFICATION */}
            <div className="block lg:hidden xl:mb-[311px] lg:mb-[170px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Cer</span>tification:</p>                                    
              <p className="Content xl:pl-[100px] lg:pl-[50px] xl:text-[18px] lg:text-[15px]"> HERE ARE MY CREDENTIALS THAT DEFINE  MY EXCELLENCE THIS YEAR 2023</p>
            </div>
          </div>

{/* ======Section 2 ======= */}
          <div id="Skills" className="xl:mr-[110px] lg:mr-[60px] lg:px-0 lg:py-0 md:py-[60px] md:px-[25px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none">
            {/* HEADER */}
            <div className="headerNumber Flex relative">
              <a href="#About" className="justify-start items-start xl:text-[150px] lg:text-[125px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px]">02</a>
            </div>
            <div className="xl:mb-[132px] lg:mb-[76px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[42px] lg:text-[35px] text-[28px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Wha</span>t I do:</p>
              <p className="Content xl:pl-[100px] lg:pl-[20px] xl:text-[18px] lg:text-[15px]">EXPLORE MY DIVERSE SKILL SET, RANGING FROM TECHNICAL PROFICIENCY AND CREATIVE ABILITIES</p>
            </div>
            {/* TECH STACKS */}
            <div className="xl:mb-[126px] lg:mb-[41px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[22px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Tec</span>h Stack:</p>                                    
              <p className="Content xl:pl-[100px] lg:pl-[20px] xl:text-[18px] lg:text-[15px]">HERE ARE THE LANGUAGES AND TOOLS I USED</p>
            </div>
            
          </div>
          {/* CONTENT */}
          <div className="text-white text-[35px] bg-green-600">
            Content
          </div>

{/* ======Section 3 ======= */}
          <div id="Projects" className="xl:mr-[110px] lg:mr-[60px] lg:px-0 lg:py-0 md:py-[60px] md:px-[25px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none">
          {/* HEADER */}
            <div className="headerNumber Flex relative">
              <a href="#About" className="justify-start items-start xl:text-[150px] lg:text-[125px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px]">03</a>
            </div>
            <div className="xl:mb-[158px] lg:mb-[96px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[42px] lg:text-[35px] text-[28px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">My</span> Projects:</p>
              <p className="Content xl:pl-[0px] lg:pl-[0px] xl:text-[18px] lg:text-[15px] uppercase">Each project reflects my commitment to innovation and attention to detail.</p> 
            </div>
            {/* Project 1 */}
            <div className="xl:mb-[528px] lg:mb-[372px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px] text-[20px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Org</span>anizeMe</p>                                    
              <p className="Content flex gap-1 xl:pl-[150px] lg:pl-[80px] xl:text-[18px] lg:text-[15px]"><Icon className='text-cyan1 xl:text-[30px] text-[24px]' icon='mingcute:web-fill'></Icon>E - COMMERSE WEBSITE</p>
            </div>
            {/* Project 2*/}
            <div className="xl:mb-[506px] lg:mb-[317px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[32px] lg:text-[30px text-[20px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">War</span>drobe Manila</p>                                    
              <p className="Content flex gap-1 xl:pl-[150px] lg:pl-[80px] xl:text-[18px] lg:text-[15px]"><Icon className='text-cyan1 xl:text-[30px] text-[24px]' icon='mingcute:web-fill'></Icon>E - COMMERSE WEBSITE</p>
            </div>
          </div>
          {/* CONTENT */}
          <div className="text-white text-[35px] bg-green-600">
            Content
          </div>

{/* ======Section 4 ======= */}
          <div id="Contact" className="xl:mr-[110px] lg:mr-[60px] lg:px-0 lg:py-0 md:py-[60px] md:px-[25px] dark:bg-bgImgDark bg-bgImgLight bg-fixed dark:lg:bg-none lg:bg-none">
          {/* FOOTER */}
            <div className="headerNumber Flex relative">
              <a href="#About" className="justify-start items-start xl:text-[150px] lg:text-[125px] text-lightNumber dark:text-darkModeNumber mix-blend-hard-light dark:mix-blend-overlay absolute xl:top-[-120px] lg:top-[-100px]">04</a>
            </div>
            <div className="xl:mb-[99px] lg:mb-[40px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[42px] lg:text-[35px] text-[28px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Get</span> in Touch:</p>
              <p className="Content xl:mb-[30px] lg:mb-[25px] xl:pl-[150px] lg:pl-[80px] xl:text-[18px] lg:text-[15px]">CONTACT INFORMATION</p>
              <div className="Hero flex flex-col gap-4 text-start xl:pl-[150px] lg:pl-[80px] xl:text-[17px] lg:text-[15px]">
                <span className=" flex gap-2"><Icon className='text-cyan1 xl:text-[30px] text-[24px]' icon='mdi:paper-airplane'></Icon>jpdec003@gmail.com</span>
                <span className=" flex gap-2"><Icon className=' text-cyan1 xl:text-[30px] text-[24px]' icon='bi:phone'></Icon>+639262460292 - Globe/Tm</span>
                <span className=" flex gap-2"><Icon className='text-cyan1 xl:text-[38px] text-[32px]' icon='mdi:address-marker-outline'></Icon>Polomolok South Cotabto, Philippines</span>
              </div>
            </div>
            {/* FOLLOW UPS */}
            <div className="mb-[100px] lg:text-right dark:text-darkModeText">
              <p className="Heading xl:mb-[30px] lg:mb-[25px] xl:pl-[50px] xl:text-[30px] lg:text-[20px] text-[20px]"><span className="xl:border-t-[6px] lg:border-t-4 border-t-2 border-cyan1 rounded-t-sm">Fol</span>low me on:</p>                                    
              <div className='Hero drop-shadow-md flex justify-end gap-5 xl:text-[40px] text-[30px]'>
                  <a href=''><Icon className='dark:text-cyan1' icon='mdi:facebook'></Icon></a>
                  <a href=''><Icon className='dark:text-cyan1' icon='ri:messenger-fill'></Icon></a>
                  <a href=''><Icon className='dark:text-cyan1' icon='basil:instagram-solid'></Icon></a>
                  <a href=''><Icon className='dark:text-cyan1' icon='grommet-icons:linkedin-option'></Icon></a>
                  <a href=''><Icon className='dark:text-cyan1' icon='mdi:github'></Icon></a>
              </div>
            </div>
          </div>
          {/* CONTENT */}
          <div className="text-white text-[35px] bg-green-600">
            Content
          </div>
          
      </div>

    
    
  )
}

export default Header