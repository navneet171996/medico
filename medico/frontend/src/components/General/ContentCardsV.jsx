import Card from "./Card";
import { useEffect,useState } from "react";

import AuthContext from "../../../Context/AuthContext";
import { useContext } from "react";

const ContentCardsV = () => {
  const {getSpecialization} = useContext(AuthContext)
  const {specialization} = useContext(AuthContext)
  useEffect(()=>{
  getSpecialization()
  // console.log(specialization[0].specialityName);
  }, []);

  return (
    <div className="self-stretch bg-neutral-colors-white overflow-hidden flex flex-row items-center justify-center max-w-full text-center text-17xl text-mediumpurple-200 font-text-single-200-regular">
        <div className="flex-1 bg-whitesmoke-300 flex flex-col items-center justify-start pt-[150px] px-5 pb-[154px] box-border gap-[60px] max-w-full mq750:gap-[60px] mq750:pt-[63px] mq750:pb-[65px] mq750:box-border mq1275:pt-[97px] mq1275:pb-[100px] mq1275:box-border mq450:pt-[41px] mq450:pb-[42px] mq450:box-border">
        <div className="w-[1440px] h-[1522px] relative bg-whitesmoke-300 hidden max-w-full" />
        <div className="w-[614px] flex flex-col items-center justify-start gap-[16px_0px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit inline-block max-w-full z-[1] mq750:text-10xl mq750:leading-[37px] mq450:text-3xl mq450:leading-[28px]">{`Services we provide `}</h1>
          <div className="self-stretch relative text-lg leading-[30px] text-dimgray z-[1]">{`We offer comprehensive medical services tailored to your needs, ensuring personalized care and attention `}</div>
        </div>
        <div className="w-[1220px] flex flex-row flex-wrap items-start justify-center gap-[24px_17.3px] min-h-[1036px] max-w-full text-left text-5xl">

         

          {Array.isArray(specialization) && specialization.map((speciality, index) => (
  <Card
    key={index}
    container='/container-1@2x.png'
    imageIcon="pending_2420:353"
    cardHeading={speciality.specialityName}
    propWidth="unset"
  />
))}

          

        </div>
      </div>
    </div>
  );
};

export default ContentCardsV;
