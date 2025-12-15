"use client";
import style from "../styles/contactyus.module.css";
import Image from "next/image";
import { backgroundimg, bgcontact, contectdot } from "../Utils/images";
import {
  Facebookicon,
  Ic_Location,
  Ic_Msg,
  Ic_Phone,
  Instagramicon,
  Twittericon,
} from "../Utils/svg";
import Button from "../Components/FormElement/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import useContactUs from "../hooks/contactus";
import { useEffect, useState } from "react";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import { ContactSeoQuery } from "../Utils/seoEndponts";
import SEO from "../Utils/SEO";
import { generateBeaconerStructuredData } from "../Utils/structuredData";

const Contact = ({ Data, fullUrl, setIsPageLoaded }) => {
  const { getcontactus } = useContactUs();
  const [contactUsData, setContactUsData] = useState();
  const getContactUsData = async () => {
    try {
      const response = await getcontactus();
      setContactUsData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getContactUsData();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\d+$/, "Phone number must be numeric")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
      subject: Yup.string().required("Subject is required"),
      description: Yup.string().required("Description is required"),
    }),
    // onSubmit: async (values, { resetForm }) => {
    //   try {
    //     const response = await fetch("/api/sendmail", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(values),
    //     });
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const result = await response.json();
    //     resetForm();
    //   } catch (error) {
    //     console.error("Error sending email:", error);
    //   }
    // },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("/api/sendmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        resetForm();
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send your message. Please try again later.");
      }
    },
  });

  return (
    <>
      <SEO
        title="Contact Beaconer For Vendor Risk Assessment Solutions"
        description="Connect with Beaconer to learn more about AI-powered third-party risk assessments or request a personalized demo for retail risk management solutions today!"
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
        canonicalUrl="/contact"
        structuredData={generateBeaconerStructuredData('contact', 'Contact Beaconer For Vendor Risk Assessment Solutions', 'Connect with Beaconer to learn more about AI-powered third-party risk assessments or request a personalized demo for retail risk management solutions today!', fullUrl)}
      />

      <div className={style.div_for_background_image}>
        <Image
          src={bgcontact}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority={true}
          className={style.backgroundImageStyle}
        />
        <div className={style.get_in_touch}>
          <div className={style.text_div}>Get started</div>
          <div className={style.desc_div}>
            Get in touch with us. We are here to assist you
          </div>
        </div>
        <div className={style.Main_div_for_getstarted1}>
          <div className={style.Main_div_for_getstarted}>
            <div className={style.Main_div_for_getstarted_leftside}>
              {/* <Image
              src={contectdot}
              alt="Dot Image"
              objectFit="cover"
              priority={true}
              className={style.DotbackgroundImageStyle}
            /> */}
              {contactUsData && (
                <div className={style.contactInfo}>
                  {/* <div className={style.div_for_GetStarted}>
                  {contactUsData
                    ? contactUsData[0]?.Contact_Us_Sub_Heading
                    : "Get Started"}
                </div>
                <div className={style.div_for_get_in_touch}>
                  {contactUsData
                    ? contactUsData[0]?.Contact_Us_Main_Heading
                    : " Get in touch with us. We're here to assist you."}
                </div> */}

                  <div className={style.main_div_for_details}>
                    <div className={style.Sub_div_for_details}>
                      <div className={style.svg_main_div}>
                        <div className={style.svg_div}>{Ic_Msg.icon()}</div>
                        <p className={style.email_string}>EMAIL ADDRESS</p>
                      </div>
                      <p className={style.email_string}>
                        {contactUsData
                          ? contactUsData[0]?.Contact_Us_Email
                          : "contact@beaconer.io"}
                      </p>
                    </div>

                    <div className={style.Sub_div_for_details}>
                      <div className={style.svg_main_div}>
                        <div className={style.svg_div}>
                          {Ic_Location.icon()}
                        </div>
                        <p className={style.email_string}>NUMBER</p>
                      </div>
                      <p className={style.email_string}>
                        {contactUsData
                          ? contactUsData[0]?.Contact_Us_Number
                          : "+ 1 416 731 7477"}
                      </p>
                    </div>

                    <div className={style.Sub_div_for_details}>
                      <div className={style.svg_main_div}>
                        <div className={style.svg_div}>{Ic_Phone.icon()}</div>
                        <p className={style.email_string}>ADDRESS</p>
                      </div>

                      <p className={style.email_string}>
                        {contactUsData
                          ? contactUsData[0]?.Contact_Us_Address
                          : ` 4900 Hopyard Road, West
                      ${(<br />)} Lobby, Suite 100
                      ${(<br />)} Pleasanton, CA 94588`}
                      </p>
                    </div>
                  </div>
                  <div className={style.socials}>
                    <div className={style.styles_for_images_cursor_pointing}>
                      {Facebookicon.icon()}
                    </div>
                    <div className={style.styles_for_images_cursor_pointing}>
                      {Instagramicon.icon()}
                    </div>
                    <div className={style.styles_for_images_cursor_pointing}>
                      {Twittericon.icon()}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={style.Main_div_for_getstarted_rightside}>
              <div className={style.sub_div_for_getstarted_rightside}>
                <form>
                  <div className={style.main_div_for_input_feild}>
                    <div className={style.formgroup}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                        className={style.Input_taxt}
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className={style.error}>{formik.errors.name}</p>
                      )}
                    </div>

                    <div className={style.formgroup}>
                      <input
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                        className={style.Input_taxt}
                        placeholder="Email Address"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className={style.error}>{formik.errors.email}</p>
                      )}
                    </div>

                    <div className={style.formgroup}>
                      <input
                        type="text"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                        className={style.Input_taxt}
                        placeholder="Phone Number"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className={style.error}>{formik.errors.phone}</p>
                      )}
                    </div>

                    <div className={style.formgroup}>
                      <input
                        type="text"
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                        className={style.Input_taxt}
                        placeholder="Subject"
                      />
                      {formik.touched.subject && formik.errors.subject && (
                        <p className={style.error}>{formik.errors.subject}</p>
                      )}
                    </div>
                  </div>
                  <div className={style.Main_div_for_form}>
                    <div className={style.main_div_for_input_feild}>
                      <label className={style.textarea_label}>
                        How can we help you{" "}
                      </label>
                      <div className={style.formgroup}>
                        <textarea
                          type="text"
                          name="description"
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          required
                          className={style.Input_taxt}
                          placeholder="Your message here"
                        />
                        {formik.touched.description &&
                          formik.errors.description && (
                            <p className={style.error}>
                              {formik.errors.description}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className={style.main_div_for_receive_email}>
            <div className={style.div_for_challenges_input}>
              <input
                type="checkbox"
                name="challenge"
                value="regulatory-compliance"
              />
              <div className={style.divforinputstyle1}>
                I would like to receive email from Beaconer about solutions that
                may be interest to me.
              </div>
            </div>
            <p className={style.styles_for_spacing}>
              By submitting this form, you agree to
              <span className={style.Span_tag_for_beaconerteams_color}>
                {" "}
                Beaconer Teams of Use
              </span>{" "}
              and
              <span className={style.Span_tag_for_beaconerteams_color}>
                {" "}
                Beaconer Privany Policy
              </span>
            </p>
            <Button
              type="submit"
              className={style.book_demo}
              onClick={formik.handleSubmit}
              text={"Submit"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = getServerSidePropsWithData(ContactSeoQuery);

export default Contact;
