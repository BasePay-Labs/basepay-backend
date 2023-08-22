

/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
      
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobilexs': '380px',
      'xs': '460px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2',
        'base-blue' : '#0e76fd',
        'discord-purple': '#7289da',  // Add your color here 
        'de-gray':'#808080',
        'custom-blue': '#29ABF4',
        'verified-blue': '#2081e2',
      },
      fontSize: {
        'md': '0.8rem',
        '2.5xl': '1.7rem',
        '3xl-custom': ['1.65rem', '3.5rem'],
        '4xl-custom': ['2.5rem', '4.5rem'],  // this specifies a font-size of 1.875rem with a line-height of 3rem
        '5xl-custom': ['3.5rem', '5.5rem'], 
        '6xl-custom': ['4.5rem', '7rem'], 
      },
      fontWeight: {
        'semi-normal':'500',
      },
      borderWidth: {
        '1.5':'1.5px',
        '1.25':'0.325rem',
        '2.25':'2.25px',
        '2.5':'2.5px',
        '2.75':'2.75px',
        '3':'3px',
        '3.25':'3.25px',
        '3.75':'3.75px',
      },
      width: {
        '0.75':'0.2rem',
        '1.25':'0.325rem',
        '3.5':'0.875rem',
        '4.5':'1.1rem',
        '4.75':'1.2rem',
        '5.25':'1.3rem',
        '29':'7.25rem',
        '30':'7.5rem',
        '42':'10.5rem',
        '88':'22rem',
        '90':'22.5rem',
        '92':'23rem',
        '2.25/5': '46.35%',
        '2.4/5': '47%',
        '7/8': '87.5%',
        '9/10': '90%',
      },
      height: {
        '0.75':'0.2rem',
        '3.5':'0.875rem',
        '4.5':'1.1rem',
        '4.75':'1.2rem',
        '5.25':'1.3rem',
        '29':'7.25rem',
        '30':'7.5rem',
        '42':'10.5rem',
        '54':'13.5rem',
        '61':'15.35rem',
        '88':'22rem',
        '92':'23rem',
        '104':'26rem',
        '120': '30rem',
        '126': '31.6rem',
        '140': '35rem',
        '160': '40rem',
      },
      spacing: {
        '1.2':'0.28rem',
        '1.25':'0.325rem',
        '3.25': '0.8125rem',
        '3.5':'0.875rem',
        '4.5':'1.15rem',
        '5.5':'1.40rem',
        '6.5':'1.60rem',
        '7.5':'1.90rem',
        '11.5': '2.90rem',
        '13': '3.25rem',
        '14.5': '3.60rem',
        '15': '3.75rem',
        '16.5': '4.075rem',
        '17': '4.35rem',
        '18': '4.5rem', // Your custom spacing added here
        '19': '4.75rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23':'5.75rem',
        '25':'6.25rem',
        '26':'6.5rem',
        '27':'6.75rem',
        '29':'7.25rem',
        '30':'7.5rem',
        '31':'7.75rem',
        '32':'8rem',
        '33':'8.25rem',
        '34':'8.5rem',
        '35':'8.75rem',
        '37':'9.25rem',
        '39':'9.45rem',
        '39.5':'9.75rem',
        '42':'10.5rem',
        '46':'11.5rem',
        '62':'15.5rem',
        '76':'19rem',
        '104':'26rem',
        '112':'28rem',
        '120': '30rem',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        'pulse-faster': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        fade: { // New keyframe
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },
        "animate-typing": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-faster': 'pulse-faster 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fade: 'fade 2s infinite', // New animation
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        typing: 'typing 4s steps(40, end), blink-caret .75s step-end infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-revers': 'spin 20s linear infinite reverse',
      },
      opacity: {
        '2': '.02',
        '3': '.03',
        '4': '.04',
      },
      scale: {
        '103': '1.03',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
}