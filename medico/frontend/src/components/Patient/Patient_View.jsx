import React from 'react';
import { Link } from 'react-router-dom';
import ContentCardsV from '../General/ContentCardsV';
import Header from './Header';
import AllHospitals from './AllHospitals';
import FooterContainer from '../General/FooterContainer';
import FootersV from '../General/FootersV';
import Hosp from './Hosp';
import Navbar from './Navbar';

const Patient_View = () => {
  return (
    <>
      <div className="w-full relative bg-whitesmoke-400 flex flex-row items-start justify-start gap-[0px_32px] tracking-[normal] mq750:gap-[0px_32px] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
       <Navbar/>
        <main className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_254px)] mq1025:max-w-full">
          <section className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[22px_0px] max-w-full text-left text-xs text-navy-100 font-nunito">
              {/* Header section */}
              <Header />
              <div className='h-full '>
                <ContentCardsV />
                <Hosp />
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className='mt-[350px]'>
        <FootersV />
      </div>
    </>
  );
}

export default Patient_View;
