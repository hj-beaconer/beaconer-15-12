import React, { useEffect, useState } from "react";
import {
  bg_rapid,
  feature_bg,
  grid,
  slider_image_1,
  slider_image_2,
  slider_image_3,
  slider_image_4,
} from "../Utils/images";
import { useRouter } from "next/router";
import useRapid from "../hooks/rapidassesments";
import Button from "../Components/FormElement/Button";
import Slider from "react-slick";
import Image from "next/image";
import style from "../styles/rapidassesment.module.css";
import { marked } from "marked";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Description from "../Components/FormElement/Description";
import { RapidAssessmentSeoQuery } from "../Utils/seoEndponts";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";

const rapidassesment = ({ Data, fullUrl, setIsPageLoaded }) => {
  const router = useRouter();

  const { getrapid } = useRapid();
  const [RapidData, setRapidData] = useState();
  const getRapidData = async () => {
    try {
      const response = await getrapid();
      setRapidData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getRapidData();
  }, []);

  var settings = {
    dots: false,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderImages = [
    { url: slider_image_1 },
    { url: slider_image_2 },
    { url: slider_image_3 },
    { url: slider_image_4 },
    { url: slider_image_1 },
    { url: slider_image_2 },
    { url: slider_image_3 },
  ];

  return (
    <>
      {RapidData && (
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

            <div className="absolute  lg:w-[3415px] lg:h-[3206px] -translate-x-1/2 lg:-translate-y-[70%] bg-[radial-gradient(circle,#0EAACDCC_0%,rgba(218,231,234,0)_50%,rgba(255,255,255,0)_100%)] z-0 w-[1250px] h-[1250px] left-1/2 -translate-y-[70%]"></div>
            <Image src={bg_rapid} className="absolute top-0" />
            <div className={`relative ${style.center_div}`}>
              {RapidData && (
                <div className={style.solution_heading_top_container}>
                  <div className={style.solution_heading_top_first}>
                    {RapidData
                      ? RapidData[0]?.Rapid_Assessments_Hero_Section_Sub_Heading
                      : "Sit back and relax, let us handle"}
                  </div>
                  <div className={style.solution_heading_top_second}>
                    {RapidData
                      ? RapidData[0]
                          ?.Rapid_Assessments_Hero_Section_Main_Heading
                      : "every aspect of Third-Party Risk"}
                  </div>
                  <div className={style.solution_heading_top_para}>
                    {RapidData
                      ? RapidData[0]
                          ?.Rapid_Assessments_Hero_Section_Description[0]
                          ?.children[0]?.text
                      : " Beaconer automates your entire Third-Party Risk journey, from onboarding and assessments to real-time monitoring and remediation, ensuring complete and seamless protection."}
                  </div>
                  <Button
                    text={"Get Started"}
                    onClick={() => handleOpenCalendly()}
                  ></Button>
                </div>
              )}
              <div className={style.slider_container}>
                <Slider {...settings}>
                  {RapidData
                    ? RapidData[0]?.Rapid_Assessment_Hero_Section_Images.map(
                        (item, index) => {
                          return (
                            <img
                              key={index}
                              className={style.slider_images}
                              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Logo?.url}`}
                              alt="Sliderimage"
                              loading="lazy"
                              fetchpriority="high"
                            />
                          );
                        }
                      )
                    : sliderImages.map((item, index) => (
                        <Image
                          key={index}
                          alt="Sliderimage"
                          className={style.slider_images}
                          src={item.url}
                        />
                      ))}
                </Slider>
              </div>
            </div>

            {RapidData &&
              RapidData[0]?.Rapid_Assessment_Feature_Section.map(
                (item, index) => {
                  return (
                    <div className={style.main_for_Dark_Web_twoA} key={index}>
                      <div className={style.main_image_container}>
                        <div className={style.image_div_container}>
                          <div className="relative z-10">
                            {item?.Rapid_Assessment_Feature_section_Image_Title && (
                              <div
                                className={style.image_heading}
                                dangerouslySetInnerHTML={{
                                  __html: marked(
                                    item.Rapid_Assessment_Feature_section_Image_Title
                                  ),
                                }}
                              ></div>
                            )}
                            <img
                              className={
                                style.main_div_for_videoPlay_two_img_left
                              }
                              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.Rapid_Assessment_Feature_section_Image.url}`}
                              alt="FinullImage"
                              loading="lazy"
                              fetchpriority="high"
                            />
                          </div>
                          <div className="md:w-60 w-32 h-32 md:h-60 -z-1 opacity-50 rounded-full bg-[#F07A72CC] blur-3xl lg:blur-[154px] absolute top-1/2 left-0 -translate-x-[20%] -translate-y-1/2 "></div>
                        </div>
                        <div
                          className={style.main_div_for_crosh_harf_left}
                        ></div>
                      </div>
                      <div className={style.main_for_Cutting_div}>
                        <div
                          className={style.main_title_external}
                          dangerouslySetInnerHTML={{
                            __html: marked(
                              item?.Rapid_Assessment_Feature_section_Main_Title
                            ),
                          }}
                        ></div>
                        <Description
                          className={style.main_description_data}
                          text={
                            item?.Rapid_Assessment_Feature_section_Description
                          }
                        />
                        <Image
                          src={feature_bg}
                          alt=""
                          className="absolute transform -translate-y-1/2 hidden lg:block"
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
                      {RapidData && (
                        <>
                          <div
                            className="text-xl/8  font-bold md:text-[40px]/[1.2] "
                            style={{
                              fontFamily: "Raleway",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: marked(
                                RapidData[0].CTA_Section.CTA_Section_Heading
                              ),
                            }}
                          ></div>
                          <Button
                            className={style.button_text_div}
                            text={
                              RapidData
                                ? RapidData[0].CTA_Section
                                    .CTA_Section_Button_Text
                                : "JOIN NOW"
                            }
                            onClick={() =>
                              router.push(
                                RapidData
                                  ? RapidData[0].CTA_Section
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
export const getServerSideProps = getServerSidePropsWithData(
  RapidAssessmentSeoQuery
);

export default rapidassesment;
