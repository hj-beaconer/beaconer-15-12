"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "../styles/remediationstous.module.css";
import Description from "../Components/FormElement/Description";
import Button from "../Components/FormElement/Button";
import Image from "next/image";
import { bg_dots, grid, Remediati, Remediations } from "../Utils/images";
import { marked } from "marked";
import useRemediationUs from "../hooks/remediationstous";
import { useRouter } from "next/navigation";
import { getServerSidePropsWithData } from "../Utils/getServerSideData";
import { RemediationSeoQuery } from "../Utils/seoEndponts";
import SEO from "../Utils/SEO";

const remediationstous = ({ Data, fullUrl, setIsPageLoaded }) => {
  const router = useRouter();
  const { getremediationstous } = useRemediationUs();
  const [remediationData, setRemediationData] = useState();
  const containerr = useRef(null);
  const circ = useRef(null);

  // const getRemediationData = async () => {
  //   try {
  //     const response = await getremediationstous();
  //     setRemediationData(response.data.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getRemediationData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getremediationstous();
        setRemediationData(response.data.data);
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

            const res = remediationData[0]?.Remediation_Process_Section?.slice(
              0,
              -1
            );

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

          if (remediationData) {
            scroll();
          }
        });
      });
    }
  }, [remediationData]);

  return (
    <>
      {remediationData && (
        <>
          <div className="relative mt-32">
            {Data && (
              <SEO
                title={Data[0].seo.metaTitle}
                description={Data[0].seo.metaDescription}
                imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${Data[0].seo.shareImage.url}`}
                fullUrl={fullUrl}
                canonicalUrl={Data[0].seo.Canonical_Url}
              />
            )}
            {remediationData && (
              <>
                <div className="absolute  lg:w-[3415px] lg:h-[3206px] -translate-x-1/2 lg:-translate-y-[75%] bg-[radial-gradient(circle,#0EAACDCC_0%,rgba(218,231,234,0)_50%,rgba(255,255,255,0)_100%)] z-0 w-[1250px] h-[1250px] left-1/2 -translate-y-[70%]"></div>
                <Image src={bg_dots} className="absolute -top-36" />
                <div className={`${style.main_container_div_for_nextgen}`}>
                  <div className={style.main_div_for_content}>
                    <h2
                      className={`${style.class_for_heading_discover} fw-bold `}
                      style={{
                        fontFamily: "Raleway",
                        fontSize: "56px",
                        lineHeight: "70px",
                      }}
                    >
                      {
                        remediationData[0]?.Leave_Remediations_Hero_Section
                          .Leave_Remediations_Hero_Section_Title
                      }
                    </h2>

                    <Description
                      className={`mt-3 ${style.main_description_data}`}
                      text={
                        remediationData[0]?.Leave_Remediations_Hero_Section
                          .Leave_Remediations_Hero_Section_Description
                      }
                    />
                  </div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${remediationData[0]?.Leave_Remediations_Hero_Section?.Leave_Remediations_Hero_Section_Image.url}`}
                    width={555}
                    height={555}
                    alt="Autometedpage"
                    loading="lazy"
                    fetchpriority="high"
                  />
                </div>
                {remediationData[0]?.Leave_Remediations_Feature_Section.map(
                  (item, index) => {
                    return (
                      <div className={style.main_for_Dark_Web_twoA} key={index}>
                        <div className={style.main_image_container}>
                          <img
                            alt="FinullImage"
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                              item &&
                              item.Leave_Remediations_Feature_Section_Image.url
                            }`}
                            fetchpriority="high"
                            className="relative z-10 w-full"
                          />
                          <div className="md:w-60 w-32 h-32 md:h-60 -z-1 opacity-50 rounded-full bg-[#F07A72CC] blur-3xl lg:blur-[154px] absolute top-1/2 left-0 -translate-x-[20%] -translate-y-1/2 "></div>
                          <div
                            className={style.main_div_for_crosh_harf_left}
                          ></div>
                        </div>
                        <div className={style.main_for_Cutting_div}>
                          <div
                            className={style.main_title_external}
                            dangerouslySetInnerHTML={{
                              __html: marked(
                                item &&
                                  item.Leave_Remediations_Feature_Section_Title
                              ),
                            }}
                          ></div>
                          <Description
                            className={style.main_description_data}
                            text={
                              item &&
                              item
                                .Leave_Remediations_Feature_Section_Description[0]
                                ?.children[0]?.text
                            }
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </>
            )}

            <div
              className={`flex flex-col items-center ${style.timeline_main_container} `}
              ref={containerr}
            >
              <div className={style.timeline_main_heading}>
                <span style={{ color: "#EA5656" }}>Beaconer’s</span> Seamless
                Remediation Process
              </div>
              <div className={style.main_timeline}>
                <div className={`line ${style.center_line}`}>
                  <div className="circlo1" ref={circ}></div>
                </div>
                {remediationData?.[0]?.Remediation_Process_Section?.map(
                  (item, index) => (
                    <div key={index} className={`pin ${style.timeline_div}`}>
                      <div className={style.timeline_left}>
                        <div
                          className={`${style.timeline_left} ${style.timeline_number}`}
                        >
                          {/* {index + 1} */}
                          <div className={`${style.circle_num}`}></div>
                          <div className={style.timeline_title}>
                            {item?.Title}
                          </div>
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
                  )
                )}
              </div>
              <div className="text-xl md:text-[28px]/[36px] xl:w-[70%] font-bold text-center">
                This structured end to end remediation work flow ensures faster
                risk resolution, minimal effort and complete transparency
                keeping your third-party security posture strong
              </div>
            </div>

            <Image
              src={grid}
              alt="bg image"
              className="absolute -z-1 -bottom-[130px] lg:-bottom-[260px] w-full"
            />
            <div className={style.main_div_title_description}>
              <div className={style.div_for_experience_unpralleled}>
                <div>
                  <div className="row">
                    <div className={`col-md-9 ${style.main_dv_for_experience}`}>
                      {remediationData && (
                        <>
                          <div
                            className="text-xl/8  font-bold md:text-[40px]/[1.2] "
                            style={{
                              fontFamily: "Raleway",
                            }}
                          >
                            <span
                              className={style.expert_team}
                              style={{
                                color: "#f76324",
                                fontFamily: "Raleway",
                              }}
                            >
                              Identify gaps and craft remediation plans{" "}
                            </span>
                            <span className={style.experient_text}>
                              with certified professionals—comprehensive{" "}
                            </span>
                            <span
                              className={style.expert_team}
                              style={{
                                color: "#f76324",
                                fontFamily: "Raleway",
                              }}
                            >
                              risk management made easy.{" "}
                            </span>
                          </div>
                          <Button
                            className={style.button_text_div}
                            text={
                              remediationData
                                ? remediationData[0].CTA_Section
                                    .CTA_Section_Button_Text
                                : "JOIN NOW"
                            }
                            onClick={() =>
                              router.push(
                                remediationData
                                  ? remediationData[0].CTA_Section
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
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[1187px] h-[443px] rounded-[400px] bg-[#F36036] opacity-40 blur-[254px]"></div>
        </>
      )}
    </>
  );
};
export const getServerSideProps =
  getServerSidePropsWithData(RemediationSeoQuery);

export default remediationstous;
