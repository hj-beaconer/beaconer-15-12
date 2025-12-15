import React, { useEffect, useState } from "react";
import style from "../../../styles/blog.module.css";
import styles from "../news/news.module.css";
import { blog_image } from "../../../Utils/images";
import Description from "../../../Components/FormElement/Description";
import { Facebookicon, Instagramicon, Twittericon } from "../../../Utils/svg";
import axios from "axios";
import { marked } from "marked";
import SEO from "../../../Utils/SEO";
import Button from "../../../Components/FormElement/Button";

const blog = ({ BlogData, fullUrl, PopularNews }) => {
  function formatCreatedAtDate(datestr) {
    const date = new Date(datestr);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${month} ${day},${year}`;
  }
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
  return (
    <>
      {BlogData && (
        <SEO
          title={BlogData[0].Seo.metaTitle}
          description={BlogData[0].Seo.metaDescription}
          imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${BlogData[0].Seo.shareImage.url}`}
          fullUrl={fullUrl}
          canonicalUrl={BlogData[0].Seo.Canonical_Url}
        />
      )}

      <div className={style.blog_main_container}>
        <div className={styles.news_heading}>
          {BlogData
            ? `${BlogData[0]?.News_Title}`
            : "Beaconer Vs CyberGRX : Evaluating TPRM Solutions"}
        </div>
        <div className={styles.main_top_container_news_div}>
          <div className={styles.left_container}>
            <img
              className={styles.news_image_first_div}
              src={
                BlogData
                  ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${BlogData[0]?.News_Image.url}`
                  : blog_image
              }
              alt={"about images"}
              loading="lazy"
              fetchpriority="high"
            />
            <div className={style.midle_container}>
              <div className={style.midle_time}>4 min read</div>
              <div className={style.social_icon_contaimer}>
                <div className={style.social_icons}>
                  <div
                    className={style.svgicon}
                    style={{
                      height: "20px",
                      width: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {Facebookicon.icon()}
                  </div>
                </div>
                <div className={style.social_icons}>
                  <div
                    className={style.svgicon}
                    style={{
                      height: "20px",
                      width: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {Instagramicon.icon()}
                  </div>
                </div>
                <div className={style.social_icons}>
                  <div
                    className={style.svgicon}
                    style={{
                      height: "20px",
                      width: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {Twittericon.icon()}
                  </div>
                </div>
              </div>
            </div>
            {BlogData &&
              BlogData[0]?.News_Description.map((item, index) => {
                return (
                  <Description
                    key={index}
                    className={style.top_righ_para}
                    text={
                      item
                        ? item.children[0].text
                        : "Managing third party risk has emerged as a crucial part of an organization’s risk management plan in the linked world of today. With so many suppliers, partners, and vendors, companies need reliable solutions to evaluate, track, and reduce the risks related to outside parties. "
                    }
                  />
                );
              })}
            <div className={styles.key_discussion}>
              {BlogData && BlogData[0].Key_Theme_Section.Key_Theme_Title}
            </div>
            {BlogData &&
              BlogData[0]?.Key_Theme_Section.Key_Theme.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={style.discription_first}
                      dangerouslySetInnerHTML={{
                        __html: marked(item ? item.Information : "About"),
                      }}
                    />
                    <img
                      src={
                        item
                          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Image.url}`
                          : blog_image
                      }
                      alt={"about images"}
                      loading="lazy"
                      fetchpriority="high"
                    />
                  </>
                );
              })}
          </div>

          <div className={styles.right_side_container}>
            <div className={styles.most_popular}>
              Most Popular <span className={styles.news_text}>News</span>
            </div>
            <div className={styles.main_div_popular}>
              {PopularNews &&
                PopularNews.map((itm, index) => (
                  <>
                    <div key={index} className={styles.popuale_new_main_div}>
                      <img
                        className={styles.popular_news_image}
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${itm?.News_Image.url}`}
                        alt={"about images"}
                        loading="lazy"
                        fetchpriority="high"
                      />
                      <div className={styles.info_div}>
                        <div className={styles.popular_sub_main_heading}>
                          {trimParagraph(itm?.News_Title, 5)}
                        </div>
                        <div className={styles.popular_sub_description}>
                          {trimParagraph(
                            itm?.News_Description[0]?.children[0].text,
                            9
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
        <div
          className={`flex mt-[14px] sm:mt-[30px] lg:hidden ${style.right_bottom}`}
        >
          <div className={style.right_auther}>
            {`Written by ${BlogData && BlogData[0]?.Who_Written_Blog}`}
          </div>
          <div className={style.right_date}>
            {formatCreatedAtDate(BlogData && BlogData[0]?.createdAt.toString())}
          </div>
        </div>

        <div>
          <div
            className={style.discription_first}
            // dangerouslySetInnerHTML={{
            //   __html: marked(
            //     BlogData && BlogData ? BlogData[0]?.Blog_Information : "About"
            //   ),
            // }}
          />
        </div>
      </div>

      <div className={style.main_div_title_description}>
        <div className={style.div_for_experience_unpralleled}>
          <div>
            <div className="row">
              <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                {BlogData && (
                  <>
                    <div
                      className="text-xl/8  font-bold md:text-[40px]/[1.2] "
                      style={{
                        fontFamily: "Raleway",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: marked(
                          BlogData[0].CTA_Section.CTA_Section_Heading
                        ),
                      }}
                    ></div>
                    <Button
                      className={style.button_text_div}
                      text={
                        BlogData
                          ? BlogData[0].CTA_Section.CTA_Section_Button_Text
                          : "JOIN NOW"
                      }
                      onClick={() =>
                        router.push(
                          BlogData
                            ? BlogData[0].CTA_Section
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
    </>
  );
};
export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/news-pages?filters[Slug][$eq]=${id}&populate=News_Image&populate=CTA_Section&populate=Key_Theme_Section&populate=Key_Theme_Section.Key_Theme&populate=Key_Theme_Section.Key_Theme.Image&populate=Seo&populate=Seo.shareImage&populate=CTA_Section`
    );

    const res = await axios.get(
      `${
        process.env.NEXT_PUBLIC_BACKEND_URL
      }/api/news-pages?filters[Is_It_Popular][$eq]=${true}&populate=News_Image&populate=CTA_Section&populate=Key_Theme_Section&populate=Key_Theme_Section.Key_Theme&populate=Key_Theme_Section.Key_Theme.Image&populate=Seo&populate=Seo.shareImage&populate=CTA_Section`
    );
    const BlogData = response.data.data || null;

    const PopularNews = res.data.data || null;

    const protocol = context.req.headers["x-forwarded-proto"] || "http";
    const host = context.req.headers.host;
    const fullUrl = `${protocol}://${host}${context.req.url}`;

    return {
      props: {
        BlogData,
        fullUrl,
        PopularNews,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        BlogData: null,
        fullUrl: null,
        PopularNews: null,
      },
    };
  }
}
export default blog;
