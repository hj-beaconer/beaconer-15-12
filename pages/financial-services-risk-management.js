import React, { useEffect, useState } from "react";
import style from "../styles/finance.module.css";
import styles from "../Components/FormElement/form.module.css";
import Description from "../Components/FormElement/Description";
import {
  bg_dots,
  bg_lines,
  bg_numbers,
  blanlimage,
  grid,
  healthcare_1,
  logo_health,
} from "../Utils/images";
import useIndustries from "../hooks/industries";
import { marked } from "marked";
import Button from "../Components/FormElement/Button";
import { useRouter } from "next/navigation";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";
import { generateBeaconerStructuredData } from "../Utils/structuredData";
import { FinanceSeoQuery } from "../Utils/seoEndponts";
import Image from "next/image";

const Finance = ({ Data, fullUrl, setIsPageLoaded }) => {
  const router = useRouter();
  const [financeData, setFinanceData] = useState();
  const { getfinance } = useIndustries();
  const getFinanceData = async () => {
    try {
      const response = await getfinance();
      setFinanceData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFinanceData();
  }, []);

  const data = [
    {
      title: "24/7 Risk Monitoring",
      discription:
        "Continuous scanning of third-party attack surfaces for real-time alerts on vulnerabilities.",
      src: logo_health,
    },
    {
      title: "Data Leak Detection",
      discription:
        "Identify leaked credentials and sensitive information using advanced dark web and surface web scanning.",
      src: logo_health,
    },
    {
      title: "Comprehensive Security Ratings",
      discription:
        "Evaluate and prioritize risks with up-to-date security ratings powered by advanced analytics.",
      src: logo_health,
    },
  ];
  return (
    <>
      <div className="relative mt-32">
        <SEO
          title="Financial Services Risk Management | Beaconer"
          description="Financial institutions face growing regulatory & cyber risks. Beaconer provides automated third-party risk assessments that help manage vendor risks effectively."
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
          canonicalUrl="/financial-services-risk-management"
          structuredData={generateBeaconerStructuredData('financial', 'Financial Services Risk Management | Beaconer', 'Financial institutions face growing regulatory & cyber risks. Beaconer provides automated third-party risk assessments that help manage vendor risks effectively.', fullUrl)}
        />

        <div className="absolute  lg:w-[3415px] lg:h-[3206px] -translate-x-1/2 lg:-translate-y-[72%] bg-[radial-gradient(circle,#0EAACDCC_0%,rgba(218,231,234,0)_50%,rgba(255,255,255,0)_100%)] z-0 w-[1250px] h-[1250px] left-1/2 -translate-y-[70%]"></div>
        <Image src={bg_lines} className="absolute -top-36" />
        <div className={style.health_main_container}>
          <div className={style.main_head_container}>
            <div className={style.main_heading}>
              {financeData && financeData
                ? financeData[0]?.Finance_Main_Heading
                : "Protect Sensitive Data, Ensure Compliance, and Safeguard Your Reputation "}
            </div>
            <div className={style.main_sub_heading}>
              {financeData && financeData
                ? financeData[0]?.Finance_Main_Description[0]?.children[0]?.text
                : "The financial services sector is a prime target for cyberattacks,often exploiting their third- party vulnerabilities. Beaconer helps  financial organizations mitigate risks, maintain compliance, andenhance resilience with tailored Third-Party Risk Management (TPRM) solutions."}
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <Image
            src={bg_dots}
            className="absolute top-[10%] w-full h-full object-cover"
          />
          <div className="mx-[5%] md:mx-[8%] ">
            <div className={style.second_section_container}>
              <img
                className={style.second_image}
                src={
                  financeData
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${financeData[0]?.Finance_Hero_Section?.Finance_Hero_Section_Image.url}`
                    : healthcare_1
                }
                loading="lazy"
                fetchpriority="high"
              />
              <div className={style.second_content_container}>
                {financeData && (
                  <div
                    className={style.second_cpntent_tile}
                    dangerouslySetInnerHTML={{
                      __html: marked(
                        financeData[0]?.Finance_Hero_Section
                          ?.Finance_Hero_Section_Main_Heading
                      ),
                    }}
                  ></div>
                )}
                <div className={style.second_content_discription}>
                  {financeData &&
                    financeData[0]?.Finance_Hero_Section
                      ?.Finance_Hero_Section_Main_Description[0]?.children[0]
                      ?.text}
                </div>
              </div>
            </div>
            {financeData && (
              <div className="flex flex-col items-center justify-center">
                <div
                  className={style.seconry_heading}
                  dangerouslySetInnerHTML={{
                    __html: marked(
                      financeData[0]?.Finance_Hero_Section
                        ?.Finance_Hero_Section_Sub_Heading
                    ),
                  }}
                ></div>

                <div className={style.seconry_discription}>
                  {financeData &&
                    financeData[0]?.Finance_Hero_Section
                      ?.Finance_Hero_Section_Sub_Description[0]?.children[0]
                      ?.text}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={style.third_section_container}>
          {financeData && (
            <div
              className={style.third_heading}
              dangerouslySetInnerHTML={{
                __html: marked(
                  financeData[0]?.Finance_Blog_Section
                    ?.Finance_Blog_Section_Main_Heading
                ),
              }}
            ></div>
          )}

          <div className={style.third_discription}>
            {financeData && financeData
              ? financeData[0]?.Finance_Blog_Section
                  .Finance_Blog_Section_Main_Description[0]?.children[0]?.text
              : "shd"}
          </div>

          <div className={style.card_container}>
            {financeData && financeData ? (
              <Card cards={financeData[0]?.Finance_Blog_Section.Finance_Blog} />
            ) : (
              <Card cards={data} />
            )}
          </div>
        </div>

        {financeData &&
          financeData[0].Finance_Feature_Section.map((item) => (
            <div className={style.main_feature_section}>
              <div className={style.main_image_container}>
                <img
                  alt="blank image"
                  src={
                    item
                      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Finance_Feature_Section_Image.url}`
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
                          ? item.Finance_Feature_Section_Heading
                          : "Streamlined Compliance Management "
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
                          ? item.Finance_Feature_Section_Description
                          : "Pre-built questionnaires Instant reports Automated updates and mapping"
                      }`
                    ),
                  }}
                ></div>
              </div>
            </div>
          ))}

        <div className={style.main_div_for_key_features}>
          <div className={style.main_div_for_key_features}>
            <div className={style.main_div_for_key_features_detail}>
              <div className={style.heading_for_key_features}>
                <div
                  className={style.span_for_key}
                  dangerouslySetInnerHTML={{
                    __html: marked(
                      `${
                        financeData
                          ? financeData &&
                            financeData[0]?.Finance_Service_Section
                              .Service_Section_Heading
                          : "Key Features"
                      }`
                    ),
                  }}
                />
              </div>
              <span className={style.Styles_for_keyfeatures_underline}></span>
              <Description
                className={`mt-3`}
                text={
                  financeData
                    ? financeData[0]?.Finance_Service_Section
                        .Service_Section_Description[0].children[0].text
                    : "The company successfully secures its expanded network by ensuring that all assets are accounted for and protected against potential threats. This proactive approach minimizes the risk of data breaches and strengthens the overall cybersecurity posture, fostering confidence among stakeholders and clients. By addressing inherited risks, the organization can operate with a unified security strategy that safeguards its valuable information assets in a merged environment."
                }
              />
            </div>
            <div className={style.main_div_for_card}>
              {financeData &&
                financeData[0].Finance_Service_Section.Service_Section_Blog.map(
                  (item, index) => (
                    <div key={index} className={style.div_for_card}>
                      <div className={style.iconContainer}>
                        <div>
                          <img
                            alt="logos"
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Blog_Image.url}`}
                            loading="lazy"
                            fetchpriority="high"
                          />
                        </div>
                      </div>
                      <div
                        className={style.title}
                        dangerouslySetInnerHTML={{
                          __html: marked(
                            `${
                              item ? item && item.Blog_Heading : "Key Features"
                            }`
                          ),
                        }}
                      />
                      <p className={style.description}>
                        {item.Blog_Description[0].children[0].text}
                      </p>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>

        <div className={style.apart_section_container}>
          <div
            className={style.apart_main_heading}
            dangerouslySetInnerHTML={{
              __html: marked(
                `${
                  financeData
                    ? financeData &&
                      financeData[0]?.What_Sets_Beaconer_Apart.Mian_Heading
                    : "Key Features"
                }`
              ),
            }}
          />

          <div className={style.apart_card_container}>
            {financeData &&
              financeData[0]?.What_Sets_Beaconer_Apart.Beaconer_Apart_Card_Section.map(
                (item) => (
                  <div className={style.apart_card} key={item.id}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Card_Image.url}`}
                      alt="apart from"
                      className={style.apart_card_image}
                      loading="lazy"
                      fetchpriority="high"
                    />
                    <div className={style.apart_card_content}>
                      <div className={style.apart_card_heading}>
                        {item.Card_Heading}
                      </div>
                      <div className={style.apart_card_discription}>
                        {item.Card_Description[0].children[0].text}
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>

        <div className={style.main_div_title_description}>
          <div className={style.div_for_experience_unpralleled}>
            <div>
              <div className="row">
                <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                  {financeData && (
                    <>
                      <div
                        className="text-xl/8  font-bold md:text-[40px]/[1.2]  "
                        style={{
                          fontFamily: "Raleway",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: marked(
                            financeData[0].CTA_Section.CTA_Section_Heading
                          ),
                        }}
                      ></div>
                      <p className={style.experient_para}>
                        {
                          financeData[0].CTA_Section.CTA_Section_Description[0]
                            ?.children[0]?.text
                        }
                      </p>
                      <Button
                        className={style.button_text_div}
                        text={
                          financeData
                            ? financeData[0].CTA_Section.CTA_Section_Button_Text
                            : "REQUEST A DEMO"
                        }
                        onClick={() =>
                          router.push(
                            financeData
                              ? financeData[0].CTA_Section
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
        {financeData && (
          <div className={style.last_section}>
            <div className={style.Last_heading}>
              {
                financeData[0].Feedback_Section.Feedback_Message[0]?.children[0]
                  ?.text
              }
            </div>
            <Button
              text={
                financeData
                  ? financeData[0].Feedback_Section.Feedback_button_text
                  : "GET IN TOUCH"
              }
              onClick={() =>
                router.push(
                  financeData
                    ? financeData[0].Feedback_Section.Feedback_Redirect_url
                    : "/contact"
                )
              }
            />
          </div>
        )}

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
export const getServerSideProps = getServerSidePropsWithData(FinanceSeoQuery);

export default Finance;

export const Card = ({ cards }) => {
  return (
    <div className={styles.MainDivForcartSection}>
      <div className="row justify-content-center g-4">
        {cards &&
          cards.map((card) => (
            <div key={card.id} className="col-xxl-4 col-xl-4 col-lg-12 ">
              <div
                className={`${style.finance_card_body} card h-100 shadow-sm border-0`}
                style={{ backgroundColor: "#F8F8F8" }}
              >
                <div
                  className={`${style.body_card} card-body d-flex flex-column`}
                >
                  <div
                    className={`${style.finance_svgBg} mb-3 text-center text-warning`}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${card.Blog_Image?.url}`}
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
                    className={`mt-3 text-muted ${style.Description}`}
                    text={card?.Blog_Description?.[0]?.children?.[0]?.text}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
