"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/cuttingedge.module.css";
import Description from "../Components/FormElement/Description";
import Button from "../Components/FormElement/Button";
import Image from "next/image";
import { bg_numbers, Cutting, darkweb_1, grid } from "../Utils/images";
import { handleOpenCalendly } from "../Components/calendlyUtils";
import useCuttingEdge from "../hooks/cuttingedge";
import { marked } from "marked";
import { useRouter } from "next/navigation";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";
import { CuttingEdgeSeoQuery } from "../Utils/seoEndponts";

export const getServerSideProps =
  getServerSidePropsWithData(CuttingEdgeSeoQuery);

const cuttingedge = ({ Data, fullUrl, setIsPageLoaded }) => {
  const router = useRouter();
  const { getcuttingedge } = useCuttingEdge();
  const [cuttingEdgeData, setCuttingEdgeData] = useState();
  const getCuttingEdgeData = async () => {
    try {
      const response = await getcuttingedge();
      setCuttingEdgeData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCuttingEdgeData();
  }, []);
  return (
    <>
      {cuttingEdgeData && (
        <div className="margin_div_children">
          <div className="relative">
            {Data && (
              <SEO
                title={Data[0].seo.metaTitle}
                description={Data[0].seo.metaDescription}
                imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${Data[0].seo.shareImage.url}`}
                fullUrl={fullUrl}
                canonicalUrl={Data[0].seo.Canonical_Url}
              />
            )}

            <div className="absolute  lg:w-[3415px] lg:h-[3206px] -translate-x-1/2 lg:-translate-y-[75%] bg-[radial-gradient(circle,#0EAACDCC_0%,rgba(218,231,234,0)_50%,rgba(255,255,255,0)_100%)] z-0 w-[1250px] h-[1250px] left-1/2 -translate-y-[70%]"></div>
            <Image src={bg_numbers} className="absolute -top-36" />

            {cuttingEdgeData && (
              <div className={style.main_for_Dark_Web_two}>
                <img
                  className={style.main_div_for_videoPlay_two}
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${cuttingEdgeData[0]?.Dark_Web_Intelligence_Hero_Section.Dark_Web_Intelligence_Hero_Section_Image.url}`}
                  alt="Logo"
                  loading="lazy"
                  fetchpriority="high"
                />

                <div className={`${style.main_for_Cutting_div_top}`}>
                  <div className={style.main_title_external11}>
                    {
                      cuttingEdgeData[0]?.Dark_Web_Intelligence_Hero_Section
                        .Dark_Web_Intelligence_Hero_Section_Main_Title
                    }
                  </div>
                  <Description
                    className={style.main_description_div}
                    text={
                      cuttingEdgeData[0]?.Dark_Web_Intelligence_Hero_Section
                        .Dark_Web_Intelligence_Hero_Section_Description
                    }
                  />
                  <Button
                    className={style.ButtonCoutingEde}
                    text={"Get Started"}
                    onClick={() => handleOpenCalendly()}
                  />
                </div>
              </div>
            )}

            {cuttingEdgeData && (
              <div className={style.main_div_darkweb}>
                <div className={style.main_div_for_title}>
                  <div
                    className={style.main_div_for_hading}
                    dangerouslySetInnerHTML={{
                      __html: marked(
                        cuttingEdgeData[0]?.Dark_Web_Intelligence_Main_Feature
                          .Dark_Web_Intelligence_Main_Title
                      ),
                    }}
                  ></div>
                </div>
                <div className={style.back_image}></div>
                <video
                  className={style.main_div_for_videoPlay_Frist}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  loading="lazy"
                >
                  <source
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${cuttingEdgeData[0]?.Dark_Web_Intelligence_Main_Feature.Dark_Web_Intelligence_Video.url}`}
                    type="video/mp4"
                  />
                </video>
              </div>
            )}

            {cuttingEdgeData &&
              cuttingEdgeData[0]?.Dark_Web_Intelligence_Feature_Section.map(
                (item, index) => {
                  return (
                    <div className={style.main_for_Dark_Web_twoA} key={index}>
                      <div className={style.main_image_container}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                            item &&
                            item.Dark_Web_Intelligence_Feature_Section_Image.url
                          }`}
                          alt="FinullImage"
                          loading="lazy"
                          fetchpriority="high"
                          className="w-full relative z-10"
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
                              item &&
                                item.Dark_Web_Intelligence_Feature_Section_Title
                            ),
                          }}
                        ></div>
                        <Description
                          className={style.main_description_data}
                          text={
                            item &&
                            item
                              .Dark_Web_Intelligence_Feature_Section_Description[0]
                              ?.children[0]?.text
                          }
                        />
                      </div>
                    </div>
                  );
                }
              )}

            <div className={style.main_div_title_description}>
              <div className={style.div_for_experience_unpralleled}>
                <div>
                  <div className="row">
                    <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                      {cuttingEdgeData && (
                        <>
                          <div
                            className="text-xl/8  font-bold md:text-[40px]/[1.2] "
                            style={{
                              fontFamily: "Raleway",
                              fontSize: "40px",
                              lineHeight: "1.2",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: marked(
                                cuttingEdgeData[0].CTA_Section
                                  .CTA_Section_Heading
                              ),
                            }}
                          ></div>
                          <Button
                            className={style.button_text_div}
                            text={
                              cuttingEdgeData
                                ? cuttingEdgeData[0].CTA_Section
                                    .CTA_Section_Button_Text
                                : "GET STARTED"
                            }
                            onClick={() =>
                              router.push(
                                cuttingEdgeData
                                  ? cuttingEdgeData[0].CTA_Section
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
        </div>
      )}
    </>
  );
};

export default cuttingedge;
