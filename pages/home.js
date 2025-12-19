"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/home.module.css";
import Description from "../Components/FormElement/Description";
import Button from "../Components/FormElement/Button";
import {
  IC_Home_Line,
  IC_Right_icone,
  IC_Right_orenge_icone,
} from "../Utils/svg";
import { marked } from "marked";
import Accordion from "../Components/FormElement/AccordionItem";
import CustomerSlider from "../Components/FormElement/CustomerSlider";
import { useNavigate } from "../Utils/navigation";
import { handleOpenCalendly } from "../Components/calendlyUtils";
import useHome from "../hooks/home";
import { HomeSeoQuery } from "../Utils/seoEndponts";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";
import { generateBeaconerStructuredData } from "../Utils/structuredData";
import { motion } from "motion/react";
import Training from "./training";
import Thirdpartyrisk from "./third-party-risk";

const Home = ({ Data, fullUrl, setIsPageLoaded }) => {
  const navigateTo = useNavigate();
  const [homeData, setHomeData] = useState();
  const { gethome } = useHome();
  const getHomeData = async () => {
    try {
      const response = await gethome();
      setHomeData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getHomeData();
  }, []);

  const logo = homeData && [
    ...homeData[0]?.Hero_Section.Hero_Section_Logos,
    ...homeData[0]?.Hero_Section.Hero_Section_Logos,
    ...homeData[0]?.Hero_Section.Hero_Section_Logos,
    ...homeData[0]?.Hero_Section.Hero_Section_Logos,
  ];

  return (
    <>
    {/* <Training/> */}
    {/* <Thirdpartyrisk/> */}

      <SEO
        title="Next-Gen AI-Powered Third-Party Risk Assessment | Beaconer"
        description="Beaconer delivers automated third-party risk assessments with real-time scanning. We help organizations identify, measure, and mitigate risks across all vendors and partners."
        keywords={[
          "Risk Management In Healthcare",
          "Vendor Insurance",
          "Third Party Vendor",
          "Risk Identification",
          "Security Compliance",
          "Remediation Services",
          "Residual Risk",
          "Cybersecurity Assessment",
          "Security Posture",
          "Vendor Risk Management",
          "Financial Risk Management",
          "Inherent Risk",
          "Security Risk Assessment"
        ]}
        imageUrl={Data && `${process.env.NEXT_PUBLIC_BACKEND_URL}${Data[0]?.seo?.shareImage?.url}` || "/Beaconerlogo.png"}
        fullUrl={fullUrl}
        canonicalUrl="/home"
        structuredData={generateBeaconerStructuredData('home', 'Next-Gen AI-Powered Third-Party Risk Assessment | Beaconer', 'Beaconer delivers automated third-party risk assessments with real-time scanning. We help organizations identify, measure, and mitigate risks across all vendors and partners.', fullUrl)}
      />
      {homeData && (
        <div className={style.main_div_for_Home_page}>
          {homeData && <div className={` ${style.main_div_choresh}`}></div>}
          {homeData && (
            <div className={` ${style.main_for_real_timeComponent_first1}`}>
              <div className={style.main_for_relatedTime_div}>
                <div className={style.main_home_hero_content_res}>
                  <div className={` ${style.main_nextgen}`}>
                    {homeData
                      ? homeData[0]?.Hero_Section.Hero_Section_Sub_Heading
                      : "Sit back and relax, let us handle"}
                  </div>
                  <div className={style.main_title_external_main}>
                    {homeData
                      ? homeData[0]?.Hero_Section.Hero_Section_Main_Title
                      : "every aspect of Third-Party Risk"}
                  </div>
                  <Description
                    className={style.main_description_data}
                    text={
                      homeData
                        ? homeData[0]?.Hero_Section.Hero_Section_Description[0]
                            ?.children[0]?.text
                        : "Beaconer automates your entire Third-Party Risk journey, from onboarding and assessments to real-time monitoring and remediation, ensuring complete and seamless protection."
                    }
                  />
                  <Button
                    className={style.started_button}
                    text={"GET STARTED"}
                    onClick={() => handleOpenCalendly()}
                  />
                </div>
                <video
                  className={`block md:hidden mt-[32px]   ${style.main_video_div}`}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                >
                  <source
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                      homeData &&
                      homeData[0]?.Hero_Section.Hero_Section_Video.Video.url
                    }`}
                    // type="video/mp4"
                  />
                </video>

                <div className={`hidden md:block ${style.main_div_for_repid}`}>
                  <div className={style.main_for_empower}>
                    {homeData
                      ? homeData[0]?.Hero_Section.Assessment_Sub_Heading
                      : "Empower Your Business With"}
                  </div>
                  <div
                    className={style.main_div_rapid_assessment}
                    dangerouslySetInnerHTML={{
                      __html: marked(
                        `${
                          homeData
                            ? homeData[0]?.Hero_Section.Assessment_Main_Title
                            : "Rapid Assessments"
                        }`
                      ),
                    }}
                  ></div>
                  <Description
                    className={style.main_description_data}
                    text={
                      homeData
                        ? homeData[0]?.Hero_Section.Assessment_Description[0]
                            ?.children[0]?.text
                        : "Simply request an assessment, and Beaconer will complete it within 2 business days, handling all the details efficiently and effortlessly, so you dont have to be involved."
                    }
                  />
                  <div
                    className={`${style.main_div_for_Right_button} relative z-50`}
                    onClick={() => navigateTo("/third-party-vendor-risk-management")}
                  >
                    {IC_Right_icone.icon()}
                  </div>
                </div>
              </div>

              {homeData[0]?.Hero_Section.Hero_Section_Video.Video.url && (
                <div className={style.main_div_for_videoPlay_Frist}>
                  <video
                    className={`hidden md:block ${style.main_video_div}`}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                  >
                    <source
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                        homeData &&
                        homeData[0]?.Hero_Section.Hero_Section_Video.Video.url
                      }`}
                      // type="video/mp4"
                    />
                  </video>

                  <div
                    className={`block md:hidden ${style.main_div_for_repid}`}
                  >
                    <div className={style.main_for_empower}>
                      {homeData
                        ? homeData[0]?.Hero_Section.Assessment_Sub_Heading
                        : "Empower Your Business With"}
                    </div>
                    <div
                      className={style.main_div_rapid_assessment}
                      dangerouslySetInnerHTML={{
                        __html: marked(
                          `${
                            homeData
                              ? homeData[0]?.Hero_Section.Assessment_Main_Title
                              : "Rapid Assessments"
                          }`
                        ),
                      }}
                    ></div>
                    <Description
                      className={style.main_description_data}
                      text={
                        homeData
                          ? homeData[0]?.Hero_Section.Assessment_Description[0]
                              ?.children[0]?.text
                          : "Simply request an assessment, and Beaconer will complete it within 2 business days, handling all the details efficiently and effortlessly, so you dont have to be involved."
                      }
                    />
                    <div
                      className={`${style.main_div_for_Right_button} relative z-50`}
                      onClick={() => navigateTo("/third-party-vendor-risk-management")}
                    >
                      {IC_Right_icone.icon()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <video
                className={`w-full h-full  absolute object-cover opacity-60 bg-transparent`}
                autoPlay={true}
                muted={true}
                loop={true}
              >
                <source src="/bg_video.mov" />
              </video>
            </div>
            <div
              className={`${style.logo_main_container} relative -10 text-2xl/[36px] font-medium`}
            >
              {homeData && (
                <div className={style.main_nextgen_heading}>Our Clients</div>
              )}

              <div className={style.logo_carasoul_container}>
                <motion.div
                  className="flex w-max space-x-8"
                  animate={{ x: [0, -800] }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                >
                  {logo?.map((item, index) => (
                    <div key={index} className={style.logo_image_div}>
                      <img
                        className={`h-7 md:h-12 w-auto object-contain ms-5 ${style.logo_image}`}
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Logo?.url}`}
                        alt="Brand Logos"
                        loading="lazy"
                        fetchpriority="high"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className="relative z-10">
              {homeData &&
                homeData[0]?.Feature_Section.map((item, index) => {
                  return (
                    <div
                      className={`  ${style.main_for_real_timeComponent}`}
                      key={index}
                    >
                      <div className={style.main_for_relatedTime_div}>
                        <div className={style.main_nextgen_sub}>
                          {item ? item.Feature_Section_Sub_Heading : "Next-Gen"}
                        </div>
                        <div
                          className={style.main_title_external}
                          dangerouslySetInnerHTML={{
                            __html: item.Feature_Section_Main_Title,
                          }}
                        ></div>
                        <Description
                          className={style.main_description_data}
                          text={
                            item
                              ? item.Feature_Section_Description[0]?.children[0]
                                  ?.text
                              : "Move beyond outdated, document-based assessments with Beaconer’s state-of-the-art External Attack Surface Scanner. It continuously monitors third-party, internet-facing assets in real time, identifying open vulnerabilities and offering a clear, up-to-date view of their attack surface. Stay ahead by monitoring your vendors daily, ensuring you're the first to know when they are exposed to potential risks."
                          }
                        />
                        <button
                          className={style.learn_more_button}
                          onClick={() => navigateTo(item.Page_Redirect_Url)}
                        >
                          Learn More {IC_Right_orenge_icone.icon()}
                        </button>
                      </div>
                      {item && item?.Feature_Section_Video.Video.url && (
                        <video
                          className={style.main_div_for_videoPlay_one}
                          autoPlay={true}
                          muted={true}
                          loop={true}
                        >
                          <source
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                              item && item?.Feature_Section_Video.Video.url
                            }`}
                            // type="video/mp4"
                          />
                        </video>
                      )}
                    </div>
                  );
                })}
            </div>
            <div className="relative z-10">
              {homeData && (
                <div className={style.main_div_for_chooes_us}>
                  <div
                    className={` hidden sm:flex ${style.main_div_chooes_us}`}
                  >
                    {homeData
                      ? homeData[0]?.Why_Choose_Us_Section
                          .Why_Choose_Us_Main_Title
                      : "Why Choose Us?"}
                  </div>
                  <div className={style.main_for_acordiyan_manage}>
                    <Accordion
                      items={
                        homeData[0]?.Why_Choose_Us_Section
                          .Why_Choose_Us_Accordion_Data
                      }
                    />
                    <img
                      alt="ImageGroupe"
                      className={style.maindiv_imagegroup}
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${homeData[0]?.Why_Choose_Us_Section.Why_Choose_Us_Image.url}`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={style.main_div_counting}>
            {homeData &&
              homeData[0]?.Why_Choose_Us_Section.Why_Choose_Us_Indicators.map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="p-10 w-full bg-[#1A1A1A] border-e border-[#262626] rounded-xl"
                    >
                      <div className={style.main_div_for_number}>
                        {item.Indicator_Number}
                        <div className={style.main_div_for_number_text}>
                          {item.Indicator_Type}
                        </div>
                      </div>
                      <div className={style.main_div_for_sub_title_number}>
                        {item.Indicator_Description}
                      </div>
                    </div>
                  );
                }
              )}
          </div>

          {homeData && (
            <CustomerSlider
              testimonials={homeData[0]?.Customer_Review_Section}
            />
          )}
          {homeData && (
            <div className={style.risk_div}>
              <div className={style.main_div_foryour_risk}>
                Your risk is our risk
              </div>
              <div className={style.home_page_vertical_line}>
                {" "}
                {IC_Home_Line.icon()}
              </div>

              <Description
                className={style.main_description_Footer}
                text={
                  "Rest easy while Beaconer takes care of your third-party risk management, end to end"
                }
              />
              <Button
                className={style.started_button_trial}
                text={" START FREE TRIAL"}
                onClick={() => handleOpenCalendly()}
              />
            </div>
          )}
        </div>
      )}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1187px] h-[443px] rounded-[400px] bg-[#F36036] opacity-40 blur-[254px]"></div>
    </>
  );
};
export const getServerSideProps = getServerSidePropsWithData(HomeSeoQuery);

export default Home;
