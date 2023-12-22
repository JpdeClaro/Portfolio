import React from 'react'

const SunMoon = () => {
  return (
    
    <div className="darkMode-btn absolute -top-[50px] -right-[200px] lg:right-4 lg:top-[90px] xl:right-6 xl:top-[125px] 1175:top-[110px] active:scale-[.95] cursor-pointer transition-transform duration-300 ease-in-out delay-100 ">
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
  )
}

export default SunMoon