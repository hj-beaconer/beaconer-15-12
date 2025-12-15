import React, { useEffect, useState } from "react";
import style from "../styles/about.module.css";
import Button from "../Components/FormElement/Button";
import { handleOpenCalendly } from "../Components/calendlyUtils";
import {
  about_hero1,
  about_hero2,
  bg_about,
  Footercontenar,
  Footercontenarsmall,
  grid,
} from "../Utils/images";
import Image from "next/image";
import useAboutUs from "../hooks/aboutus";
import { marked } from "marked";
import { useRouter } from "next/navigation";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";
import { generateBeaconerStructuredData } from "../Utils/structuredData";
import { AboutUsSeoQuery } from "../Utils/seoEndponts";
import { Ic_Phone } from "../Utils/svg";

const About = ({ Data, fullUrl, setIsPageLoaded }) => {
  const router = useRouter();
  const { getaboutus } = useAboutUs();
  const [aboutUsData, setAboutUsData] = useState();

  const getAboutUsData = async () => {
    try {
      const response = await getaboutus();
      setAboutUsData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAboutUsData();
  }, []);

  return (
    <>
      <div className="relative mt-32">
        <SEO
          title="AI-Powered Third-Party Risk Solutions | Beaconer"
          description="At Beaconer, we're redefining third-party risk assessments with AI & real-time insights. Our mission is to replace outdated processes with intelligent solutions."
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
          canonicalUrl="/about"
          structuredData={generateBeaconerStructuredData('about', 'AI-Powered Third-Party Risk Solutions | Beaconer', 'At Beaconer, we\'re redefining third-party risk assessments with AI & real-time insights. Our mission is to replace outdated processes with intelligent solutions.', fullUrl)}
        />
        <Image src={bg_about} className="absolute -top-36 left-0" />
        <div className={style.top_herosection}>
          <div className={style.top_hero_heding}>
            <div className={style.top_hero_heding_uper}>
              {aboutUsData &&
                aboutUsData[0]?.About_Us_Hero_Section
                  ?.About_Us_Hero_Section_Sub_Heading}
            </div>
            <div className={style.top_hero_heding_bottom}>
              {aboutUsData &&
                aboutUsData[0]?.About_Us_Hero_Section
                  ?.About_Us_Hero_Section_Main_Heading}
            </div>
            {aboutUsData && (
              <Button
                className={style.button_text_div}
                text={"Get Started"}
                onClick={() => handleOpenCalendly()}
              />
            )}
          </div>
          <div className={style.hero_images}>
            <div className={style.image_container_upper}>
              {aboutUsData &&
              aboutUsData[0]?.About_Us_Hero_Section
                ?.About_Us_Hero_Section_Image1?.url ? (
                <img
                  alt={"about images"}
                  className={style.upper_image}
                  src={
                    aboutUsData &&
                    aboutUsData[0]?.About_Us_Hero_Section
                      ?.About_Us_Hero_Section_Image1
                      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${aboutUsData[0]?.About_Us_Hero_Section?.About_Us_Hero_Section_Image1.url}`
                      : about_hero2
                  }
                  width={100}
                  height={100}
                  loading="lazy"
                  fetchpriority="high"
                />
              ) : (
                <></>
                // <p>Loading image...</p>
              )}
            </div>
            <div className={style.image_container_lower}>
              {aboutUsData &&
              aboutUsData[0]?.About_Us_Hero_Section
                ?.About_Us_Hero_Section_Image1?.url ? (
                <img
                  alt={"about images"}
                  className={style.lower_image}
                  src={
                    aboutUsData &&
                    aboutUsData[0]?.About_Us_Hero_Section
                      ?.About_Us_Hero_Section_Image1
                      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${aboutUsData[0]?.About_Us_Hero_Section?.About_Us_Hero_Section_Image2.url}`
                      : about_hero1
                  }
                  width={100}
                  height={100}
                  loading="lazy"
                  fetchpriority="high"
                />
              ) : (
                <></>
                // <p>Loading image...</p>
              )}
            </div>
          </div>
        </div>

        <div className={style.middle_section}>
          <div className={style.doted_image_lft_corner}></div>
          <div className={style.middle_left_container}>
            {aboutUsData &&
              aboutUsData[0]?.About_Us_Goal_Section.map((item, key) => {
                return (
                  <div className={style.middle_text_div}>
                    <img
                      alt={"about images"}
                      className={style.img_svg}
                      src={
                        aboutUsData &&
                        aboutUsData[0]?.About_Us_Hero_Section
                          ?.About_Us_Hero_Section_Image1
                          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.Svg?.url}`
                          : about_hero1
                      }
                      width={100}
                      height={100}
                      loading="lazy"
                      fetchpriority="high"
                    />
                    <div className={style.middle_title}>
                      {item.Goal_Main_Heading}
                    </div>
                    <div className={style.middle_para}>
                      {item.Goal_Description[0]?.children[0]?.text}
                    </div>
                  </div>
                );
              })}
          </div>

          {/* <div className={style.middle_right_container}>
          <div className={style.dynamic_data}>
            <div className={style.right_line}></div>

            {aboutUsData &&
              aboutUsData[0]?.About_Us_Progress_Bar.map((item, index) => {
                return (
                  <div key={index} className={style.right_text_container}>
                    <div className={style.right_dot}>
                      <div className={style.right_dot_under}></div>
                    </div>
                    <div className={style.right_text}>
                      <h3 className={style.right_heading}>
                        {item.Progress_Bar_Main_Heding}
                      </h3>
                      <p className={style.right_para}>
                        {item.Progress_Bar_Sub_Heding}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div> */}
        </div>

        {aboutUsData && aboutUsData[0]?.Journey_Section_Heading && (
          <div
            className={style.text_heading_center}
            dangerouslySetInnerHTML={{
              __html: marked(aboutUsData[0]?.Journey_Section_Heading),
            }}
          ></div>
        )}

        <div className={style.year_main_section}>
          <div className={style.year_data_main}>
            <div className={style.year_line}></div>
            <div className={style.year_data_main_div}>
              {aboutUsData &&
                aboutUsData[0]?.journey_Section_Progress_Bar.map(
                  (item, index) => {
                    return (
                      <div key={index} className={style.year_data_collum}>
                        <div className={style.year_data_title}>
                          {item.Journey_Year}
                        </div>
                        <div className={style.year_dot}>
                          <div className={style.year_dot_under}></div>
                        </div>
                        <div className={style.para_line}></div>
                        <div className={style.year_data_para}>
                          {item.Journey_Decription}
                        </div>
                      </div>
                    );
                  }
                )}
              {aboutUsData && aboutUsData[0]?.testText}
            </div>
          </div>
        </div>

        <div
          className={`container-fluid mt-5 ${style.divforExperienceunparalleled}`}
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <div className={` ${style.circle_MainDivContanir}`}>
            <div className="row">
              <div className={`col-md-8 ${style.main_dv_for_experience}`}>
                {aboutUsData && (
                  <>
                    <div
                      className="text-xl sm:text-3xl md:text-4xl/10 fw-bold"
                      style={{
                        fontFamily: "Raleway",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: marked(
                          aboutUsData[0].CTA_Section.CTA_Section_Heading
                        ),
                      }}
                    ></div>
                    <Button
                      className={style.button_text_div}
                      text={
                        aboutUsData
                          ? aboutUsData[0].CTA_Section.CTA_Section_Button_Text
                          : "JOIN NOW"
                      }
                      onClick={() =>
                        router.push(
                          aboutUsData
                            ? aboutUsData[0].CTA_Section
                                .CTA_Section_Button_Reidrect_Url
                            : "/contact"
                        )
                      }
                    />
                  </>
                )}
              </div>
            </div>

            {/* <Image
            className={`md:block hidden ${style.circle_design}`}
            alt="Logo"
            src={Footercontenar}
          /> */}
            {/* <Image
            className={`block md:hidden ${style.circle_design}`}
            alt="Logo"
            src={Footercontenarsmall}
          /> */}
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
  );
};
export const getServerSideProps = getServerSidePropsWithData(AboutUsSeoQuery);

export default About;
