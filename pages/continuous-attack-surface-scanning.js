"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/nextgen.module.css";
import Description from "../Components/FormElement/Description";
import Button from "../Components/FormElement/Button";
import useNextGen from "../hooks/nextgen";
import { marked } from "marked";
import { useRouter } from "next/navigation";
import { NextGenSeoQuery } from "../Utils/seoEndponts";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";
import Image from "next/image";
import { bg_dots, grid } from "../Utils/images";

const nextgen = ({ Data, fullUrl, setIsPageLoaded }) => {
  const { getnextgen } = useNextGen();
  const router = useRouter();
  const [nextGenData, setNextGenData] = useState();
  const getNextGenData = async () => {
    try {
      const response = await getnextgen();
      setNextGenData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getNextGenData();
  }, []);
  return (
    <>
      {nextGenData && (
        <>
          <div className="relative mt-32">
            {Data && (
              <SEO
                title={Data[0].seo.metaTitle}
                description={Data[0].seo.metaDescription}
                imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${Data[0].seo.shareImage.url}`}
                fullUrl={fullUrl}
                canonicalUrl={Data[0].seo.Canonical_Url}
              />
            )}
            {nextGenData && (
              <>
                <div className="absolute  lg:w-[3415px] lg:h-[3206px] -translate-x-1/2 lg:-translate-y-[75%] bg-[radial-gradient(circle,#0EAACDCC_0%,rgba(218,231,234,0)_50%,rgba(255,255,255,0)_100%)] z-0 w-[1250px] h-[1250px] left-1/2 -translate-y-[70%]"></div>
                <Image src={bg_dots} className="absolute -top-36" />
                <div
                  className={`${style.main_container_div_for_nextgen} !mx-[5%] md:!mx-[8%] relative`}
                >
                  <div className={style.main_div_for_content}>
                    <h2
                      className={`${style.class_for_heading_discover} fw-bold `}
                      style={{
                        fontFamily: "Raleway",
                        fontSize: "56px",
                        lineHeight: "50px",
                      }}
                    >
                      {nextGenData
                        ? nextGenData[0]
                            ?.Real_Time_Surface_Scanning_Hero_Section
                            .Real_Time_Surface_Scanning_Hero_Section_Main_Title
                        : " Discover a new way of conducting Third-party Risk assessment"}
                    </h2>

                    <Description
                      className={`mt-3 ${style.main_description_data}`}
                      text={
                        nextGenData
                          ? nextGenData[0]
                              ?.Real_Time_Surface_Scanning_Hero_Section
                              .Real_Time_Surface_Scanning_Hero_Section_Description[0]
                              ?.children[0]?.text
                          : "Conduct the real-time external scan and identify the open vulnerabilities. This innovative method ensures you receive immediate notifications for any changes in a vendor’s risk profile, keeping you constantly updated"
                      }
                    />
                  </div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${nextGenData[0]?.Real_Time_Surface_Scanning_Hero_Section.Real_Time_Surface_Scanning_Hero_Section_Image.url}`}
                    alt="Illustration"
                    width={555}
                    height={555}
                    loading="lazy"
                    fetchpriority="high"
                  />
                </div>

                {nextGenData[0]?.Real_Time_Surface_Scanning_Feature_Section.map(
                  (item, index) => {
                    return (
                      <div className={style.main_for_Dark_Web_twoA} key={index}>
                        <div className={style.main_image_container}>
                          <img
                            className={
                              style.main_div_for_videoPlay_two_img_left
                            }
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.Real_Time_Surface_Scanning_Feature_Section_Image.url}`}
                            alt="FinullImage"
                            loading="lazy"
                            fetchpriority="high"
                          />
                          <div className="md:w-60 w-32 h-32 md:h-60 -z-1 opacity-50 rounded-full bg-[#F07A72CC] blur-3xl lg:blur-[154px] absolute top-1/2 left-0 -translate-x-[20%] -translate-y-1/2 "></div>

                          <div
                            className={style.main_div_for_crosh_harf_left}
                          ></div>
                        </div>
                        <div className={style.main_for_Cutting_div}>
                          <div
                            className={style.main_title_external}
                            dangerouslySetInnerHTML={{
                              __html: marked(
                                item?.Real_Time_Surface_Scanning_Feature_Section_Main_Heading
                              ),
                            }}
                          ></div>
                          <Description
                            className={style.main_description_data}
                            text={
                              item
                                ?.Real_Time_Surface_Scanning_Feature_Section_Description[0]
                                ?.children[0]?.text
                            }
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </>
            )}
            <div className={style.main_div_title_description}>
              <div className={style.div_for_experience_unpralleled}>
                <div>
                  <div className="row">
                    <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                      {nextGenData && (
                        <>
                          <div
                            className="text-xl/8  font-bold md:text-[40px]/[1.2]  "
                            style={{
                              fontFamily: "Raleway",
                              fontSize: "40px",
                              lineHeight: "1.2",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: marked(
                                nextGenData[0].CTA_Section.CTA_Section_Heading
                              ),
                            }}
                          ></div>
                          <Button
                            className={style.button_text_div}
                            text={
                              nextGenData
                                ? nextGenData[0].CTA_Section
                                    .CTA_Section_Button_Text
                                : "GET STARTED"
                            }
                            onClick={() =>
                              router.push(
                                nextGenData
                                  ? nextGenData[0].CTA_Section
                                      .CTA_Section_Button_Reidrect_Url
                                  : "/contact"
                              )
                            }
                          />
                        </>
                      )}
                    </div>
                  </div>

                  <div className={style.circle_design}></div>
                </div>
              </div>
            </div>

            <Image
              src={grid}
              alt="bg image"
              className="absolute -z-1 -bottom-[130px] lg:-bottom-[260px] w-full"
            />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1187px] h-[443px] rounded-[400px] bg-[#F36036] opacity-40 blur-[254px]"></div>
        </>
      )}
    </>
  );
};
export const getServerSideProps = getServerSidePropsWithData(NextGenSeoQuery);

export default nextgen;
