import React from 'react'

const BlankFrame = () => {
  return (
    <div className="self-stretch h-[58px] flex flex-col items-start justify-start pt-0 px-0 pb-[441px] box-border gap-[21px_0px] max-w-full mq750:pb-[287px] mq750:box-border">
    <div className="w-[629px] h-8 flex flex-row items-start justify-start py-0 px-[38px] box-border max-w-full">
      <div className="h-0 w-0 relative">
        <img
          className="absolute top-[NaNpx] left-[NaNpx] rounded-[50%] w-8 h-8 object-cover hidden"
          alt=""
          src="/ellipse-3@2x.png"
        />
        <div className="absolute top-[NaNpx] left-[NaNpx] w-40 h-3 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
          <div className="self-stretch h-[5.8px] relative hidden">
            <div className="absolute top-[NaNpx] left-[NaNpx] rounded bg-whitesmoke-200 w-full h-full hidden" />
            <div className="absolute top-[NaNpx] left-[NaNpx] rounded bg-dimgray w-[79.4px] h-[5.8px] hidden z-[1]" />
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke-200" />
  </div>
  )
}

export default BlankFrame