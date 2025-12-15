import React, { useEffect, useState } from "react";
import style from "../styles/technology.module.css";
import styles from "../Components/FormElement/form.module.css";
import Description from "../Components/FormElement/Description";
import useIndustries from "../hooks/industries";
import { marked } from "marked";
import Button from "../Components/FormElement/Button";
import { useRouter } from "next/navigation";
import { ManufactureSeoQuery } from "../Utils/seoEndponts";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";
import Image from "next/image";
import { bg_dots, grid, technology_bg } from "../Utils/images";
import { generateBeaconerStructuredData } from "../Utils/structuredData";

const manufacturing = ({ Data, fullUrl, setIsPageLoaded }) => {
  const router = useRouter();
  const [manufactureData, setManufactureData] = useState();
  const { getmanufacture } = useIndustries();
  const getManufactureData = async () => {
    try {
      const response = await getmanufacture();
      setManufactureData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getManufactureData();
  }, []);
  return (
    <>
      {manufactureData && (
        <div className="margin_div_children">
          <div className="relative">
            {Data && (
                <SEO
          title="Manufacturing Risk Management Solution | Beaconer"
          description="Get AI-powered third-party risk assessments to continuously scan suppliers and reduce risks that could impact operations, compliance, or reputation."
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
          canonicalUrl="/information-technology-risk-managementt"
          structuredData={generateBeaconerStructuredData('financial', 'Financial Services Risk Management | Beaconer', 'Financial institutions face growing regulatory & cyber risks. Beaconer provides automated third-party risk assessments that help manage vendor risks effectively.', fullUrl)}
        />
            )}

            <div className="absolute  lg:w-[3415px] lg:h-[3206px] -translate-x-1/2 lg:-translate-y-[72%] bg-[radial-gradient(circle,#0EAACDCC_0%,rgba(218,231,234,0)_50%,rgba(255,255,255,0)_100%)] z-0 w-[1250px] h-[1250px] left-1/2 -translate-y-[70%]"></div>
            <Image src={bg_dots} className="absolute -top-10" />
            {manufactureData && (
              <div className={style.health_main_container}>
                <div className={style.main_head_container}>
                  <div className={style.main_heading}>
                    {manufactureData
                      ? manufactureData[0]?.Manufacture_Main_Heading
                      : "Protecting Innovation, Intellectual Property, and Supply Chains "}
                  </div>
                  <div className={style.main_sub_heading}>
                    {manufactureData
                      ? manufactureData[0]?.Manufacture_Main_Description[0]
                          ?.children[0]?.text
                      : "In a rapidly evolving digital landscape, technology companies face increasing third-party risks from data breaches, supply chain attacks, and regulatory challenges. Beaconer empowers technology organizations to safeguard their ecosystems, protect their intellectual property, and maintain stakeholder trust. "}
                  </div>
                </div>
                <div className={style.second_section_container}>
                  <img
                    className={style.second_image}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${manufactureData[0]?.Manufacture_Hero_Section?.Manufacture_Hero_Section_Image.url}`}
                    loading="lazy"
                    fetchpriority="high"
                  />
                  <div className={style.second_content_container}>
                    <div
                      className={style.second_cpntent_tile}
                      dangerouslySetInnerHTML={{
                        __html: marked(
                          `${
                            manufactureData
                              ? manufactureData[0]?.Manufacture_Hero_Section
                                  .Manufacture_Hero_Section_Main_Heading
                              : "Third-Party Risks Impacting the Technology Industry"
                          }`
                        ),
                      }}
                    />
                    <div className={style.second_content_discription}>
                      {manufactureData
                        ? `${manufactureData[0].Manufacture_Hero_Section.Manufacture_Hero_Section_Main_Description[0].children[0].text}`
                        : "1 in 4 tech companies face cyberattacks annually, with 90% of vendors having critical vulnerabilities. At a $4.35M average breach cost, managing these risks is vital. Beaconer offers scalable solutions to protect assets, ensure compliance, and prevent disruptions."}
                    </div>
                  </div>
                </div>

                <div className="relative flex flex-col items-center justify-center ">
                  <Image
                    src={technology_bg}
                    className="absolute lg:h-auto h-full -z-1 top-1/2 -translate-y-1/2 -right-[8%]"
                  />
                  <div
                    className={style.seconry_heading}
                    dangerouslySetInnerHTML={{
                      __html: marked(
                        `${
                          manufactureData
                            ? manufactureData[0].Manufacture_Hero_Section
                                .Manufacture_Hero_Section_Sub_Heading
                            : "Why Technology Companies Choose Beaconer "
                        }`
                      ),
                    }}
                  />
                  <div className={style.seconry_discription}>
                    {manufactureData
                      ? `${manufactureData[0].Manufacture_Hero_Section.Manufacture_Hero_Section_Sub_Description[0].children[0].text}`
                      : "Beaconer simplifies third-party risk management, ensuring resilience, data security, and compliance. Our tailored TPRM solutions and extensive tech vendor database help mitigate risks and integrate seamlessly with your operations. "}
                  </div>
                </div>
              </div>
            )}

            {manufactureData &&
              manufactureData[0].Manufacture_Feature_Section.map((item) => (
                <div className={style.main_feature_section}>
                  <div className={style.main_image_container}>
                    <img
                      alt="blank image"
                      src={
                        item
                          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Manufacture_Feature_Section_Image.url}`
                          : blanlimage
                      }
                      className={style.feature_image}
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
                              ? item.Manufacture_Feature_Section_Heading
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
                              ? item.Manufacture_Feature_Section_Description
                              : "Align with HIPAA and more Customizable vendor assessments Easy compliance mapping Instant, tailored executive reports"
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
                            manufactureData
                              ? manufactureData &&
                                manufactureData[0]
                                  ?.Manufacture_Service_Section[0]
                                  .Service_Section_Heading
                              : "Key Features"
                          }`
                        ),
                      }}
                    />
                  </div>
                  <div
                    className={`text-center ${style.Styles_for_keyfeatures_underline}`}
                  ></div>
                  <Description
                    className={`mt-3 ${style.Description}`}
                    text={
                      manufactureData
                        ? manufactureData[0]?.Manufacture_Service_Section[0]
                            .Service_Section_Description[0].children[0].text
                        : "The company successfully secures its expanded network by ensuring that all assets are accounted for and protected against potential threats. This proactive approach minimizes the risk of data breaches and strengthens the overall cybersecurity posture, fostering confidence among stakeholders and clients. By addressing inherited risks, the organization can operate with a unified security strategy that safeguards its valuable information assets in a merged environment."
                    }
                  />
                </div>
                <div className={style.main_div_for_card}>
                  {manufactureData &&
                    manufactureData[0].Manufacture_Service_Section[0].Service_Section_Blog.map(
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
                                  item
                                    ? item && item.Blog_Heading
                                    : "Key Features"
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
                      manufactureData
                        ? manufactureData &&
                          manufactureData[0]?.What_Sets_Beaconer_Apart
                            .Mian_Heading
                        : "Key Features"
                    }`
                  ),
                }}
              />

              <div className={style.apart_card_container}>
                {manufactureData &&
                  manufactureData[0]?.What_Sets_Beaconer_Apart.Beaconer_Apart_Card_Section.map(
                    (item) => (
                      <div className={style.apart_card} key={item.id}>
                        <img
                          className={style.apart_card_image}
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Card_Image.url}`}
                          alt="apart from"
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
                      {manufactureData && (
                        <>
                          <div
                            className="text-xl/8  font-bold md:text-[40px]/[1.2]  "
                            style={{
                              fontFamily: "Raleway",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: marked(
                                manufactureData[0].CTA_Section
                                  .CTA_Section_Heading
                              ),
                            }}
                          ></div>
                          <p className={style.experient_para}>
                            {
                              manufactureData[0].CTA_Section
                                .CTA_Section_Description[0]?.children[0]?.text
                            }
                          </p>
                          <Button
                            className={style.button_text_div}
                            text={
                              manufactureData
                                ? manufactureData[0].CTA_Section
                                    .CTA_Section_Button_Text
                                : "REQUEST A DEMO"
                            }
                            onClick={() =>
                              router.push(
                                manufactureData
                                  ? manufactureData[0].CTA_Section
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
            {manufactureData && (
              <div className={style.last_section}>
                <div className={style.Last_heading}>
                  {
                    manufactureData[0].Feedback_Section.Feedback_Message[0]
                      ?.children[0]?.text
                  }
                </div>
                <Button
                  text={
                    manufactureData
                      ? manufactureData[0].Feedback_Section.Feedback_button_text
                      : "GET IN TOUCH"
                  }
                  onClick={() =>
                    router.push(
                      manufactureData
                        ? manufactureData[0].Feedback_Section
                            .Feedback_Redirect_url
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
        </div>
      )}
    </>
  );
};
export const getServerSideProps =
  getServerSidePropsWithData(ManufactureSeoQuery);

export default manufacturing;

export const Card = ({ cards }) => {
  return (
    <div className={styles.MainDivForcartSection}>
      <div className="row justify-content-center g-4">
        {cards &&
          cards.map((card) => (
            <div key={card.id} className="col-xxl-4 col-xl-4 col-lg-12 ">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ backgroundColor: "#F8F8F8" }}
              >
                <div className="card-body d-flex flex-column">
                  <div className="mb-3 text-center text-warning">
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
                    className={`mt-3 text-muted ${style.Description}`}
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
