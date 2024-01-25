import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg'
import Slogan from './Slogan'
import { TiThMenu } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";


function Navbar() {
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [sloganShow, setSloganShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 64) {
        setBgColor("#fff");
        setTextColor("#414f6b");
        setSloganShow(true);
      } else {
        setBgColor("transparent");
        setTextColor("#fff");
        setSloganShow(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'top') return window.scrollTo({ top: 0, behavior: "smooth" })
    const el = document.querySelector(`#${id}`) as HTMLElement;
    el.scrollIntoView({ behavior: "smooth" });
    menuShow && setMenuShow(false)
  };
  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className='navbar h-16 fixed top-0 left-0 right-0 flex items-center justify-start pl-[10%] pr-[10%] z-10'>
      <img className={`aspect-square h-12 mr-4 rounded-full border-2 ${sloganShow ? 'border-[#bcc3c6]' : 'border-[transparent]'} `} src={logo} alt='logo'
        onClick={() => scrollTo("top")}
      />

      <div className='flex-grow flex justify-start'>
        {sloganShow ? <Slogan scale={0.2} /> : <></>}
      </div>
      <div
        style={{ color: `${textColor}` }}
        className="flex gap-8 underline underline-offset-4 italic max-[768px]:hidden"
      >
        <div className='cursor-pointer' onClick={() => scrollTo('HISTORY')}>01.HISTORY</div>
        <div className='cursor-pointer' onClick={() => scrollTo('TEAM')}>02.TEAM</div>
      </div>


      <TiThMenu style={{ color: `${textColor}` }} className='min-[768px]:hidden text-2xl' onClick={() => setMenuShow(true)}/>
      {
        menuShow && (
          <div className='
            z-20 fixed left-0 right-0 top-0 bottom-0 bg-black
            flex flex-col items-center justify-center gap-8 
            text-[#fff] text-2xl underline underline-offset-4 italic
          '>
            <div className='cursor-pointer' onClick={() => scrollTo('HISTORY')}>HISTORY</div>
            <div className='cursor-pointer' onClick={() => scrollTo('TEAM')}>TEAM</div>
            <IoIosClose className='absolute top-4 right-4 text-white text-4xl' onClick={() => setMenuShow(false)} />
          </div>
        )
      }

    </div>
  )
}

export default Navbar
