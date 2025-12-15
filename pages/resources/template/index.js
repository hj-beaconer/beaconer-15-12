import React, { useEffect, useState } from "react";
import style from "../../../styles/resources.module.css";
import styles from "../template/template.module.css";
import CardTemplate from "../../../Components/FormElement/CardTemplate";
import Button from "../../../Components/FormElement/Button";
import { handleOpenCalendly } from "../../../Components/calendlyUtils";
import { useRouter } from "next/router";
import { Pagination, useMediaQuery } from "@mui/material";
import Resourecenavigation from "../../../Components/Resourecenavigation";
import useTemplates from "../../../hooks/templatehook";
import SEO from "../../../Utils/SEO";
import { generateBeaconerStructuredData } from "../../../Utils/structuredData";

const Template = ({ setIsPageLoaded }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const siblingCount = isSmallScreen ? 0 : isMediumScreen ? 1 : 1;

  const { gettemplates } = useTemplates();

  const [templateData, setTemplateData] = useState();

  const router = useRouter();

  const getTemplatesData = async () => {
    try {
      const response = await gettemplates();
      setTemplateData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getTemplatesData();
  }, []);

  function trimParagraph(text, wordLimit) {
    if (!text || typeof text !== "string") return "";
    if (!wordLimit || typeof wordLimit !== "number" || wordLimit <= 0)
      return text;

    const words = text.split("");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join("") + "...";
    }
    return text;
  }

  function formatCreatedAtDate(datestr) {
    const date = new Date(datestr);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${month} ${day},${year}`;
  }

  const navigateToDynamicPage = (slug) => {
    router.push(`template/${slug}`);
  };
  const firstTwo = templateData && templateData?.slice(-2);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(templateData?.length / itemsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const reverceArr = [].concat(templateData).reverse();
  const currentItems = reverceArr?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      <SEO
        title="Risk Assessment Templates & Free Resources | Beaconer"
        description="Download our ready-to-use templates for third-party risk management. Beaconer makes it simple to check vendors, stay compliant, and manage risks with ease."
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
        imageUrl="/Beaconerlogo.png"
        fullUrl="https://beaconer.io/resources/template"
        canonicalUrl="/resources/template"
        structuredData={generateBeaconerStructuredData('templates', 'Risk Assessment Templates & Free Resources | Beaconer', 'Download our ready-to-use templates for third-party risk management. Beaconer makes it simple to check vendors, stay compliant, and manage risks with ease.', 'https://beaconer.io/resources/template')}
      />
      {templateData && (
        <div className="margin_div_children">
          <div className={styles.template_container}>
            <Resourecenavigation />
            {/* <div className="w-full h-96 bg-blue-200"> </div> */}
            <div className={`${style.main_container_forall}`}>
              <div className={`!mx-0 ${style.main_div}`}>
                <div className={style.right_side}>
                  <div className={style.text_h}>
                    <span className={style.orange}>Templates </span>
                  </div>
                  <div className={style.upercard}>
                    {currentItems?.reverse().map((itm, index) => {
                      return (
                        <CardTemplate
                          key={index}
                          onclick={() => {
                            navigateToDynamicPage(itm.Slug);
                          }}
                          date={formatCreatedAtDate(itm?.createdAt?.toString())}
                          url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${itm?.Template_Image?.url}`}
                          title={trimParagraph(itm?.Template_Title, 48)}
                          para={trimParagraph(
                            itm?.Teplate_Description[0]?.children[0]?.text,
                            150
                          )}
                        />
                      );
                    })}
                  </div>
                  <Pagination
                    className={style.bottom_num_container}
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    shape="rounded"
                    siblingCount={siblingCount}
                    boundaryCount={1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.main_div_title_description}>
            <div className={style.div_for_experience_unpralleled}>
              <div>
                <div className="row">
                  <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                    <div
                      className="text-xl/8  font-bold md:text-[40px]/[1.2]"
                      style={{
                        fontFamily: "Raleway",
                      }}
                    >
                      <span className={style.experient_text}>
                        Join today and
                      </span>
                      <span
                        className={style.expert_team}
                        style={{
                          color: "#f76324",
                          fontFamily: "Raleway",
                        }}
                      >
                        {" "}
                        unlock personalized services designed to meet your needs
                      </span>
                      <span className={style.experient_text}>
                        {" "}
                        Start your journey with us now.
                      </span>
                    </div>
                    <Button
                      className={style.button_text_div}
                      text={"JOIN NOW"}
                      onClick={() => handleOpenCalendly()}
                    />
                  </div>
                </div>

                <div className={style.circle_design}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Template;
