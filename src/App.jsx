import { useState } from 'react';
import '../src/App.css';
import Hero from './components/Hero';
import Header from './components/Header';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : '' } font-[Monda] bg-bglight w-full h-full`}>
      <div className="overflow-x-hidden bg-fixed bg-no-repeat bgImageXL lg:bg-bgImgLight lg:dark:bg-bgImgDark lg:mix-blend-pluslighter dark:bg-bgdark">
        <Hero darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
        />
        <Header />
      </div>
    </div>
  );
}
