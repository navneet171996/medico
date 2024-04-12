import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
const Patient_History = () => {
  return (
    <>
    <div className="w-full relative bg-whitesmoke-400 overflow-hidden flex flex-row items-start justify-start gap-[0px_32px] tracking-[normal] mq750:gap-[0px_32px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
        <Navbar />
        <main className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_254px)] mq1025:max-w-full">
          <section className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px_0px] max-w-full text-left text-xs text-navy-100 font-nunito">
              <Header />
            </div>
           
          </section>
        </main>
      </div>
    </>
  )
}

export default Patient_History