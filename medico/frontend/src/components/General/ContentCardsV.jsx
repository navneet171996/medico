import Card from "./Card";

const ContentCardsV = () => {
  return (
    <div className="self-stretch bg-neutral-colors-white overflow-hidden flex flex-row items-center justify-center max-w-full text-center text-17xl text-mediumpurple-200 font-text-single-200-regular">
      <div className="flex-1 bg-whitesmoke-300 flex flex-col items-center justify-start pt-[150px] px-5 pb-[154px] box-border gap-[60px] max-w-full mq750:gap-[60px] mq750:pt-[63px] mq750:pb-[65px] mq750:box-border mq1275:pt-[97px] mq1275:pb-[100px] mq1275:box-border mq450:pt-[41px] mq450:pb-[42px] mq450:box-border">
        <div className="w-[1440px] h-[1522px] relative bg-whitesmoke-300 hidden max-w-full" />
        <div className="w-[614px] flex flex-col items-center justify-start gap-[16px_0px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit inline-block max-w-full z-[1] mq750:text-10xl mq750:leading-[37px] mq450:text-3xl mq450:leading-[28px]">{`Services we provide `}</h1>
          <div className="self-stretch relative text-lg leading-[30px] text-dimgray z-[1]">{`Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. `}</div>
        </div>
        <div className="w-[1220px] flex flex-row flex-wrap items-start justify-center gap-[24px_17.3px] min-h-[1036px] max-w-full text-left text-5xl">
          <Card
            container="/container@2x.png"
            imageIcon="pending_2420:308"
            cardHeading="Dental treatments"
          />
          <div className="w-[392px] rounded-3xl bg-gray-200 flex flex-col items-center justify-start pt-6 pb-[50px] pr-[23px] pl-6 box-border gap-[24px] max-w-full z-[1] mq750:pt-5 mq750:pb-8 mq750:box-border">
            <div className="w-[391.8px] h-[506px] relative rounded-3xl bg-gray-200 hidden max-w-full" />
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/line-roundedpassword.svg"
            />
            <div className="self-stretch rounded-3xs flex flex-row items-center justify-center py-[75px] pr-[21px] pl-5 box-border bg-[url('/container@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
              <img
                className="h-[220px] w-[343.8px] relative rounded-3xs object-cover hidden max-w-full"
                alt=""
                src="/container@2x.png"
              />
              <img className="h-[70.5px] w-20 relative z-[1]" alt="" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[12px_0px] max-w-full">
                <b className="w-[324px] relative leading-[34px] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[27px]">
                  Bones treatments
                </b>
                <div className="self-stretch flex flex-col items-start justify-start gap-[32px_0px] text-lg text-dimgray mq450:gap-[32px_0px]">
                  <div className="self-stretch relative leading-[30px] z-[1]">
                    Lorem ipsum dolor sit amet consecte tur adipiscing elit
                    semper dalaracc lacus vel facilisis volutpat est velitolm.
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0px_6px] text-center text-mediumpurple-200">
                    <b className="relative leading-[18px] whitespace-nowrap z-[1]">
                      Learn more
                    </b>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                      alt=""
                      src="/line-roundedarrow-right.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card
            container="/container-1@2x.png"
            imageIcon="pending_2420:383"
            cardHeading="Diagnosis"
            propWidth="unset"
          />
          <Card
            container="/container-2@2x.png"
            imageIcon="pending_2420:323"
            cardHeading="Cardiology"
            propWidth="unset"
          />
          <Card
            container="/container-3@2x.png"
            imageIcon="pending_2420:338"
            cardHeading="Surgery"
            propWidth="unset"
          />
          <Card
            container="/container-4@2x.png"
            imageIcon="pending_2420:353"
            cardHeading="Eye care"
            propWidth="324px"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentCardsV;
