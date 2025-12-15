"use client";
import React, { useEffect, useState } from "react";
import style from "../styles/empowerbusiness.module.css";
import Description from "../Components/FormElement/Description";
import Button from "../Components/FormElement/Button";
import Image from "next/image";
import { Rapidsessment, Footercontenar } from "../Utils/images";
import CardList from "../Components/FormElement/CardList";
import { handleOpenCalendly } from "../Components/calendlyUtils";
import useEmpowerBusiness from "../hooks/empowerbusiness";
import { marked } from "marked";
import { useRouter } from "next/navigation";

const empowerbusiness = ({ setIsPageLoaded }) => {
  const router = useRouter();
  const { getempowerbusiness } = useEmpowerBusiness();
  const [empowerBusinessData, setEmpowerBusinessData] = useState();
  const EmpowerBusinessData = async () => {
    try {
      const response = await getempowerbusiness();
      setEmpowerBusinessData(response.data.data);
      if (response.data.data) {
        setIsPageLoaded(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    EmpowerBusinessData();
  }, []);
  const cards = [
    {
      id: 1,
      title: "Assessments completed within 2 days",
      description:
        "With Beaconer, you can get your third party onboarded within 2-5 business days with our quick but comprehensive assessments",
    },
    {
      id: 2,
      title: "Completely automate your Third-party assessments",
      description:
        "Beaconer is the only tool that automates your assessment completely",
    },
    {
      id: 3,
      title: "Indepth Risk management frameworks",
      description:
        "With Beaconer, you not only receive the completed assessment",
    },
  ];
  return (
    <>
      {empowerBusinessData ? (
        <div className="margin_div_children">
          <div className={style.main_for_Dark_Web_two}>
            <img
              className={style.main_div_for_videoPlay_two}
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${empowerBusinessData[0].Rapid_Assessments_Hero_Section.Rapid_Assessments_Hero_Section_Image.url}`}
              alt="Logo"
              loading="lazy"
              fetchpriority="high"
            />

            <div className={style.main_for_Cutting_div}>
              <div className={style.main_title_external}>
                {
                  empowerBusinessData[0].Rapid_Assessments_Hero_Section
                    .Rapid_Assessments_Hero_Section_Main_Heading
                }
              </div>
              <Description
                className={style.main_description_data}
                text={
                  empowerBusinessData[0].Rapid_Assessments_Hero_Section
                    .Rapid_Assessments_Hero_Section_Description
                }
              />
              <Button
                className={style.ButtonStrated}
                text={"Get Started"}
                onClick={() => handleOpenCalendly()}
              />
            </div>
          </div>

          <div className={style.main_div_for_Home_page}>
            <div className={style.main_div_title_description}>
              <div className="text-center">
                <div
                  className="text-xl/8  font-bold md:text-[40px]/[1.2] "
                  style={{
                    fontFamily: "Raleway",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: marked(
                      empowerBusinessData[0].Rapid_Assessments_Blog_Section
                        .Rapid_Assessments_Blog_Section_Main_Heading
                    ),
                  }}
                ></div>
              </div>
              {empowerBusinessData && (
                <CardList
                  cards={
                    empowerBusinessData[0].Rapid_Assessments_Blog_Section
                      .Rapid_Assessments_Blog_Section
                  }
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={style.main_for_Dark_Web_two}>
            <Image
              className={style.main_div_for_videoPlay_two}
              alt="Logo"
              src={Rapidsessment}
            />

            <div className={style.main_for_Cutting_div}>
              <div className={style.main_title_external}>
                Request an Assessment We Handle the Rest
              </div>
              <Description
                className={style.main_description_data}
                text={
                  "With Beaconer’s fully automated, AI-powered platform and certified teams, you’ll receive tailored assessments for every request."
                }
              />
              <Button
                className={style.ButtonStrated}
                text={"Get Started"}
                onClick={() => handleOpenCalendly()}
              />
            </div>
          </div>

          <div className={style.main_div_for_Home_page}>
            <div className={style.main_div_title_description}>
              <div className=" text-center ">
                <div
                  className="fs-4 fw-medium text-dark"
                  style={{
                    color: "#f76324",
                    fontFamily: "Raleway",
                  }}
                >
                  Enable your business with Beaconer’s Quick &
                </div>
                <div
                  className={`fs-1 fw-bold  mb-3 ${style.comprehensive_assessments}`}
                  style={{
                    color: "#f76324",
                    fontFamily: "Raleway",
                  }}
                >
                  Comprehensive assessments
                </div>
              </div>
              <CardList cards={cards} />
            </div>
          </div>
        </>
      )}

      <div
        className={`container-fluid mt-5 ${style.divforExperienceunparalleled}`}
        style={{
          backgroundColor: "#fff6f2",
          width: "100%",
          position: "relative",
        }}
      >
        <div className={` ${style.circle_MainDivContanir}`}>
          <div className="row">
            <div className={`col-md-8 ${style.main_dv_for_experience}`}>
              {empowerBusinessData && (
                <>
                  <div
                    className="fs-1 fw-bold text-dark "
                    style={{
                      fontFamily: "Raleway",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: marked(
                        empowerBusinessData[0].CTA_Section.CTA_Section_Heading
                      ),
                    }}
                  ></div>

                  <Button
                    className={style.button_text_div}
                    text={
                      empowerBusinessData
                        ? empowerBusinessData[0].CTA_Section
                            .CTA_Section_Button_Text
                        : "JOIN NOW"
                    }
                    onClick={() =>
                      router.push(
                        empowerBusinessData
                          ? empowerBusinessData[0].CTA_Section
                              .CTA_Section_Button_Reidrect_Url
                          : "/contact"
                      )
                    }
                  />
                </>
              )}
            </div>
          </div>

          <Image
            className={style.circle_design}
            alt="Logo"
            src={Footercontenar}
          />
        </div>
      </div>
    </>
  );
};

export default empowerbusiness;
