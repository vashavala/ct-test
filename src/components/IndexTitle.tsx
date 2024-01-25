function IndexTitle(props: { indexText: string, titleText: string }) {
  return (
    <div className="flex items-end font-[Oswald] font-[700]">
      <span className="text-[rgba(65,79,107,.502)] text-9xl leading-[0.72]"> {props.indexText}</span>
      <div className="flex flex-col items-start">
        <div className="leading-[1] text-[#414f6b] scale-y-150 text-xl mb-2">{props.titleText}</div>
        <div className="aspect-square bg-[rgba(65,79,107,.502)] w-[0.92rem]"></div>
      </div>
    </div>
  )
}

export default IndexTitle
