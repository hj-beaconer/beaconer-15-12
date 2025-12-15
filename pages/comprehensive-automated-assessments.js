"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/automated.module.css";
import Description from "../Components/FormElement/Description";
import Button from "../Components/FormElement/Button";
import useAutomate from "../hooks/automate";
import { marked } from "marked";
import { useRouter } from "next/navigation";
import { AutomatedSeoQuery } from "../Utils/seoEndponts";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";
import { bg_lines, grid } from "../Utils/images";
import Image from "next/image";

const automated = ({ Data, fullUrl, setIsPageLoaded }) => {
  const router = useRouter();
  const { getAutomate } = useAutomate();
  const [AutomateData, setAutomateData] = useState();
  const getAutomateData = async () => {
    try {
      const response = await getAutomate();
      setAutomateData(response.data.data[0]);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAutomateData();
  }, []);

  return (
    <>
      {AutomateData && (
        <div className="margin_div_children">
          <div className="relative">
            {Data && (
              <SEO
                title={Data[0].seo.metaTitle}
                description={Data[0].seo.metaDescription}
                imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${Data[0].seo.shareImage.url}`}
                canonicalUrl={Data[0].seo.Canonical_Url}
                fullUrl={fullUrl}
              />
            )}

            <div className="absolute  lg:w-[3415px] lg:h-[3206px] -translate-x-1/2 lg:-translate-y-[75%] bg-[radial-gradient(circle,#0EAACDCC_0%,rgba(218,231,234,0)_50%,rgba(255,255,255,0)_100%)] z-0 w-[1250px] h-[1250px] left-1/2 -translate-y-[70%]"></div>
            <Image src={bg_lines} className="absolute -top-44" />
            <div
              className={`${style.main_container_div_for_nextgen} !mx-[5%] md:!mx-[8%]`}
            >
              <div className={style.main_div_for_content}>
                <h2
                  className={`${style.class_for_heading_discover} fw-bold `}
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "56px",
                    lineHeight: "70px",
                  }}
                >
                  {AutomateData
                    ? AutomateData.Reports_Fingertips_Hero_Section
                        .Reports_Fingertips_Hero_Section_Title
                    : "Automated Third-Party Assessment Reports at Your Fingertips"}
                </h2>

                <Description
                  className={`mt-3 ${style.main_description_data}`}
                  text={
                    AutomateData
                      ? AutomateData.Reports_Fingertips_Hero_Section
                          .Reports_Fingertips_Hero_Section_Description
                      : "Our solution handles third-party assessments for you, delivering detailed yet easy-to-understand reports. No more spending days gathering details, sifting through endless evidence, or manually drafting reports—Beaconer eliminates the effort entirely."
                  }
                />
              </div>
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                  AutomateData &&
                  AutomateData.Reports_Fingertips_Hero_Section
                    .Reports_Fingertips_Hero_Section_Image.url
                }`}
                alt="Autometedpage"
                width={555}
                height={555}
                loading="lazy"
                fetchpriority="high"
              />
            </div>

            {AutomateData &&
              AutomateData.Reports_Fingertips_Feature_Section.map(
                (item, index) => (
                  <div className={style.main_for_Dark_Web_twoA} key={index}>
                    <div className={style.main_image_container}>
                      <img
                        alt="FinullImage"
                        className={style.main_div_for_videoPlay_two_img_left}
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Reports_Fingertips_Feature_Section_Image.url}`}
                        loading="lazy"
                        fetchpriority="high"
                      />
                      <div className="md:w-60 w-32 h-32 md:h-60 -z-1 opacity-50 rounded-full bg-[#F07A72CC] blur-3xl lg:blur-[154px] absolute top-1/2 left-0 -translate-x-[20%] -translate-y-1/2 "></div>
                      <div className={style.main_div_for_crosh_harf_left}></div>
                    </div>
                    <div className={style.main_for_Cutting_div}>
                      <div
                        className={style.main_title_external}
                        dangerouslySetInnerHTML={{
                          __html: marked(
                            item?.Reports_Fingertips_Feature_Section_Title
                          ),
                        }}
                      />
                      <Description
                        className={style.main_description_data}
                        text={
                          item
                            ? item
                                .Reports_Fingertips_Feature_Section_Description[0]
                                ?.children[0]?.text
                            : "Our assessment reports feature detailed visual mappings of key security compliance, attack frameworks, and privacy requirements, providing invaluable insights for highly regulated industries."
                        }
                      />
                    </div>
                  </div>
                )
              )}

            <div className={style.main_div_title_description}>
              <div className={style.div_for_experience_unpralleled}>
                <div>
                  <div className="row">
                    <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                      {AutomateData && (
                        <>
                          <div
                            className="text-xl/8  font-bold md:text-[40px]/[1.2] "
                            style={{
                              fontFamily: "Raleway",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: marked(
                                AutomateData.CTA_Section.CTA_Section_Heading
                              ),
                            }}
                          ></div>
                          <Button
                            className={style.button_text_div}
                            text={
                              AutomateData
                                ? AutomateData.CTA_Section
                                    .CTA_Section_Button_Text
                                : "JOIN NOW"
                            }
                            onClick={() =>
                              router.push(
                                AutomateData
                                  ? AutomateData.CTA_Section
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
export const getServerSideProps = getServerSidePropsWithData(AutomatedSeoQuery);

export default automated;
