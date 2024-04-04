import Card from "./Card";
import { useEffect,useState } from "react";
import { Carousel } from "antd";
import AuthContext from "../../../Context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ContentCardsV = () => {
  const {getSpecialization} = useContext(AuthContext)
  const {specialization} = useContext(AuthContext)
  useEffect(()=>{
  getSpecialization()
  // console.log(specialization[0].specialityName);
  }, []);
  
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const visibleSpecializations = showMore ? specialization : specialization.slice(0, 6);

  return (
    <div className="self-stretch bg-neutral-colors-white overflow-hidden flex flex-row items-center justify-center max-w-full text-center text-17xl text-mediumpurple-200 font-text-single-200-regular">
        <div className="flex-1 bg-whitesmoke-300 flex flex-col items-center justify-start pt-[50px] px-5  box-border gap-[60px] max-w-full mq750:gap-[60px] mq750:pt-[63px] mq750:pb-[65px] mq750:box-border mq1275:pt-[97px] mq1275:pb-[100px] mq1275:box-border mq450:pt-[41px] mq450:pb-[42px] mq450:box-border">
        <div className="w-[1440px] h-[1522px] relative bg-whitesmoke-300 hidden max-w-full" />
        <div className="w-[614px] flex flex-col items-center justify-start gap-[16px_0px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit inline-block max-w-full z-[1] mq750:text-10xl mq750:leading-[37px] mq450:text-3xl mq450:leading-[28px]">{`Services we provide `}</h1>
          <div className="self-stretch relative text-lg leading-[30px] text-dimgray z-[1]">{`We offer comprehensive medical services tailored to your needs, ensuring personalized care and attention `}</div>
        </div>
        <div className="w-[1220px] max-w-full">
        <Carousel  centerPadding="60px" slidesToShow={3}>
          {Array.isArray(visibleSpecializations) && visibleSpecializations.map((speciality, index) => (
            <div key={index}>
              <Card
                container='/container-1@2x.png'
                imageIcon="pending_2420:353"
                cardHeading={speciality.specialityName}
                propWidth="unset"
              />
            </div>
          ))}
        </Carousel>
        <Link className="text-black pt-3 ">
        <div className="mt-2 mr-5 text-[15px] border-4 border-whitesmoke-300  border-solid float-right hover:bg-blue-400 hover:text-white px-2 py-2 bg-whitesmoke-100  ">View All Specializations</div>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default ContentCardsV;
