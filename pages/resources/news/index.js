import React, { useEffect, useState } from "react";
import style from "../../../styles/resources.module.css";
import styles from "../news/news.module.css";
import Button from "../../../Components/FormElement/Button";
import { handleOpenCalendly } from "../../../Components/calendlyUtils";
import useResources from "../../../hooks/resourecehook";
import { useRouter } from "next/router";
import { Pagination, useMediaQuery } from "@mui/material";
import Resourecenavigation from "../../../Components/Resourecenavigation";
import CardBottom from "../../../Components/FormElement/CardBottom";
import CardRecentNews from "../../../Components/FormElement/CardRecentNews";
import CardPopularNews from "../../../Components/FormElement/CardPopularNews";
import useNews from "../../../hooks/newshook";

const news = ({ setIsPageLoaded }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const siblingCount = isSmallScreen ? 0 : isMediumScreen ? 1 : 1;

  useResources();

  const { getnews } = useNews();

  const [newsData, setNewsData] = useState();

  const router = useRouter();

  const getNewsData = async () => {
    try {
      const response = await getnews();
      setNewsData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getNewsData();
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
    router.push(`news/${slug}`);
  };
  const firstTwo = newsData && newsData?.slice(-2);
  // const firstFou = newsData && newsData?.slice(-4);
  const firstFour =
    newsData && newsData?.filter((itm) => itm.Is_It_Popular === true);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsData?.length / itemsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const reverceArr = [].concat(newsData).reverse();
  const currentItems = reverceArr?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      {newsData && (
        <div className="margin_div_children">
          <div className={styles.news_container}>
            <Resourecenavigation />
            <div className={`${style.main_container_forall}`}>
              <div className={styles.news_main_div}>
                <div className={style.right_side}>
                  <div className={styles.sub_div_news}>
                    <div className={styles.main_inner_news_div}>
                      <div className={styles.heading_text}>
                        Recent <span className={style.orange}>News </span>
                      </div>
                      <div className={styles.news_main_upper_card}>
                        {firstTwo?.reverse().map((itm, index) => {
                          return (
                            <CardRecentNews
                              key={index}
                              onclick={() => {
                                navigateToDynamicPage(itm.Slug);
                              }}
                              url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${itm?.News_Image?.url}`}
                              title={itm.News_Title}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className={styles.four_img_div}>
                      <div className={styles.heading_text}>
                        Most Popular <span className={style.orange}>News </span>
                      </div>
                      <div className={styles.news_main_upper_card}>
                        {firstFour?.reverse().map((itm, index) => {
                          return (
                            <CardPopularNews
                              key={index}
                              onclick={() => {
                                navigateToDynamicPage(itm.Slug);
                              }}
                              url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${itm?.News_Image?.url}`}
                              title={itm.News_Title}
                              para={trimParagraph(
                                itm.News_Description[0].children[0].text,
                                20
                              )}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className={style.text_h1}>
                    <span className={style.orange}>All </span>News
                  </div>
                  <div className={style.bottomcard}>
                    {currentItems?.map((itm, index) => (
                      <CardBottom
                        onclick={() => {
                          navigateToDynamicPage(itm.Slug);
                        }}
                        key={index}
                        date={formatCreatedAtDate(itm?.createdAt?.toString())}
                        url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${itm?.News_Image.url}`}
                        title={trimParagraph(itm?.News_Title, 5)}
                        para={trimParagraph(
                          itm?.News_Description[0]?.children[0].text,
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
                <div className={styles.cta_news}>
                  <div className={styles.formal_div}>
                    <div
                      className={styles.join_text}
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

export default news;
