import React, { useEffect, useState } from "react";
import style from "../../../styles/resources.module.css";
import Button from "../../../Components/FormElement/Button";
import { handleOpenCalendly } from "../../../Components/calendlyUtils";
import { useRouter } from "next/router";
import { Pagination, useMediaQuery } from "@mui/material";
import Resourecenavigation from "../../../Components/Resourecenavigation";
import CardWebinar from "../../../Components/FormElement/cardWebinar";
import styles from "./Webinar.module.css";
import useWebinars from "../../../hooks/webinarhook";
const webinar = ({ setIsPageLoaded }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const siblingCount = isSmallScreen ? 0 : isMediumScreen ? 1 : 1;

  const { getwebinars } = useWebinars();

  const [webinarData, setWebinarData] = useState();

  const router = useRouter();

  const getWebinarData = async () => {
    try {
      const response = await getwebinars();
      setWebinarData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getWebinarData();
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
    router.push(`webinar/${slug}`);
  };
  const firstTwo = webinarData && webinarData?.slice(-2);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(webinarData?.length / itemsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const reverceArr = [].concat(webinarData).reverse();
  const currentItems = reverceArr?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      {webinarData && (
        <div className="margin_div_children">
          <div className={styles.flexContainer}>
            <Resourecenavigation />
            <div className={`${style.main_container_forall}`}>
              <div className={styles.main_div_custom}>
                <div className={style.right_side}>
                  <div className={style.text_h}>
                    Upcoming <span className={style.orange}> Webinars </span>
                  </div>
                  <div className={style.upercard}>
                    {currentItems?.reverse().map((itm, index) => {
                      return (
                        <CardWebinar
                          key={index}
                          onclick={() => {
                            navigateToDynamicPage(itm.Slug);
                          }}
                          date={formatCreatedAtDate(itm?.createdAt?.toString())}
                          url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${itm?.Webinar_Image?.url}`}
                          title={trimParagraph(itm?.Webinar_Title, 7)}
                          para={trimParagraph(
                            itm?.Webinar_Description[0]?.children[0]?.text,
                            12
                          )}
                          Speakers={itm?.Speakers}
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
                    siblingCount={siblingCount} // Number of page numbers shown around the current page
                    boundaryCount={1} // Number of page numbers shown at the beginning and end
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={style.main_div_title_description}>
            <div className={style.div_for_experience_unpralleled}>
              <div>
                <div className={styles.row}>
                  <div
                    className={`${styles.colMd9} ${style.main_dv_for_experience}`}
                  >
                    <div
                      className={styles.textStyle}
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

export default webinar;
