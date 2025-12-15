"use client";
import style from "../styles/solution.module.css";
import Button from "../Components/FormElement/Button";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  slider_image_1,
  slider_image_2,
  slider_image_3,
  slider_image_4,
} from "../Utils/images";
import { handleOpenCalendly } from "../Components/calendlyUtils";
import AccordionTwo from "../Components/FormElement/AcordianTwo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useSolution from "../hooks/solution";
import { marked } from "marked";
import { useRouter } from "next/navigation";
import { SolutionSeoQuery } from "../Utils/seoEndponts";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";

const solution = ({ Data, fullUrl, setIsPageLoaded }) => {
  const router = useRouter();
  const { getsolution } = useSolution();
  const [solutionData, setSolutionData] = useState();
  const getSolutionData = async () => {
    try {
      const response = await getsolution();
      setSolutionData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getSolutionData();
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
      {Data && (
        <SEO
          title={Data[0].seo.metaTitle}
          description={Data[0].seo.metaDescription}
          imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${Data[0].seo.shareImage.url}`}
          fullUrl={fullUrl}
          canonicalUrl={Data[0].seo.Canonical_Url}
        />
      )}
      <div className={style.center_div}>
        {solutionData && (
          <div className={style.solution_heading_top_container}>
            <div className={style.solution_heading_top_first}>
              {solutionData
                ? solutionData[0]?.Solution_Page_Hero_Section_Sub_Title
                : "Sit back and relax, let us handle"}
            </div>
            <div className={style.solution_heading_top_second}>
              {solutionData
                ? solutionData[0]?.Solution_Page_Hero_Section_Main_Title
                : "every aspect of Third-Party Risk"}
            </div>
            <div className={style.solution_heading_top_para}>
              {solutionData
                ? solutionData[0]?.Solution_Page_Hero_Section_Description[0]
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
            {solutionData
              ? solutionData[0]?.Solution_Page_Hero_Section_Images.map(
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

      {solutionData &&
        solutionData[0]?.Solution_Feature_Section.map((item1, index) => {
          return (
            <div
              className={style.main_for_Dark_Web_twoA}
              key={item1?.id || index}
            >
              {item1 && (
                <div>
                  {item1?.Solution_Feature_Section_Main_Title && (
                    <div
                      className={style.image_heading}
                      dangerouslySetInnerHTML={{
                        __html: marked(
                          item1.Solution_Feature_Section_Main_Title
                        ),
                      }}
                    ></div>
                  )}
                  {item1.Solution_Feature_Section_Image?.url && (
                    <img
                      className={style.main_div_for_videoPlay_two_img_left}
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item1.Solution_Feature_Section_Image.url}`}
                      alt="Feature Image"
                      loading="lazy"
                      fetchpriority="high"
                    />
                  )}
                </div>
              )}
              <div className={style.main_div_for_crosh_harf_left}></div>
              {item1?.Solution_Feature_Section_Accordion && (
                <div className={style.main_for_Cutting_div}>
                  <AccordionTwo
                    items={item1.Solution_Feature_Section_Accordion}
                  />
                </div>
              )}
            </div>
          );
        })}

      <div className={style.main_div_title_description}>
        <div className={style.div_for_experience_unpralleled}>
          <div>
            <div className="row">
              <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                {solutionData && (
                  <>
                    <div
                      className="text-xl/8  font-bold md:text-[40px]/[1.2]  "
                      style={{
                        fontFamily: "Raleway",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: marked(
                          solutionData[0].CTA_Section.CTA_Section_Heading
                        ),
                      }}
                    ></div>
                    <Button
                      className={style.button_text_div}
                      text={
                        solutionData
                          ? solutionData[0].CTA_Section.CTA_Section_Button_Text
                          : "JOIN NOW"
                      }
                      onClick={() =>
                        router.push(
                          solutionData
                            ? solutionData[0].CTA_Section
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
    </>
  );
};
export const getServerSideProps = getServerSidePropsWithData(SolutionSeoQuery);

export default solution;
