import React, { useEffect, useState } from "react";
import style from "../../../styles/blog.module.css";
import { author_image, blog_image } from "../../../Utils/images";
import Description from "../../../Components/FormElement/Description";
import { Facebookicon, Instagramicon, Twittericon } from "../../../Utils/svg";
import { useRouter } from "next/router";
import axios from "axios";
import { marked } from "marked";
import SEO from "../../../Utils/SEO";
import styles from "./Blog.module.css";
import Button from "../../../Components/FormElement/Button";

const blog = ({ BlogData, fullUrl, setIsPageLoaded }) => {
  // const router = useRouter();
  // const id = router.query.id;

  // const getresources = async (id) => {
  //   const response = await axios.get(
  //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tests?filters[Slug][$eq]=${id}&populate=Blog_Image&populate=Author_Section&populate=Author_Section.Author_Profile_Image`
  //     // `http://localhost:1337/api/tests?filters[id][$eq]=8&populate=Resource_Blog&populate=Resource_Blog.Blog_Image&populate=Author_Section&populate=Author_Section.Author_Profile_Image`
  //   );
  //   return response;
  // };

  // const [BlogData, srtBlogData] = useState();

  // const getBlogData = async (id) => {
  //   try {
  //     const response = await getresources(id);
  //     srtBlogData(response.data.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (id != undefined) {
  //     getBlogData(id);
  //   } else {
  //     console.log("error");
  //   }
  // }, [id]);

  const router = useRouter();
  useEffect(() => {
    if (BlogData) {
      setIsPageLoaded?.(true);
    }
  }, [BlogData]);

  function formatCreatedAtDate(datestr) {
    const date = new Date(datestr);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    return `${month} ${day},${year}`;
  }
  return (
    <>
      {BlogData && (
        <SEO
          title={BlogData[0].seo.metaTitle}
          description={BlogData[0].seo.metaDescription}
          imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${BlogData[0].seo.shareImage.url}`}
          fullUrl={fullUrl}
          canonicalUrl={BlogData[0].seo.Canonical_Url}
        />
      )}
      <div className={style.blog_main_container}>
        <div className={style.main_top_container}>
          <div className={style.main_top_lft_container}>
            <img
              className={style.main_top_lft_image}
              src={
                BlogData
                  ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${BlogData[0]?.Blog_Image.url}`
                  : blog_image
              }
              alt={"about images"}
              loading="lazy"
              fetchpriority="high"
            />
          </div>
          <div className={style.main_top_right_container}>
            <h1 className={style.top_righ_heading}>
              {BlogData
                ? `${BlogData[0]?.Blog_Title}`
                : "Beaconer Vs CyberGRX : Evaluating TPRM Solutions"}
            </h1>
            {BlogData &&
              BlogData[0]?.Blog_Descriptiong.map((item, index) => {
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

            <div className={styles.combined_class}>
              {/* <div className={style.right_auther}>
                {`Written by ${BlogData && BlogData[0]?.Who_Written_Blog}`}
              </div> */}
              <div className={style.right_date}>
                {BlogData && BlogData[0]?.Blog_Publish_Date != null
                  ? formatCreatedAtDate(
                      BlogData && BlogData[0]?.Blog_Publish_Date.toString()
                    )
                  : formatCreatedAtDate(
                      BlogData && BlogData[0]?.createdAt.toString()
                    )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_side_div}>
          {/* <div className={style.right_auther}>
            {`Written by ${BlogData && BlogData[0]?.Who_Written_Blog}`}
          </div> */}
          <div className={style.right_date}>
            {BlogData && BlogData[0]?.Blog_Publish_Date != null
              ? formatCreatedAtDate(
                  BlogData && BlogData[0]?.Blog_Publish_Date.toString()
                )
              : formatCreatedAtDate(
                  BlogData && BlogData[0]?.createdAt.toString()
                )}
          </div>
        </div>
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
        <div>
          {/* <div
            className={style.discription_first}
            dangerouslySetInnerHTML={{
              __html: marked(
                BlogData && BlogData ? BlogData[0]?.Blog_Information : "About"
              ),
            }}
          /> */}

          <div
            className={style.discription_first}
            dangerouslySetInnerHTML={{
              __html: marked(
                BlogData && BlogData[0]?.Blog_Information
                  ? BlogData[0].Blog_Information
                  : "About",
                { mangle: false, headerIds: false }
              ),
            }}
          />
          {/* <div className={style.conclusion}>
            <h2 >Conclusion</h2>
            {BlogData &&
              BlogData[0]?.Conclusion.map((item, index) => {
                return (
                  <Description
                    key={index}
                    className={style.disctipt}
                    text={
                      item
                        ? item.children[0].text
                        : "Selecting the best third party risk management tool depends on your  organization’s specific needs. Beaconer offers user-friendly automation, while CyberGRX excels with its data-rich Exchange platform and analytics. Overall, Beaconer offers the better solution as it performs better across several important categories."
                    }
                  />
                );
              })}
          </div> */}
          <div className={style.conclusion}>
            <h2>Conclusion</h2>
            <div
              className={style.disctipt}
              dangerouslySetInnerHTML={{
                __html: marked(
                  BlogData && BlogData[0]?.Conclusion
                    ? BlogData[0].Conclusion
                    : "Conclusion",
                  { mangle: false, headerIds: false }
                ),
              }}
            />
            {/* {BlogData &&
              BlogData[0]?.Conclusion.map((item, index) => (
                <div key={index} className={style.disctipt}  dangerouslySetInnerHTML={{
                  __html: marked(
                    BlogData && BlogData[0]?.Blog_Information
                      ? BlogData[0].Blog_Information
                      : "About",
                    { mangle: false, headerIds: false }
                  ),
                }}/>
                  {item.children.map((child, childIndex) => {
                    if (child.type === "text") {
                      return <span key={childIndex}>{child.text}</span>;
                    }
                    if (child.type === "link") {
                      return (
                        <a
                          key={childIndex}
                          href={child.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {child.children[0].text}
                        </a>
                      );
                    }
                    return null;
                  })}
                </div>
              ))} */}
          </div>

          <div className={style.author_container}>
            <div>
              <div className={style.discription_heading}>
                <span className={style.orange}>Author</span>
              </div>
              {BlogData &&
                BlogData[0]?.Author_Section.About_Author.map((item, index) => {
                  return (
                    <Description
                      key={index}
                      className={style.disctipt}
                      text={
                        item
                          ? item.children[0].text
                          : "Nagaraj Kuppuswamy is the Co-founder and CEO of Beaconer, an esteemed enterprise specializing in managed third-party risk using the cloud native AI based solution. With an extensive portfolio of accolades and industry certifications, Nagaraj stands out as a seasoned expert, boasting over 16 years of dedicated involvement in the field of Cybersecurity. Throughout the course of their career, he has predominantly focused on elevating the realm of third-party risk assessment."
                      }
                    />
                  );
                })}
            </div>
            <div className={style.author_image_div_container}>
              <img
                src={
                  BlogData
                    ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${BlogData[0]?.Author_Section.Author_Profile_Image.url}`
                    : author_image
                }
                className={style.author_img}
                alt="author inage"
                loading="lazy"
                fetchpriority="high"
              />
              <div className={style.author_name_div}>
                <div className={style.author_name}>
                  {BlogData
                    ? BlogData[0]?.Author_Section.Author_Name
                    : "Nagaraj Kuppuswamy"}
                </div>
                <div className={style.author_disc}>
                  {BlogData
                    ? BlogData[0]?.Author_Section.Author_Post_Name
                    : "Co founder & CEO"}{" "}
                </div>
              </div>
            </div>
          </div>
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
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tests?filters[Slug][$eq]=${id}&populate=Blog_Image&populate=Author_Section&populate=Author_Section.Author_Profile_Image&populate=seo&populate=seo.shareImage&populate=CTA_Section`
    );

    const BlogData = response.data.data || null;

    const protocol = context.req.headers["x-forwarded-proto"] || "http";
    const host = context.req.headers.host;
    const fullUrl = `${protocol}://${host}${context.req.url}`;

    return {
      props: {
        BlogData,
        fullUrl,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        BlogData: null,
        fullUrl: null,
      },
    };
  }
}
export default blog;
