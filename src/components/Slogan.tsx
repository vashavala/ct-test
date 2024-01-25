function Slogan(props: { scale?: number, textWhite?: boolean }) {
  const scale = props.scale || 1
  const textWhite = !!props.textWhite
  return (
    <div className='font-[Bebas] font-black scale-y-150 leading-[0.9]'>
      <div className={`text-[#4d4d4d] ${scale == 1 ? 'text-[7vw]' : 'text-[1rem]'} flex justify-between ${textWhite ? "!text-white" : ""}`}>
        {'LOSANGELES'.split('').map((char, i) => <span key={i}>{char}</span>)}
      </div>
      <div className={`text-[#414f6b] ${scale == 1 ? 'text-[8.4vw]' : 'text-[1.2rem]'} flex justify-between ${textWhite ? "!text-white" : ""}`}>
        {'MOUNTAINS'.split('').map((char, i) => <span key={i}>{char}</span>)}
      </div>
    </div>
  )
}

export default Slogan
