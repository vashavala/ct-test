import React, { useEffect, useState } from 'react';
import carousel0 from '../assets/carousel0.webp'
import carousel1 from '../assets/carousel1.webp'

function Carousel() {
  const [curtainIndex, setCurtainIndex] = useState(0)
  useEffect(() => {
    const el = document.querySelector('#scroller')
    el?.addEventListener('scroll', () => {
      const totalScrollableWidth = el.scrollWidth - el.clientWidth
      if (el.scrollLeft / totalScrollableWidth < 1/3) setCurtainIndex(0)
      else if (el.scrollLeft / totalScrollableWidth < 2/3) setCurtainIndex(1)
      else setCurtainIndex(2)
    })
  }, [])
  const scrollTo = (i: number) => {
    const el = document.querySelector('#scroller') as HTMLDivElement
    el.scrollTo({
      behavior: 'smooth',
      left: el.scrollWidth * (i / 3)
    })
  }
  return (
    <div className="bg-[rgb(65,79,107,.5)] absolute left-0 bottom-0 right-0 pt-4 pb-4">
      <div className="w-7/12 overflow-hidden ml-auto mr-auto relative max-md:w-[90%]">
        <div className="scroller flex w-full overflow-scroll gap-[1%] no-scrollbar" id='scroller'>
          {[...Array(6).keys()].map((_, i) => (
            <React.Fragment key={i}>
              <img className="w-[24.25%]" src={carousel0} alt="carousel0" />
              <img className="w-[24.25%]" src={carousel1} alt="carousel1" />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {[...Array(3).keys()].map((_, i) => (
          <div className={`cursor-pointer aspect-square w-2 max-md:w-1 rounded-full bg-[#fff] ${curtainIndex == i ? 'opacity-1': 'opacity-40'}`} key={i}
            onClick={() => scrollTo(i)}></div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
