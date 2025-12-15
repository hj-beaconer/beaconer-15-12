"use client";
import React, { useEffect, useState } from "react";
import style from "./main.module.css";
import Image from "next/image";
import { LogoFooter } from "../Utils/images";
import Description from "./FormElement/Description";
import Lable from "./FormElement/Label";
import SubLable from "./FormElement/SubLabel";
import useFooter from "../hooks/footer";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const { getfooter } = useFooter();
  const [footerData, setFooterData] = useState();
  const getFooterData = async () => {
    try {
      const response = await getfooter();
      setFooterData(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getFooterData();
  }, []);

  const handlePrivacy = () => {
    router.push("/privacy-policy");
  }

  return (
    <>
      <div className={style.main_div_footer}>
        <div className={style.Submain_div_footer}>
          <div className={style.main_div_footerlogo_discription}>
            <div className={style.main_div_footer_logo}>
              {footerData && footerData ? (
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${footerData.Footer_Logo?.url}`}
                  loading="lazy"
                   fetchpriority="high"
                />
              ) : (
                <Image alt="Logo" width={150} height={150} src={LogoFooter} />
              )}
            </div>
            <Description
              className={style.description_text}
              text={
                footerData
                  ? footerData.Footer_Description[0]?.children[0]?.text
                  : "Beaconer.io is your gateway to next-gen business solutions. We help you harness the power of technology to drive growth, enhance productivity, and streamline operations."
              }
            />

            <div className={`${style.main_div_sociyal_link} ${style.media_icon} flex`}>
              {footerData &&
 

                footerData.Social_Media_Section.map((item, index) => {
                  return (
                    <div className={style.main_div_sociyal} key={index}>
                      <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Social_Media_Icon?.url}`}
                        onClick={() => router.push(item.Redirect_Url)}
                        loading="lazy"
                         fetchpriority="high"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          {footerData &&
            footerData.Footer_Link_Section.map((item, index) => {
              return (
                <div className={style.main_div_for_pages} key={index}>
                  <Lable
                    className={style.lable_text_heding}
                    text={item.Title}
                  />
                  {item.Link_Section.map((item, index) => {
                    return (
                      <SubLable
                        key={index}
                        className={style.lable_text_footer}
                        text={item.Page_Name}
                        onClick={() => router.push(item.Redirect_Url)}
                      />
                    );
                  })}
                </div>
              );
            })}
          {footerData && (
            <div className={style.main_div_for_pages1}>
              <Lable
                className={style.lable_text_heding}
                text={footerData.Contact_Us_Section[0]?.Title}
              />
              {footerData &&
                footerData.Contact_Us_Section[0].Contact_Info.map(
                  (item, index) => {
                    return (
                      <div className={style.svg_text_div_footer} key={index}>
                        <img
                          className={style.contact_icon}
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Icon?.url}`}
                          loading="lazy" fetchpriority="high"
                        />
                        <SubLable
                          className={style.lable_text}
                          text={item.Contact_Info}
                        />
                      </div>
                    );
                  }
                )}
            </div>
          )}
        </div>
        <div className={`${style.main_div_sociyal_link} ${style.respposive_media_icon}`}>
          {footerData &&
            footerData.Social_Media_Section.map((item, index) => {
              return (
                <div className={style.main_div_sociyal} key={index}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Social_Media_Icon?.url}`}
                    onClick={() => router.push(item.Redirect_Url)}
                    loading="lazy"
                     fetchpriority="high"
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className={style.footer_underline}>
        <button style={{ marginRight: "5px" }} onClick={handlePrivacy}>Privacy Policy</button>
        {" | "}
        &copy;2023 All rights reserved
      </div>
    </>
  );
};

export default Footer;
