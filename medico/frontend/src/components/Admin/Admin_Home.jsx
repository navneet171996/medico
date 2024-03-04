import React from 'react'
import { useNavigationType,useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './Admin.css'
import BlankFrame from './BlankFrame'
import FrameComponent from './FrameComponent'
import LinkedLinesFrame from './LinkedLinesFrame'
import { useNavigation } from 'react-router-dom'
const Admin_Home = () => {
 
  return (
   <>
    <div className="w-full h-[982px] relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[53px_0px] tracking-[normal] text-left text-xs text-gray-300 font-manrope lg:h-auto mq750:gap-[53px_0px]">
      <main className="w-[1459px] flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-0 box-border gap-[0px_192px] max-w-full shrink-0 text-left text-sm text-dimgray font-manrope lg:gap-[0px_192px] mq750:gap-[0px_192px] mq450:gap-[0px_192px]">
        <section className="flex-1 flex flex-row items-start justify-start gap-[0px_12px] max-w-full text-left text-base text-dimgray font-manrope mq750:pl-3 mq750:pr-3 mq750:box-border mq750:min-w-full">
          <div className="h-[982px] w-[255px] relative mq750:hidden">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] bg-whitesmoke-200 w-60">
              <div className="absolute top-[564px] left-[32px] rounded flex flex-row items-center justify-start py-2 pr-6 pl-4 gap-[0px_12px] z-[1]">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearsetting2.svg"
                />
                <div className="relative leading-[24px]">Settings</div>
              </div>
              <div className="absolute top-[628px] left-[32px] rounded flex flex-row items-center justify-start py-2 pr-[34px] pl-4 gap-[0px_12px] z-[1] text-indianred">
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearlogout.svg"
                />
                <div className="relative leading-[24px]">Logout</div>
              </div>
              <div className="absolute top-[212px] left-[32px] w-[197px] flex flex-col items-start justify-start gap-[24px_0px] z-[1] text-gray-300">
                <div className="rounded bg-mediumpurple flex flex-row items-center justify-start py-2 pr-[33px] pl-4 gap-[0px_12px] text-dimgray">
                  <img
                    className="h-6 w-6 relative"
                    alt=""
                    src="/vuesaxlinearcategory.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    Dashboard
                  </div>
                </div>
                <div className="rounded overflow-auto flex flex-row items-start justify-start py-2 pr-[21px] pl-4 gap-[0px_12px]">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearprofile.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    Verified Doctors
                  </div>
                </div>
                <div className="self-stretch rounded flex flex-row items-center justify-start py-2 pr-6 pl-4 gap-[0px_12px]">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/vuesaxlineargallery.svg"
                  />
                  <div className="relative leading-[24px] font-medium">
                    Hospital
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute top-[27px] left-[7px] rounded-[45px] w-[247.6px] h-[93.7px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[60px] px-0 pb-0 box-border max-w-[calc(100%_-_267px)] mq750:max-w-full mq450:pt-[25px] mq450:box-border mq1050:pt-[39px] mq1050:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[33px_0px] max-w-full mq750:gap-[33px_0px]">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1.5 pr-0 pl-[5px] box-border max-w-full">
                <div className="flex-1 rounded bg-gray-200 box-border flex flex-row items-start justify-start py-3 px-4 gap-[12px] max-w-full border-[1px] border-solid border-gainsboro">
                  <div className="h-12 w-[741px] relative rounded bg-gray-200 box-border hidden max-w-full border-[1px] border-solid border-gainsboro" />
                  <img
                    className="h-6 w-[24.1px] relative min-h-[24px] z-[1]"
                    alt=""
                    src="/vuesaxlinearsearchnormal.svg"
                  />
                  <div className="w-[173.5px] relative leading-[24px] inline-block shrink-0 z-[1]">
                    Search doctor
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[28px_0px] max-w-full text-[18px]">
                <div className="self-stretch flex flex-col items-end justify-start gap-[19px_0px] max-w-full">
                  <div className="self-stretch flex flex-row items-end justify-between py-0 pr-0 pl-1 gap-[20px] mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[8px_0px]">
                      <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit whitespace-pre-wrap">
                        All doctors
                      </h3>
                      <div className="relative text-xs leading-[16px] text-darkgray-100 whitespace-pre-wrap">
                        Monitor doctor- rating.
                      </div>
                    </div>
                    <div className="w-[315px] flex flex-row items-start justify-start gap-[0px_16px] text-xs">
                      <div className="flex-1 rounded bg-gray-200 flex flex-row items-start justify-start py-2 px-4 gap-[16px] whitespace-nowrap border-[1px] border-solid border-gainsboro">
                        <div className="h-8 w-60 relative rounded bg-gray-200 box-border hidden border-[1px] border-solid border-gainsboro" />
                        <img
                          className="h-4 w-4 relative min-h-[16px] z-[1]"
                          alt=""
                          src="/vuesaxlinearsearchnormal-1.svg"
                        />
                        <div className="relative leading-[16px] whitespace-pre-wrap z-[1]">
                          Search doctor
                        </div>
                      </div>
                      <div className="rounded flex flex-row items-start justify-start py-2 pr-1.5 pl-1 gap-[0px_5px] [transform:_rotate(180deg)] border-[1px] border-solid border-gainsboro">
                        <img
                          className="h-4 w-4 relative object-contain [transform:_rotate(-180deg)] min-h-[16px]"
                          alt=""
                          src="/vuesaxlinearfiltersearch.svg"
                        />
                        <div className="relative leading-[16px] [transform:_rotate(180deg)]">
                          Filter
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[14px_0px] max-w-full text-xs">
                    <div className="self-stretch rounded bg-gray-100 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border gap-[43px_0px] max-w-full mq750:gap-[43px_0px]">
                      <div className="self-stretch h-[451px] relative rounded bg-gray-100 hidden" />
                      <div className="self-stretch rounded-t rounded-b-none bg-whitesmoke-100 overflow-x-auto flex flex-row items-start justify-start pt-[18px] px-[35px] pb-0 gap-[119.5px] z-[1] mq750:gap-[119.5px]">
                        <div className="h-10 w-[741px] relative rounded-t rounded-b-none bg-whitesmoke-100 shrink-0 hidden" />
                        <div className="h-[22px] w-[89px] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-px box-border">
                          <div className="mb-[-1px] h-[23px] relative leading-[16px] font-semibold inline-block shrink-0 z-[1]">
                            Doctor
                          </div>
                        </div>
                        <div className="h-[22px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                          <div className="mb-[-1px] h-[23px] relative leading-[16px] font-semibold inline-block shrink-0 z-[1]">
                            Status
                          </div>
                        </div>
                        <div className="h-[22px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                          <div className="mb-[-1px] h-[23px] relative leading-[16px] font-semibold inline-block shrink-0 z-[1]">
                            Ratings
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[23px_0px] max-w-full text-gray-300">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px] max-w-full">
                          <div className="w-[683px] flex flex-row items-start justify-start py-0 px-[35px] box-border max-w-full">
                            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                              <div className="flex flex-row items-center justify-start py-0 pr-3 pl-0 gap-[0px_4px]">
                                <img
                                  className="h-8 w-8 relative rounded-31xl overflow-hidden shrink-0 object-cover z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/12@2x.png"
                                />
                                <div className="relative leading-[16px] font-semibold z-[1]">
                                  Bluenose
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pr-px pl-0 text-seagreen">
                                <div className="rounded bg-honeydew flex flex-row items-center justify-center p-1 z-[1]">
                                  <div className="relative leading-[16px]">
                                    Verified
                                  </div>
                                </div>
                              </div>
                              <div className="h-[41px] w-[245px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-dimgray">
                                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[0px_9px]">
                                  <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
                                    <div className="self-stretch h-[5.8px] relative rounded bg-whitesmoke-200 z-[1]">
                                      <div className="absolute top-[-0.5px] left-[0.4px] rounded bg-whitesmoke-200 w-full h-full hidden" />
                                      <div className="absolute top-[-0.5px] left-[0.4px] rounded bg-dimgray w-[59.3px] h-[5.8px] z-[1]" />
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start py-0 pr-[13px] pl-0">
                                    <div className="h-[34px] relative leading-[24px] inline-block shrink-0 z-[1]">
                                      40%
                                    </div>
                                  </div>
                                  <div className="rounded bg-honeydew flex flex-row items-center justify-start p-1 gap-[0px_2px] z-[1] text-seagreen">
                                    <img
                                      className="h-3 w-3 relative"
                                      alt=""
                                      src="/vuesaxlineararrowup.svg"
                                    />
                                    <div className="relative leading-[16px]">
                                      4%
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="self-stretch h-[3.8px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="w-[697px] flex flex-col items-center justify-start gap-[21px_0px] max-w-full">
                          <div className="w-[667px] flex flex-row items-start justify-start py-0 pr-[35px] pl-5 box-border max-w-full shrink-0">
                            <div className="flex-1 flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border max-w-full gap-[20px] mq750:flex-wrap">
                              <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                                <img
                                  className="h-8 w-8 relative rounded-[50%] object-cover z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/ellipse-3@2x.png"
                                />
                                <div className="relative leading-[16px] font-semibold z-[1]">
                                  Pennywise
                                </div>
                              </div>
                              <div className="rounded bg-lemonchiffon flex flex-row items-center justify-center p-1 z-[1] text-olive">
                                <div className="relative leading-[16px]">
                                  Pending
                                </div>
                              </div>
                              <div className="h-[35px] w-[245px] flex flex-row items-start justify-start gap-[0px_9px] text-dimgray">
                                <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
                                  <div className="self-stretch h-[5.8px] relative rounded bg-whitesmoke-200 z-[1]">
                                    <div className="absolute top-[-0.5px] left-[0.4px] rounded bg-whitesmoke-200 w-full h-full hidden" />
                                    <div className="absolute top-[-0.5px] left-[0.4px] rounded bg-dimgray w-[84.5px] h-[5.8px] z-[1]" />
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                                  <div className="h-[34px] relative leading-[24px] inline-block shrink-0 z-[1]">
                                    57%
                                  </div>
                                </div>
                                <div className="rounded bg-mistyrose flex flex-row items-center justify-start p-1 gap-[0px_2px] z-[1] text-indianred">
                                  <img
                                    className="h-3 w-3 relative object-contain"
                                    alt=""
                                    src="/vuesaxlineararrowup-1.svg"
                                  />
                                  <div className="relative leading-[16px]">
                                    8%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="self-stretch h-[1.3px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="w-[688px] flex flex-row items-start justify-start py-0 pr-9 pl-[35px] box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                            <div className="flex flex-row items-center justify-start py-0 pr-[19px] pl-0 gap-[0px_5px]">
                              <img
                                className="h-8 w-8 relative rounded-31xl overflow-hidden shrink-0 object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/12-1@2x.png"
                              />
                              <div className="relative leading-[16px] font-semibold z-[1]">
                                Flotsam
                              </div>
                            </div>
                            <div className="rounded bg-honeydew flex flex-row items-center justify-center p-1 z-[1] text-seagreen">
                              <div className="relative leading-[16px]">
                                Verified
                              </div>
                            </div>
                            <div className="h-[35px] w-[250px] flex flex-row items-start justify-start gap-[0px_9px]">
                              <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
                                <div className="self-stretch h-[5.8px] relative rounded bg-whitesmoke-200 z-[1]">
                                  <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-200 w-full h-full hidden" />
                                  <div className="absolute top-[0px] left-[0px] rounded bg-dimgray w-[132px] h-[5.8px] z-[1]" />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pr-[13px] pl-0">
                                <div className="h-[34px] relative leading-[24px] inline-block shrink-0 z-[1]">
                                  89%
                                </div>
                              </div>
                              <div className="rounded bg-honeydew flex flex-row items-center justify-start p-1 gap-[0px_2px] z-[1] text-seagreen">
                                <img
                                  className="h-3 w-3 relative"
                                  alt=""
                                  src="/vuesaxlineararrowup.svg"
                                />
                                <div className="relative leading-[16px]">
                                  19%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-1 box-border gap-[16px_0px] max-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[19px_0px] max-w-full">
                            <img
                              className="self-stretch h-[5px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                              loading="lazy"
                              alt=""
                            />
                            <div className="w-[519px] flex flex-row items-start justify-start py-0 pr-2.5 pl-[9px] box-border max-w-full">
                              <div className="flex-1 flex flex-row items-start justify-between py-0 pr-1 pl-0 box-border max-w-full gap-[20px] mq450:flex-wrap">
                                <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                                  <img
                                    className="h-8 w-8 relative rounded-[50%] object-cover z-[1]"
                                    loading="lazy"
                                    alt=""
                                    src="/ellipse-3-1@2x.png"
                                  />
                                  <div className="relative leading-[16px] font-semibold z-[1]">
                                    Gregautsch
                                  </div>
                                </div>
                                <div className="rounded bg-gray-200 flex flex-row items-center justify-center py-1 pr-px pl-1 z-[1] text-darkgray-300">
                                  <div className="relative leading-[16px] whitespace-nowrap">
                                    Unverified
                                  </div>
                                </div>
                                <div className="h-[34.7px] w-[151.8px] relative leading-[24px] inline-block shrink-0 z-[1]">
                                  No ratings available
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="self-stretch h-[3.4px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="w-[684px] flex flex-row items-start justify-start py-0 pr-9 pl-[35px] box-border max-w-full">
                          <div className="flex-1 flex flex-row items-start justify-between py-0 pr-[3px] pl-0 box-border max-w-full gap-[20px] mq750:flex-wrap">
                            <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                              <img
                                className="h-8 w-8 relative rounded-[50%] object-cover z-[1]"
                                loading="lazy"
                                alt=""
                                src="/ellipse-3-2@2x.png"
                              />
                              <div className="relative leading-[16px] font-semibold z-[1]">
                                ElPistolero
                              </div>
                            </div>
                            <div className="rounded bg-honeydew flex flex-row items-center justify-center p-1 z-[1] text-seagreen">
                              <div className="relative leading-[16px]">
                                Verified
                              </div>
                            </div>
                            <div className="w-[246px] flex flex-row items-start justify-start gap-[0px_9px] text-dimgray">
                              <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
                                <div className="self-stretch h-[5.8px] relative rounded bg-whitesmoke-200 z-[1]">
                                  <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-200 w-full h-full hidden" />
                                  <div className="absolute top-[0px] left-[0px] rounded bg-dimgray w-[74.2px] h-[5.8px] z-[1]" />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pr-[13px] pl-0">
                                <div className="h-[34px] relative leading-[24px] inline-block shrink-0 z-[1]">
                                  50%
                                </div>
                              </div>
                              <div className="rounded bg-mistyrose flex flex-row items-center justify-start p-1 gap-[0px_2px] z-[1] text-indianred">
                                <img
                                  className="h-3 w-3 relative object-contain"
                                  alt=""
                                  src="/vuesaxlineararrowup-1.svg"
                                />
                                <div className="relative leading-[16px]">
                                  6%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="self-stretch h-[0.2px] relative max-w-full overflow-hidden shrink-0 object-contain"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-[682px] flex flex-row items-start justify-start py-0 pr-9 pl-[35px] box-border max-w-full text-xs text-gray-300">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                    <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[0px_7px]">
                      <img
                        className="h-8 w-8 relative rounded-31xl overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/2-indian-man@2x.png"
                      />
                      <div className="relative leading-[16px] font-semibold">
                        Siuuuuuuuu
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[7px] pl-0 text-olive">
                      <div className="rounded bg-lemonchiffon flex flex-row items-center justify-center p-1">
                        <div className="relative leading-[16px]">Pending</div>
                      </div>
                    </div>
                    <div className="w-[244px] flex flex-row items-start justify-start gap-[0px_6px]">
                      <div className="flex-1 flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
                        <div className="self-stretch h-[5.8px] relative rounded bg-whitesmoke-200">
                          <div className="absolute top-[0px] left-[0px] rounded bg-whitesmoke-200 w-full h-full hidden" />
                          <div className="absolute top-[0px] left-[0px] rounded bg-dimgray w-[94.9px] h-[5.8px] z-[1]" />
                        </div>
                      </div>
                      <div className="w-[45px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border">
                        <div className="w-[38.6px] h-[34.7px] relative leading-[24px] inline-block shrink-0">
                          64%
                        </div>
                      </div>
                      <div className="rounded bg-honeydew flex flex-row items-center justify-start p-1 gap-[0px_2px] text-seagreen">
                        <img
                          className="h-3 w-3 relative"
                          loading="lazy"
                          alt=""
                          src="/vuesaxlineararrowup.svg"
                        />
                        <div className="relative leading-[16px]">7%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-t-none rounded-b bg-whitesmoke-100 overflow-x-auto flex flex-row items-center justify-start pt-8 px-6 pb-10 gap-[24px] text-xs">
                <div className="h-[92.5px] w-[741px] relative rounded-t-none rounded-b bg-whitesmoke-100 shrink-0 hidden" />
                <div className="relative leading-[16px] font-semibold text-darkgray-200 z-[1]">
                  Previous page
                </div>
                <div className="h-5 w-[188px] shrink-0 flex flex-row items-start justify-start gap-[0px_8px] z-[1]">
                  <div className="flex-1 flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 relative">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro" />
                      <div className="absolute top-[13.5%] left-[35%] leading-[16px] font-semibold z-[1]">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="w-5 h-5 relative rounded-[50%] bg-gainsboro" />
                      <div className="relative leading-[16px] font-semibold z-[1] mt-[-18px]">
                        2
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="w-5 h-5 relative rounded-[50%] bg-gainsboro" />
                      <div className="relative leading-[16px] font-semibold z-[1] mt-[-18px]">
                        3
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="w-5 h-5 relative rounded-[50%] bg-gainsboro" />
                      <div className="relative leading-[16px] font-semibold z-[1] mt-[-18px]">
                        4
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="w-5 h-5 relative rounded-[50%] bg-gainsboro" />
                      <div className="relative leading-[16px] font-semibold z-[1] mt-[-18px]">
                        5
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="w-5 h-5 relative rounded-[50%] bg-gainsboro" />
                      <div className="relative leading-[16px] font-semibold z-[1] mt-[-18px]">
                        6
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="self-stretch flex flex-col items-center justify-start">
                      <div className="w-5 h-5 relative rounded-[50%] bg-gainsboro" />
                      <div className="relative leading-[16px] font-semibold z-[1] mt-[-18px]">
                        7
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative leading-[16px] font-semibold z-[1]">
                  Next page
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-[234px] flex flex-col items-start justify-start pt-[60px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <div className="flex flex-row items-center justify-start gap-[0px_8px]">
              <img
                className="h-10 w-10 relative rounded-[50%] object-cover"
                loading="lazy"
                alt=""
                src="/ellipse-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[4px_0px]">
                <div className="relative leading-[16px] font-semibold">
                  Nabaneet Dutta
                </div>
                <div className="relative leading-[16px] font-medium text-darkgray-100">
                  Admin
                </div>
              </div>
            </div>
            <div className="h-10 w-10 rounded-31xl bg-whitesmoke-200 flex flex-row items-start justify-start p-2 box-border">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/vuesaxlinearnotification.svg"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="relative leading-[16px] font-semibold hidden">
        Flotsam
      </div>
      <div className="w-[51px] rounded bg-honeydew hidden flex-row items-start justify-start p-1 box-border text-seagreen">
        <div className="self-stretch relative leading-[16px] hidden">
          Verified
        </div>
      </div>
      <div className="w-[41.3px] relative leading-[24px] hidden h-[34.7px] shrink-0">
        89%
      </div>
      <div className="w-[45px] rounded bg-honeydew hidden flex-row items-center justify-center p-1 box-border gap-[0px_2px] text-seagreen">
        <img
          className="h-3 w-3 relative hidden"
          alt=""
          src="/vuesaxlineararrowup.svg"
        />
        <div className="self-stretch relative leading-[16px] hidden">19%</div>
      </div>
      <div className="w-[63.5px] relative leading-[16px] hidden h-[23.1px] shrink-0">
        40,000
      </div>
      <div className="w-[98.4px] relative leading-[16px] hidden h-[23.1px] shrink-0 whitespace-nowrap">
        $1,400,000
      </div>
      <div className="relative leading-[16px] font-semibold hidden">
        Gregautsch
      </div>
      <div className="w-[65px] rounded bg-gray-200 hidden flex-row items-start justify-start p-1 box-border text-darkgray-300">
        <div className="self-stretch relative leading-[16px] hidden">
          Unverified
        </div>
      </div>
      <div className="w-[171.4px] relative leading-[24px] hidden h-[34.7px] shrink-0">
        No ratings available
      </div>
      <div className="w-[12.7px] relative leading-[16px] hidden h-[23.1px] shrink-0">
        0
      </div>
      <div className="w-[23.8px] relative leading-[16px] hidden h-[23.1px] shrink-0 whitespace-nowrap">
        $0
      </div>
      <div className="relative leading-[16px] font-semibold hidden">
        ElPistolero
      </div>
      <div className="w-[51px] rounded bg-honeydew hidden flex-row items-start justify-start p-1 box-border text-seagreen">
        <div className="self-stretch relative leading-[16px] hidden">
          Verified
        </div>
      </div>
      <div className="w-[41.3px] relative leading-[24px] text-dimgray hidden h-[34.7px] shrink-0">
        50%
      </div>
      <div className="w-[41px] rounded bg-mistyrose hidden flex-row items-center justify-center p-1 box-border gap-[0px_2px] text-indianred">
        <img
          className="h-3 w-3 relative object-contain hidden"
          alt=""
          src="/vuesaxlineararrowup-1.svg"
        />
        <div className="self-stretch relative leading-[16px] hidden">6%</div>
      </div>
      <div className="w-[22.2px] relative leading-[16px] hidden h-[23.1px] shrink-0">
        30
      </div>
      <div className="w-[73px] relative leading-[16px] hidden h-[23.1px] shrink-0 whitespace-nowrap">
        $25,000
      </div>
      <div className="relative leading-[16px] font-semibold hidden">
        Siuuuuuuuu
      </div>
      <div className="w-[51px] rounded bg-honeydew hidden flex-row items-start justify-start p-1 box-border text-seagreen">
        <div className="self-stretch relative leading-[16px] hidden">
          Verified
        </div>
      </div>
      <div className="w-[41.3px] relative leading-[24px] hidden h-[34.7px] shrink-0">
        64%
      </div>
      <div className="w-[1400px] flex flex-row items-start justify-center py-0 px-5 box-border min-h-[443px] max-w-full shrink-0">
        <div className="h-[382px] w-[1176px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[23px_0px] max-w-full mq1050:h-auto">
          <FrameComponent />
          <LinkedLinesFrame />
          <BlankFrame />
          <div className="w-[629px] h-8 flex flex-row items-start justify-start py-0 px-[38px] box-border max-w-full">
            <div className="h-0 w-0 relative">
              <img
                className="absolute top-[NaNpx] left-[NaNpx] rounded-31xl w-8 h-8 overflow-hidden object-cover hidden"
                alt=""
                src="/2-indian-man@2x.png"
              />
              <div className="absolute top-[NaNpx] left-[NaNpx] w-40 h-3 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                <div className="self-stretch h-[5.8px] relative hidden">
                  <div className="absolute top-[NaNpx] left-[NaNpx] rounded bg-whitesmoke-200 w-full h-full hidden" />
                  <div className="absolute top-[NaNpx] left-[NaNpx] rounded bg-dimgray w-[101.6px] h-[5.8px] hidden z-[1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[39px] rounded bg-honeydew hidden flex-row items-center justify-center p-1 box-border gap-[0px_2px] text-seagreen">
        <img
          className="h-3 w-3 relative hidden"
          alt=""
          src="/vuesaxlineararrowup.svg"
        />
        <div className="self-stretch relative leading-[16px] hidden">7%</div>
      </div>
      <div className="w-[34.9px] relative leading-[16px] hidden h-[23.1px] shrink-0">
        400
      </div>
      <div className="w-[85.7px] relative leading-[16px] hidden h-[23.1px] shrink-0 whitespace-nowrap">
        $400,000
      </div>
    </div>
   </>
  )
}

export default Admin_Home