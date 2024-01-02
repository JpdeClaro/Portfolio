import { useState } from 'react';
import '../src/App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  console.log("AOS initialization");

  return (
    <div className={`${darkMode ? 'dark' : '' } font-[Monda] bg-bglight w-full h-full`}>
      <div className="overflow-hidden bg-fixed bg-no-repeat bgImageXL lg:bg-bgImgLight lg:dark:bg-bgImgDark lg:mix-blend-pluslighter dark:bg-bgdark">
        <Hero darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        <Header />
      </div>
    </div>
  );
}
