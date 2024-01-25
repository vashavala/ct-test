import Carousel from './components/Carousel'
import IndexTitle from './components/IndexTitle'
import Navbar from './components/Navbar'
import Slogan from './components/Slogan'
import logo from './assets/logo.svg'
import { useState } from 'react'

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const schedule = [
    { time: '25 Nov 2016', plan: 'Vestibulum viverra' },
    { time: '28 Nov 2016', plan: 'Vestibulum viverra' },
    { time: '17 Nov 2016', plan: 'Vestibulum viverra' },
    { time: '13 Dec 2016', plan: 'Vestibulum viverra' }
  ]

  return (
    <>
      <Navbar />
      {/* bg0 */}
      <div className='w-screen h-screen bg-[url("./assets/bg0.webp")] bg-no-repeat bg-center bg-cover
        flex justify-center items-center
      '>
        <Slogan />
      </div>

      {/* bg1 */}
      <div className='w-screen h-screen bg-[url("./assets/bg1.webp")] bg-no-repeat bg-center bg-cover pl-[10%] pr-[10%] relative'>
        <div className="absolute -top-16" id='HISTORY'></div>
        <div>
          <div className='pt-12 pb-4'><IndexTitle indexText={"01"} titleText={"HISTORY"} /></div>
          <div className='font-[Lato] font-[300] text-black pl-[6%] pr-[6%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, maiores nostrum omnis quisquam similique cum id eum veniam aliquid velit, tenetur ad voluptatibus officiis! Sed nemo quod, vel libero expedita dolores! Unde quis ipsam tempora tenetur hic. Nobis illo tenetur minus, non quo dolore sit consequuntur rem, incidunt sequi porro!</div>
        </div>
        <Carousel />
      </div>

      <div className='bg-[#fff] w-screen flex items-center pl-[12%] pr-[12%] pt-10 pb-10 relative max-sm:flex-col'>
        <div className="absolute -top-16" id='TEAM'></div>
        <IndexTitle indexText={"02"} titleText={"CLIMB"} />
        <div className='font-[Lato] font-[300] text-black ml-6 max-sm:mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor non quam delectus corrupti omnis. Aliquid aut minus labore, nihil soluta itaque autem quasi ea, beatae quo quam perspiciatis id accusamus!</div>
      </div>

      {/* tab */}
      <div className={`w-screen h-screen bg-no-repeat bg-center bg-cover ${activeTab ? 'bg-[url("./assets/mountain1.webp")]' : 'bg-[url("./assets/mountain0.webp")]'}`}>
        <div className='bg-[#414f6b] h-12 font-bold text-xl underline-offset-4 text-[#b0b4be] flex pl-[10%] pr-[10%] max-md:justify-center max-sm:text-sm'>
          <div
            className={`flex items-center cursor-pointer p-6 ${activeTab === 0 && "bg-[#b0b4be] text-[#414f6b] underline"}`}
            onClick={() => setActiveTab(0)}
          > MOUNTAIN 1 </div>
          <div
            className={`flex items-center cursor-pointer p-6 ${activeTab === 1 && "bg-[#b0b4be] text-[#414f6b] underline"}`}
            onClick={() => setActiveTab(1)}
          > MOUNTAIN 2 </div>
        </div>
        <div className='max-md:flex max-md:justify-center'>
          <div className='schedule bg-[rgba(255,255,255,.702)] inline-block ml-[14%] mt-40 pl-12 pr-12 pt-6 pb-6 max-md:scale-[80%] max-md:ml-0'>
            <div className='font-[Oswald] font-[900] text-[#414f6b] text-3xl scale-y-125 mb-4'>SCHEDULE</div>
            {schedule.map((_, i) => (
              <div className={`${i == 2 ? 'mt-6 mb-6' : ''} flex justify-between`} key={i}>
                <span>{_.time}</span>
                <span className='ml-12'>{_.plan}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className='flex items-center justify-between pl-[10%] pr-[10%] h-16 bg-[#414f6b] relative'>
        <div className="bg-[rgba(65,79,107,0.6)] absolute left-0 right-0 top-0 bottom-0 z-20"></div>
        <div className='flex items-center'>
          <img className='aspect-square h-12 mr-4' src={logo} alt='logo' />
          <div className='max-sm:hidden'>
            <Slogan scale={0.2} textWhite={true} />
          </div>
        </div>
        <span className='text-white italic min-[768px]:text-[1rem] max-[768px]:text-[0.5rem]'>COPYRIGHT 2016. ALL RIGHTS RESERVED.</span>
      </footer>
    </>
  )
}

export default App
