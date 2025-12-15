import React, { useEffect, useState } from "react";
import style from "../../../styles/resources.module.css";
import styles from "./Blog.module.css";
import CardRecent from "../../../Components/FormElement/CardRecent";
import CardBottom from "../../../Components/FormElement/CardBottom";
import Button from "../../../Components/FormElement/Button";
import { handleOpenCalendly } from "../../../Components/calendlyUtils";
import useResources from "../../../hooks/resourecehook";
import { useRouter } from "next/router";
import { Pagination, useMediaQuery } from "@mui/material";
import { ResourceSeoQuery } from "../../../Utils/seoEndponts";
import { getServerSidePropsWithData } from "../../../Utils/getServerSideData";
import SEO from "../../../Utils/SEO";
import Resourecenavigation from "../../../Components/Resourecenavigation";
import { generateBeaconerStructuredData } from "../../../Utils/structuredData";

const Resources = ({ Data, fullUrl, setIsPageLoaded }) => {
  // Responsive design using Material-UI's useMediaQuery
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  // Adjust siblingCount based on screen size
  const siblingCount = isSmallScreen ? 0 : isMediumScreen ? 1 : 1;

  const { getresources } = useResources();

  const [ResourceData, setResourceData] = useState();

  const router = useRouter();

  const getResourcesData = async () => {
    try {
      const response = await getresources();
      setResourceData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getResourcesData();
  }, []);

  function trimParagraph(text, wordLimit) {
    if (!text || typeof text !== "string") return "";
    if (!wordLimit || typeof wordLimit !== "number" || wordLimit <= 0)
      return text;

    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
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
    router.push(`blog/${slug}`);
  };
  const firstTwo = ResourceData && ResourceData?.slice(-2);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(ResourceData?.length / itemsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const reverceArr = [].concat(ResourceData).reverse();
  const currentItems = reverceArr?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      {ResourceData && (
        <div className="margin_div_children">
          <div className={styles.blog_container_div}>
            {Data && (
        <SEO
        title="Insights on Risk Dashboard, Reporting & AI Security | Beaconer"
        description=": Stay updated with our blogs on AI-driven risk assessments, cybersecurity & risk management practices. Check out how automation is shaping the future of assessments."
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
      )}

            <Resourecenavigation />
            <div className={`${style.main_container_forall}`}>
              <div className={styles.blog_main_div}>
                <div className={style.right_side}>
                  <div className={style.text_h}>
                    Recent <span className={style.orange}>Blogs </span>
                  </div>
                  <div className={style.upercard}>
                    {firstTwo?.reverse().map((itm, index) => {
                      return (
                        <CardRecent
                          key={index}
                          onclick={() => {
                            navigateToDynamicPage(itm.Slug);
                          }}
                          date={
                            itm.Blog_Publish_Date
                              ? formatCreatedAtDate(
                                  itm?.Blog_Publish_Date?.toString()
                                )
                              : formatCreatedAtDate(itm?.createdAt?.toString())
                          }
                          url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${itm?.Blog_Image?.url}`}
                          title={itm.Blog_Title}
                          para={trimParagraph(
                            itm.Blog_Descriptiong[0].children[0].text,
                            20
                          )}
                        />
                      );
                    })}
                  </div>

                  <div className={style.text_h1}>
                    <span className={style.orange}>All </span>Blog
                  </div>

                  <div className={style.bottomcard}>
                    {currentItems?.map((itm, index) => (
                      <CardBottom
                        onclick={() => {
                          navigateToDynamicPage(itm.Slug);
                        }}
                        key={index}
                        date={
                          itm.Blog_Publish_Date
                            ? formatCreatedAtDate(
                                itm?.Blog_Publish_Date?.toString()
                              )
                            : formatCreatedAtDate(itm?.createdAt?.toString())
                        }
                        url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${itm?.Blog_Image.url}`}
                        title={trimParagraph(itm?.Blog_Title, 5)}
                        para={trimParagraph(
                          itm?.Blog_Descriptiong[0]?.children[0].text,
                          9
                        )}
                      />
                    ))}
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
                <div className={styles.cta_div}>
                  <div className={style.cta_sub_div}>
                    <div
                      className={styles.today_join_div}
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
export const getServerSideProps = getServerSidePropsWithData(ResourceSeoQuery);

export default Resources;
