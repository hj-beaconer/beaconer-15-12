import React, { useEffect, useState } from "react";
import style from "../../../styles/blog.module.css";
import styles from "../blog/Blog.module.css";
import { Ic_download } from "../../../Utils/svg";
import { useRouter } from "next/router";
import axios from "axios";
import { marked } from "marked";
import SEO from "../../../Utils/SEO";
import Button from "../../../Components/FormElement/Button";

const template = ({ BlogData, fullUrl }) => {
  const [modelVisible, setModelVisible] = useState(false);
  console.log(BlogData);
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
      <div
        className={`${style.main_container_tamplate} ${style.blog_main_container}`}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: marked(
              BlogData && BlogData ? BlogData[0]?.Teplate_Information : "About"
            ),
          }}
        />
        <div className={styles.template_div_main}>
          <button
            className={styles.download_btn}
            onClick={() => setModelVisible(!modelVisible)}
          >
            {BlogData && BlogData[0]?.Dowload_Button?.Button_text}
            {Ic_download.icon()}
          </button>
        </div>
      </div>
      {modelVisible && (
        <Model setModelVisible={setModelVisible} BlogData={BlogData} />
      )}

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
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/templates?filters[Slug][$eq]=${id}&populate=CTA_Section&populate=Seo&populate=Seo.shareImage&populate=CTA_Section&populate=Dowload_Button&populate=Upload_Document`
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
export default template;

const Model = ({ setModelVisible, BlogData }) => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={styles.overlay_div}>
      <div className={styles.overlay_sub_div}>
        <button
          className={styles.close_button}
          onClick={() => setModelVisible(false)}
        >
          x
        </button>
        <h2 className={styles.form_heading}>Download Template</h2>
        <div className="flex flex-col gap-2">
          {["name", "email", "phone", "company"].map((field, index) => (
            <div key={index} className={styles.input_container}>
              <input
                autoComplete="off"
                type={field === "phone" ? "number" : "text"}
                id={field}
                className={styles.input_field}
                placeholder={`Enter your ${
                  field.charAt(0).toUpperCase() + field.slice(1)
                }`}
              />
              <label htmlFor={field} className={styles.input_label}>
                {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                {field !== "phone" && "*"}
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 sm:gap-8">
          <p className={styles.privacy_policy}>
            By clicking register, I consent to the use of my personal data in
            accordance with <span>Beaconer Privacy Policy</span>
          </p>
          {/* <Button
            className={styles.submit_button}
            onClick={() => router.push("/resources/template/thankyou")}
            text={"Submit"}
          /> */}

          <Button
            className={styles.submit_button}
            onClick={() => {
              router.push("/resources/template/thankyou");

              setTimeout(() => {
                const link = document.createElement("a");
                // link.href = "/aa.pdf";
                link.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}${BlogData[0]?.Upload_Document?.url}`;
                link.download = "Beaconer-template.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }, 2000);
            }}
            text={"Submit"}
          />
        </div>
      </div>
    </div>
  );
};
