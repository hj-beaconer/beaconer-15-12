import React, { useEffect, useState, useRef } from "react";
import useCustomer from "../hooks/customersupports";
import style from "../styles/customersupport.module.css";
import { blanlimage } from "../Utils/images";
import Button from "../Components/FormElement/Button";
import { handleOpenCalendly } from "../Components/calendlyUtils";
import { CustomerSupportSeoQuery } from "../Utils/seoEndponts";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import SEO from "../Utils/SEO";
import { motion } from "motion/react";

const Customersupport = ({ Data, fullUrl,setIsPageLoaded }) => {
  const [customerData, setCustomerData] = useState();
  const containerr = useRef(null);
  const circ = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await useCustomer().getcustomer();
        setCustomerData(response.data.data);
        if (response.data.data) {
          setIsPageLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then(({ default: gsap }) => {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          gsap.registerPlugin(ScrollTrigger);
          const scroll = () => {
            const elements = document.querySelectorAll(".pin");

            const res = customerData[0]?.How_It_Works.slice(0, -1);

            {
              res?.map((itm, index) => {
                var itm = gsap.timeline({
                  scrollTrigger: {
                    trigger: elements[index],
                    start: "10% 15%",
                    end: "90% 20%",
                    ease: "power2.inOut",
                    scrub: 2,
                  },
                });

                let count = (index + 1) * 406;

                itm.to(circ.current, { y: count });
              });
            }
          };

          if (customerData) {
            scroll();
          }
        });
      });
    }
  }, [customerData]);

  const logo = customerData && [
    ...customerData[0]?.Logos,
    ...customerData[0]?.Logos,
    ...customerData[0]?.Logos,
  ];

  return (
    <>
      {customerData && (
        <div className="margin_div_children">
          {Data && (
            <SEO
              title={Data[0].seo.metaTitle}
              description={Data[0].seo.metaDescription}
              imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${Data[0].seo.shareImage.url}`}
              fullUrl={fullUrl}
              canonicalUrl={Data[0].seo.Canonical_Url}
            />
          )}

          <div className="absolute  lg:w-[3415px] lg:h-[3206px] -translate-x-1/2 lg:-translate-y-[72%] bg-[radial-gradient(circle,#0EAACDCC_0%,rgba(218,231,234,0)_50%,rgba(255,255,255,0)_100%)] z-0 w-[1250px] h-[1250px] left-1/2 -translate-y-[70%]"></div>
          <div className={style.head_main_container}>
            <div className={style.main_head_container}>
              <div className={style.main_heading}>
                {customerData?.[0]?.Cutomer_Support_Service_Main_Title ||
                  "Protect Sensitive Data, Ensure Compliance, and Safeguard Your Reputation"}
              </div>
              <div className={style.main_sub_heading}>
                {customerData?.[0]?.Cutomer_Support_Service_Main_Description ||
                  "The financial services sector is a prime target for cyberattacks, exploiting third-party vulnerabilities. Beaconer helps financial organizations mitigate risks, maintain compliance, and enhance resilience with tailored TPRM solutions."}
              </div>
            </div>
          </div>

          <div className={style.logo_carasoul_container}>
            <motion.div
              className="flex w-max space-x-8"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
              {logo?.map((item, index) => (
                <div key={index} className={style.logo_image_div}>
                  <img
                    className={`h-7 md:h-12 w-auto object-contain ${style.logo_image}`}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.url}`}
                    alt="Brand Logos"
                    loading="lazy"
                    fetchpriority="high"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {customerData?.[0]?.Customer_Support_Service_Feature_Section?.map(
            (item, index) => (
              <div key={index} className={style.main_feature_section}>
                <div className={style.main_image_container}>
                  <img
                    loading="lazy"
                    alt="blank image"
                    src={
                      item?.Customer_Support_Service_Feature_Section_Image?.url
                        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Customer_Support_Service_Feature_Section_Image.url}`
                        : blanlimage
                    }
                    className={style.feature_image}
                    fetchpriority="high"
                  />
                  <div className="md:w-60 w-32 h-32 md:h-60 -z-1 opacity-50 rounded-full bg-[#F07A72CC] blur-3xl lg:blur-[154px] absolute top-1/2 left-0 -translate-x-[20%] -translate-y-1/2 "></div>
                  <div className={style.main_div_for_crosh_harf_left}></div>
                </div>
                <div className={style.feature_content_container}>
                  <div
                    className={style.feature_title}
                    dangerouslySetInnerHTML={{
                      __html:
                        item?.Customer_Support_Service_Feature_Section_Title ||
                        "Streamlined Compliance Management",
                    }}
                  />
                  <div
                    className={style.feature_discription}
                    dangerouslySetInnerHTML={{
                      __html:
                        item?.Customer_Support_Service_Feature_Section_Description ||
                        "Pre-built questionnaires, instant reports, automated updates, and mapping.",
                    }}
                  ></div>
                </div>
              </div>
            )
          )}

          <div className={style.result_main_comtainer}>
            <div className={style.result_main_title}>
              <span style={{ color: "#EA5656" }}>The results</span> we achieved
            </div>
            <div className={style.result_container}>
              {customerData?.[0]?.Results_Achieved?.map((item, index) => (
                <div key={index} className={style.result_div}>
                  <div
                    className={style.result_heading}
                    dangerouslySetInnerHTML={{
                      __html: item?.Result_Value || "95%",
                    }}
                  />
                  <div className={style.result_subheading}>{item?.Title}</div>
                  <div className={style.result_discription}>
                    {item?.Result_Description}
                  </div>
                </div>
              ))}
            </div>
            <div className={style.result_bottom_text}>
              See why Beaconer is leading this market for Due diligence support.
            </div>
            <Button
              text="Book a demo with our team"
              onClick={handleOpenCalendly}
            />
          </div>

          <div className={style.timeline_main_container} ref={containerr}>
            <div className={style.timeline_main_heading}>
              <span style={{ color: "#EA5656" }}>How</span> it works
            </div>
            <div className={style.main_timeline}>
              <div className={`line ${style.center_line}`}>
                <div className="circlo1" ref={circ}></div>
              </div>
              {customerData?.[0]?.How_It_Works?.map((item, index) => (
                <div key={index} className={`pin ${style.timeline_div}`}>
                  <div className={style.timeline_left}>
                    <div
                      className={`${style.timeline_left} ${style.timeline_number}`}
                    >
                      {/* {index + 1} */}
                      <div className={`${style.circle_num}`}></div>
                      <div className={style.timeline_title}>{item?.Title}</div>
                      <div className={style.timeline_discription}>
                        {item?.Description}
                      </div>
                    </div>
                  </div>
                  <div className={style.image_container}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.Image?.url}`}
                      alt="Work image"
                      loading="lazy"
                      fetchpriority="high"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={style.why_beaconer_main_contaimer}>
            <div className={style.why_main_title}>
              <span style={{ color: "#EA5656" }}>Why</span> Beaconer
            </div>
            <div className={style.container_why}>
              {customerData &&
                customerData[0].Why_Beaconer.map((item) => (
                  <div className={style.why_main_div}>
                    <img
                      className={style.why_logo}
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Image.url}`}
                      alt="logo why"
                      loading="lazy"
                      fetchpriority="high"
                    />
                    <div className={style.why_div_title}>{item.Title}</div>
                    <div className={style.why_description}>
                      {item.Description}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className={style.main_div_title_description}>
            <div className={style.div_for_experience_unpralleled}>
              <div>
                <div className="row">
                  <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                    {customerData && (
                      <>
                        <div
                          className="text-xl/8  font-bold md:text-[40px]/[1.2] "
                          style={{
                            fontFamily: "Raleway",
                          }}
                          dangerouslySetInnerHTML={{
                            __html:
                              customerData[0].CTA_Section.CTA_Section_Heading,
                          }}
                        ></div>
                        <Button
                          className={style.button_text_div}
                          text={
                            customerData
                              ? customerData[0].CTA_Section
                                  .CTA_Section_Button_Text
                              : "GET STARTED"
                          }
                          onClick={() =>
                            router.push(
                              customerData
                                ? customerData[0].CTA_Section
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
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1187px] h-[443px] rounded-[400px] bg-[#F36036] opacity-40 blur-[254px]"></div>
        </div>
      )}
    </>
  );
};
export const getServerSideProps = getServerSidePropsWithData(
  CustomerSupportSeoQuery
);

export default Customersupport;
