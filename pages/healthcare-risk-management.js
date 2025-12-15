import React, { useEffect, useState } from "react";
import style from "../styles/healthcare.module.css";
import styles from "../Components/FormElement/form.module.css";
import Description from "../Components/FormElement/Description";
import {
  bg_dots,
  bg_numbers,
  blanlimage,
  feature_bg,
  grid,
  healthcare_1,
} from "../Utils/images";
import Image from "next/image";
import useIndustries from "../hooks/industries";
import { marked } from "marked";
import Button from "../Components/FormElement/Button";
import { useRouter } from "next/navigation";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import { HealthCareSeoQuery } from "../Utils/seoEndponts";
import SEO from "../Utils/SEO";
import { generateBeaconerStructuredData } from "../Utils/structuredData";

const Healthcare = ({ Data, fullUrl,setIsPageLoaded }) => {
  const router = useRouter();
  const [healthcareData, setHealthcareData] = useState();
  const { gethealthcare } = useIndustries();
  const getHealthcareData = async () => {
    try {
      const response = await gethealthcare();
      setHealthcareData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getHealthcareData();
  }, []);

  return (
    <>
      {healthcareData && (
        <div className="relative mt-32">
          <SEO
            title="Healthcare Risk Management Solutions | Beaconer"
            description="From patient data protection to vendor compliance, our real-time scanning ensures you stay ahead of evolving healthcare regulations and security threats."
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
            canonicalUrl="/Healthcare-risk-management"
            structuredData={generateBeaconerStructuredData('healthcare', 'Healthcare Risk Management Solutions | Beaconer', 'From patient data protection to vendor compliance, our real-time scanning ensures you stay ahead of evolving healthcare regulations and security threats.', fullUrl)}
          />
          {healthcareData && (
            <div className="absolute  lg:w-[3415px] lg:h-[3206px] -translate-x-1/2 lg:-translate-y-[72%] bg-[radial-gradient(circle,#0EAACDCC_0%,rgba(218,231,234,0)_50%,rgba(255,255,255,0)_100%)] z-0 w-[1250px] h-[1250px] left-1/2 -translate-y-[70%]"></div>
          )}{" "}
          {/* <Image src={bg_numbers} className="absolute -top-36" /> */}
          {healthcareData && (
            <div className={style.health_main_container}>
              <div className={style.main_head_container}>
                <div className={style.main_heading}>
                  {healthcareData[0]?.Healthcare_Main_Heading}
                </div>
                <div className={style.main_sub_heading}>
                  {
                    healthcareData[0]?.Healthcare_Main_Description[0]
                      ?.children[0]?.text
                  }
                </div>
              </div>
            </div>
          )}
          <div className="relative w-full h-full">
            {healthcareData && (
              <Image
                src={bg_dots}
                className="absolute top-[10%] w-full h-full object-cover"
              />
            )}
            {healthcareData && (
              <div className="mx-[5%] md:mx-[8%] ">
                <div className={style.second_section_container}>
                  <img
                    className={style.second_image}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${healthcareData[0]?.Healthcare_Hero_Section.Healthcare_Hero_Section_Main_Image.url}`}
                  />
                  <div className={style.second_content_container}>
                    <div
                      className={style.second_cpntent_tile}
                      dangerouslySetInnerHTML={{
                        __html: marked(
                          `${
                            healthcareData
                              ? healthcareData[0]?.Healthcare_Hero_Section
                                  .Healthcare_Hero_Section_Main_Heading
                              : "Third-Party Risks Impacting the Healthcare Industry"
                          }`
                        ),
                      }}
                    />
                    <div className={style.second_content_discription}>
                      {healthcareData
                        ? `${healthcareData[0].Healthcare_Hero_Section.Healthcare_Hero_Section_Main_description[0].children[0].text}`
                        : " Healthcare faces high risks, with 34.9% of breaches and 40% noncompliance last year. The average breach costs $10.93M. A strong TPRM policy is crucial. Our platform helps manage vendors securely, ensure compliance, and protect patient data."}
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                  <div
                    className={style.seconry_heading}
                    dangerouslySetInnerHTML={{
                      __html: marked(
                        `${
                          healthcareData
                            ? healthcareData[0].Healthcare_Hero_Section
                                .Healthcare_Hero_Section_Sub_Heading
                            : "Third-Party Risks Impacting the Healthcare Industry"
                        }`
                      ),
                    }}
                  />
                  <div className={style.seconry_discription}>
                    {healthcareData
                      ? `${healthcareData[0].Healthcare_Hero_Section.Healthcare_Hero_Section_Sub_Description[0].children[0].text}`
                      : "At Beaconer, we specialize in simplifying third-party risk management for healthcare providers, ensuring operational resilience, data security, and regulatory compliance. Beaconer helps a lot of Healthcare customers and provide TPRM solution customized to healthcare companies. With our broad range of Vendors coming from Healthcare sectors, our solution, framework and vendors are most suited for healthcare industries. "}
                  </div>
                </div>
              </div>
            )}
          </div>
          {healthcareData && (
            <div className={style.third_section_container}>
              <div
                className={style.third_heading}
                dangerouslySetInnerHTML={{
                  __html: marked(
                    `${
                      healthcareData
                        ? healthcareData[0].Healthcare_Blog_Section
                            .Healthcare_Blog_Section_Main_Heading
                        : "Real-Time Monitoring & Proactive Risk Mitigation"
                    }`
                  ),
                }}
              />

              <div className={style.third_discription}>
                {healthcareData
                  ? `${healthcareData[0].Healthcare_Blog_Section.Healthcare_Blog_Section_Sub_Heading}`
                  : "Stay ahead of cyber threats with continuous monitoring of your vendors’ attack surfaces and risk profiles."}
              </div>

              <div className={style.card_container}>
                <Card
                  cards={
                    healthcareData &&
                    healthcareData[0].Healthcare_Blog_Section.Healthcare_Blog
                  }
                />
              </div>
            </div>
          )}
          {healthcareData &&
            healthcareData[0].Healthcare_Feature_Section.map((item) => (
              <div className={style.main_feature_section}>
                <div className={style.main_image_container}>
                  <img
                    alt="blank image"
                    src={
                      item
                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Healthcare_Feature_Section_Image.url}`
                        : blanlimage
                    }
                    className={style.feature_image}
                    loading="lazy"
                    fetchpriority="high"
                  />
                  <div className="md:w-60 w-32 h-32 md:h-60 -z-1 opacity-50 rounded-full bg-[#F07A72CC] blur-3xl lg:blur-[154px] absolute top-1/2 left-0 -translate-x-[20%] -translate-y-1/2 "></div>
                  <div className={style.main_div_for_crosh_harf_left}></div>
                </div>
                <div className={style.feature_content_container}>
                  <div
                    className={style.feature_title}
                    dangerouslySetInnerHTML={{
                      __html: marked(
                        `${
                          item
                            ? item.Healthcare_Feature_Section_Heading
                            : "Regulatory Compliance Made Simple"
                        }`
                      ),
                    }}
                  />
                  <div
                    className={style.feature_discription}
                    dangerouslySetInnerHTML={{
                      __html: marked(
                        `${
                          item
                            ? item.Healthcare_Feature_Section_Description
                            : "Align with HIPAA and more Customizable vendor assessments Easy compliance mapping Instant, tailored executive reports"
                        }`
                      ),
                    }}
                  />
                  <Image
                    src={feature_bg}
                    alt=""
                    className="absolute transform -translate-y-1/2 hidden lg:block"
                  />
                </div>
              </div>
            ))}
          {healthcareData && (
            <div className={style.main_div_title_description}>
              <div className={style.div_for_experience_unpralleled}>
                <div>
                  <div className="row">
                    <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                      {healthcareData && (
                        <>
                          <div
                            className={`text-xl/8  font-bold md:text-[40px]/[1.2] ${style.healthcare_cta_section}`}
                            dangerouslySetInnerHTML={{
                              __html: marked(
                                healthcareData[0].CTA_Section
                                  .CTA_Section_Heading
                              ),
                            }}
                          ></div>
                          <p className={style.experient_para}>
                            {
                              healthcareData[0].CTA_Section
                                .CTA_Section_Description[0]?.children[0]?.text
                            }
                          </p>
                          <Button
                            className={style.button_text_div}
                            text={
                              healthcareData
                                ? healthcareData[0].CTA_Section
                                    .CTA_Section_Button_Text
                                : "REQUEST A DEMO"
                            }
                            onClick={() =>
                              router.push(
                                healthcareData
                                  ? healthcareData[0].CTA_Section
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
          )}
          {healthcareData && (
            <Image
              src={grid}
              alt="bg image"
              className="absolute -z-1 -bottom-[130px] lg:-bottom-[260px] w-full"
            />
          )}
        </div>
      )}
      {healthcareData && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1187px] h-[443px] rounded-[400px] bg-[#F36036] opacity-40 blur-[254px]"></div>
      )}
    </>
  );
};
export const getServerSideProps =
  getServerSidePropsWithData(HealthCareSeoQuery);

export default Healthcare;

export const Card = ({ cards }) => {
  return (
    <div className={styles.MainDivForcartSection}>
      <div className="row justify-content-center g-4">
        {cards &&
          cards.map((card) => (
            <div key={card.id} className="col-xxl-4 col-xl-4 col-lg-12 ">
              <div
                className={`${style.healthcare_card_body} card h-100 shadow-sm border-0`}
              >
                <div
                  className={`${style.body_card} card-body d-flex flex-column`}
                >
                  <div
                    className={`${style.svgBg} mb-3 text-center text-warning`}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${card.Blog_Image.url}`}
                      loading="lazy"
                      fetchpriority="high"
                    />
                  </div>
                  <div
                    className={styles.title_Cart}
                    dangerouslySetInnerHTML={{
                      __html: marked(`${card && card?.Blog_Heading}`),
                    }}
                  />
                  <Description
                    className={`mt-3 text-muted  ${style.Description}`}
                    text={card.Blog_Description[0].children[0].text}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
