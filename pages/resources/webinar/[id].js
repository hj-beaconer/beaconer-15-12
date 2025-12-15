import React, { useEffect, useState } from "react";
import style from "../../../styles/blog.module.css";
import styles from "../webinar/Webinar.module.css";
import { author_image, blog_image } from "../../../Utils/images";
import Description from "../../../Components/FormElement/Description";
import { Facebookicon, Instagramicon, Twittericon } from "../../../Utils/svg";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { marked } from "marked";
import SEO from "../../../Utils/SEO";
import Button from "../../../Components/FormElement/Button";

const webinar = ({ BlogData, fullUrl }) => {
  const router = useRouter();

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
      <div className={styles.main_web_con}>
        <div className={styles.image_container_div}>
          <img
            className={styles.image_style_div}
            src={
              BlogData
                ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${BlogData[0]?.Webinar_Image.url}`
                : blog_image
            }
            alt={"about images"}
            loading="lazy"
            fetchpriority="high"
          />
          <div className={styles.web_sub_div}>
            {BlogData
              ? `${BlogData[0]?.Webinar_Title}`
              : "Beaconer Vs CyberGRX : Evaluating TPRM Solutions"}
          </div>
        </div>
        <div className={styles.about_div}>
          <div className={styles.sub_about_div}>
            <div
              // className={style.discription_first}
              dangerouslySetInnerHTML={{
                __html: marked(
                  BlogData && BlogData
                    ? BlogData[0]?.Webinar_Information
                    : "About"
                ),
              }}
            />
            <div className={style.author_container}>
              <div className={style.discription_heading}>
                Our<span className={style.orange}> Speakers</span>
              </div>
              <div className={styles.speakers_main_div}>
                {BlogData &&
                  BlogData[0].Speakers?.map((speaker, index) => (
                    <div
                      key={index}
                      className={style.author_image_div_container}
                    >
                      <img
                        src={
                          speaker
                            ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${speaker?.Profile_Image.url}`
                            : author_image
                        }
                        className={styles.author_image_div}
                        alt="author inage"
                        loading="lazy"
                        fetchpriority="high"
                      />
                      <div className={style.author_name_div}>
                        <div className={styles.speaker_name}>
                          {speaker ? speaker.Name : "Nagaraj Kuppuswamy"}
                        </div>
                        <div className={styles}>
                          {speaker ? speaker.Designation : "Co founder & CEO"}{" "}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className={styles.form_div}>
            <h2 className={styles.form_heading}>
              Fill out the form and watch now!
            </h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                company: "",
                subscribe: false,
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
                phone: Yup.string()
                  .matches(/^[0-9]+$/, "Must be only digits")
                  .min(10, "Must be at least 10 digits")
                  .max(15, "Must be 15 digits or less"),
                company: Yup.string().required("Company name is required"),
                subscribe: Yup.boolean()
                  .required("Please accept the subscription")
                  .oneOf([true], "Please accept the subscription"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                router.push("/resources/template/thankyou");
                setSubmitting(false);
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                touched,
                errors,
                handleBlur,
              }) => (
                <form onSubmit={handleSubmit} className={styles.inner_form_div}>
                  <div className={styles.name_input_div}>
                    <input
                      autoComplete="off"
                      type="text"
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full py-2 border-b ${
                        touched.name && errors.name
                          ? "border-red-500"
                          : "border-gray-300"
                      } peer placeholder-transparent focus:outline-none focus:border-black`}
                      placeholder="Enter your Name"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-2.5 text-sm px-1 transition-all duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-black"
                    >
                      Your Name *
                    </label>
                    {touched.name && errors.name && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="relative mt-4 sm:mt-11">
                    <input
                      autoComplete="off"
                      type="text"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full py-2 border-b ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } peer placeholder-transparent focus:outline-none focus:border-black`}
                      placeholder="Enter your Email"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-2.5 text-sm px-1 transition-all duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-black"
                    >
                      Email address *
                    </label>
                    {touched.email && errors.email && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  <div className="relative mt-4 sm:mt-11">
                    <input
                      autoComplete="off"
                      type="number"
                      id="phone"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full py-2 border-b ${
                        touched.phone && errors.phone
                          ? "border-red-500"
                          : "border-gray-300"
                      } peer placeholder-transparent focus:outline-none focus:border-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                      placeholder="Enter your Phone Number"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-0 -top-2.5 text-sm px-1 transition-all duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-black"
                    >
                      Phone Number
                    </label>
                    {touched.phone && errors.phone && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </div>
                    )}
                  </div>

                  <div className="relative mt-4 sm:mt-11">
                    <input
                      autoComplete="off"
                      type="text"
                      id="company"
                      name="company"
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full py-2 border-b ${
                        touched.company && errors.company
                          ? "border-red-500"
                          : "border-gray-300"
                      } peer placeholder-transparent focus:outline-none focus:border-black`}
                      placeholder="Enter your Company Name"
                    />
                    <label
                      htmlFor="company"
                      className="absolute left-0 -top-2.5 text-sm px-1 transition-all duration-300 peer-placeholder-shown:text-xl peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-black"
                    >
                      Company Name *
                    </label>
                    {touched.company && errors.company && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.company}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col !gap-4 sm:!gap-8 !mt-4">
                    <div className="flex flex-col !gap-4">
                      <div>
                        <label
                          htmlFor="subscribe"
                          className={`flex items-start gap-2 ${
                            touched.subscribe && errors.subscribe
                              ? "text-red-500"
                              : ""
                          }`}
                        >
                          <input
                            type="checkbox"
                            id="subscribe"
                            name="subscribe"
                            checked={values.subscribe}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`mt-1 ${
                              touched.subscribe && errors.subscribe
                                ? "border-red-500"
                                : ""
                            }`}
                          />{" "}
                          <span className="text-sm text-black">
                            I would like to receive emails from Beaconer about
                            webinars that may be of interest to me.
                          </span>
                        </label>
                        {touched.subscribe && errors.subscribe && (
                          <div className="text-red-500 text-xs mt-1">
                            {errors.subscribe}
                          </div>
                        )}
                      </div>
                      <p className="text-sm font-normal">
                        By clicking register, I consent to the use of my
                        personal data in accordance with
                        <span className="text-[#F76324]">
                          {" "}
                          Beaconer Privacy Policy
                        </span>
                      </p>
                    </div>
                    <Button
                      type="submit"
                      text={"REGISTER NOW"}
                      className={"!w-fit"}
                    />
                  </div>
                </form>
              )}
            </Formik>
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
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/webinars?filters[Slug][$eq]=${id}&populate=Webinar_Image&populate=Speakers&populate=Speakers.Profile_Image&populate=Seo&populate=Seo.shareImage&populate=CTA_Section`
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
export default webinar;
