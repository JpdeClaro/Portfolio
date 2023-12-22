/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // important: true,

  theme: {  
    extend: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '425': '425px',
        '375': '375px',
        '1175': '1175px',
        '1100': '1100px',
        '1440': '1440px',
        '1025': '1025px',      },
      backgroundImage:{
        'bgImgLight': 'url(\'./src/assets/bg-lightmode.png\')',
        'bgImgDark': 'url(\'./src/assets/bg-darkmode.png\')',
        'bgService1': 'url(\'./src/assets/UI&UX.jpg\')',
        'bgService2': 'url(\'./src/assets/mockup.jpg\')',
        'bgService3': 'url(\'./src/assets/WebDev.jpg\')',
      },
      backgroundColor:{
        bglight: '#F1F5F9', 
        bgdark: '#0F172A',
      },
      fontSize:{
        // large screen only
        fheader: '42px', //32 for 1024
        fsubheader: '35px', //30px for 1024 
        fcontent: '18px', //either 18,17,15px
      },
      colors:{
        darkModeText: '#e2e8f0',
        darkModeTextContent: '#cbd5e1',
        darkModeNumber:'#FFF',
        lightTextHeader: '#64748B',
        lightTextContent: '#94A3B8',
        lightNumber: '#71717a',
        cyan1: '#22D3EE',
        cyan2: '#06B6D4',
        bgFormColor1: '#475569',
        bgFormColor2: '#CBD5E1',
        lightModeContrast: '#334155',
        darkModeContrast: '#CDB5E1',
        lightModeNav: '#64748B', 
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

}