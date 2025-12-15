"use client";

import Description from "../Components/FormElement/Description";
import style from "../styles/cybersecurityaudit.module.css";
import Image from "next/image";
import Button from "../Components/FormElement/Button";
import { Cybersecurity, Footercontenar } from "../Utils/images";
import { handleOpenCalendly } from "../Components/calendlyUtils";
import { useEffect, useState } from "react";
import usecybersecurity from "../hooks/cybersecurity";
import { marked } from "marked";
import { useRouter } from "next/navigation";
import { CyberSecuritySeoQuery } from "../Utils/seoEndponts";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";

const cybersecurityaudit = ({ Data, fullUrl, setIsPageLoaded}) => {
  const router = useRouter();
  const { getcybersecurity } = usecybersecurity();
  const [cyberData, setcyberData] = useState();
  const getcybersecurityData = async () => {
    try {
      const response = await getcybersecurity();
      setcyberData(response.data.data[0]);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getcybersecurityData();
  }, []);

  return (
    <>
      {Data && (
        <SEO
          title={Data[0].seo.metaTitle}
          description={Data[0].seo.metaDescription}
          imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${Data[0].seo.shareImage.url}`}
          canonicalUrl={Data[0].seo.Canonical_Url}
          fullUrl={fullUrl}
        />
      )}
      <div className={style.div_for_backgroung_color}>
        <div className={`${style.main_container_div_for_Cybersecurity}`}>
          <div className={`${style.main_container_div_for_Cybersecurity}`}>
            <div className={style.main_div_for_content}>
              <div className={`${style.class_for_heading_post_merger}`}>
                {cyberData &&
                  cyberData?.Solution_Quick_Threat_Environment_Hero_Section
                    .Solution_Quick_Threat_Environment_Hero_Section_Sub_Heading}
              </div>
              <div
                className={`${style.class_for_heading_Cybersecurity} fw-bold `}
              >
                {cyberData &&
                  cyberData?.Solution_Quick_Threat_Environment_Hero_Section
                    .Solution_Quick_Threat_Environment_Hero_Section_Main_Heading}
              </div>
              <Description
                className={`mt-3`}
                text={
                  cyberData &&
                  cyberData?.Solution_Quick_Threat_Environment_Hero_Section
                    .Solution_Quick_Threat_Environment_Hero_Section_Description[0]
                    .children[0].text
                }
              />
              <div>
                <Button
                  onClick={() => handleOpenCalendly()}
                  text={"Get Started"}
                />
              </div>
            </div>
            <Image
              src={Cybersecurity}
              alt="image"
              width="655px"
              height="500px"
              className={style.Styles_for_cybersecurity_image}
            />
          </div>
        </div>
      </div>

      <div className={style.main_div_for_key_features}>
        <div className={style.main_div_for_key_features}>
          <div className={style.main_div_for_key_features_detail}>
            <div className={style.heading_for_key_features}>
              <div
                className={style.span_for_key}
                dangerouslySetInnerHTML={{
                  __html: marked(
                    `${
                      cyberData
                        ? cyberData &&
                          cyberData
                            ?.Solution_Quick_Threat_Environment_Key_Feature_Section
                            .Key_Feature_Section_Main_Title
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
                cyberData
                  ? cyberData
                      ?.Solution_Quick_Threat_Environment_Key_Feature_Section
                      .Key_Feature_Section_Description[0].children[0].text
                  : "The company successfully secures its expanded network by ensuring that all assets are accounted for and protected against potential threats. This proactive approach minimizes the risk of data breaches and strengthens the overall cybersecurity posture, fostering confidence among stakeholders and clients. By addressing inherited risks, the organization can operate with a unified security strategy that safeguards its valuable information assets in a merged environment."
              }
            />
          </div>
          <div className={style.main_div_for_card}>
            {cyberData &&
              cyberData.Solution_Quick_Threat_Environment_Key_Feature_Section.Key_Feature_Section_Blogs.map(
                (item, index) => (
                  <div key={index} className={style.div_for_card}>
                    <div className={style.iconContainer}>
                      <div>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Blog_Svg.url}`}
                          alt="logos"
                          loading="lazy"
                          fetchpriority="high"
                        />
                      </div>
                    </div>
                    <h3 className={style.title}>{item.Blog_Title}</h3>
                    <p className={style.description}>{item.Blog_Description}</p>
                  </div>
                )
              )}
          </div>
        </div>
      </div>

      <div
        className={`container-fluid mt-5 ${style.divforExperienceunparalleled}`}
        style={{
          backgroundColor: "#fff6f2",
          width: "100%",
          position: "relative",
        }}
      >
        <div className={` ${style.circle_MainDivContanir}`}>
          <div className="row">
            <div className={`col-md-8 ${style.main_dv_for_experience}`}>
              {cyberData && (
                <>
                  <div
                    className="fs-1 fw-bold text-dark "
                    style={{
                      fontFamily: "Raleway",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: marked(cyberData.CTA_Section.CTA_Section_Heading),
                    }}
                  ></div>
                  <Button
                    className={style.button_text_div}
                    text={
                      cyberData
                        ? cyberData.CTA_Section.CTA_Section_Button_Text
                        : "JOIN NOW"
                    }
                    onClick={() =>
                      router.push(
                        cyberData
                          ? cyberData.CTA_Section
                              .CTA_Section_Button_Reidrect_Url
                          : "/contact"
                      )
                    }
                  />
                </>
              )}
            </div>
          </div>

          <Image
            className={style.circle_design}
            alt="Logo"
            src={Footercontenar}
          />
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = getServerSidePropsWithData(
  CyberSecuritySeoQuery
);

export default cybersecurityaudit;
