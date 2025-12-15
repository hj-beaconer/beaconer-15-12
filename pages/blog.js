import React from "react";
import style from "../styles/blog.module.css";
import Image from "next/image";
import { author_image, blog_image } from "../Utils/images";
import Description from "../Components/FormElement/Description";
import { Facebookicon, Instagramicon, Twittericon } from "../Utils/svg";
import SEO from "../Utils/SEO";
import { generateBeaconerStructuredData } from "../Utils/structuredData";

const Blog = () => {
  
  const data = [
    {
      title: "Real-Time Cyber Risk Scanning – ",
      para: "The vendors are frequently assessed for security posture and are under constant monitoring thanks to the integration of Darkweb, attack surface monitoring, and threat intelligence in real-time.",
    },
    {
      title: "Continuous Monitoring – ",
      para: "A dashboard of metrics that makes it possible to monitor the actions of third parties in real time, ensuring the early detection and mitigation of emerging risks. This even helps with the identification of fourth party risk from outside vendors.",
    },
    {
      title: "Actionable Risk Insights - ",
      para: "A dashboard of metrics that makes it possible to monitor the actions of third parties in real time, ensuring the early detection and mitigation of emerging risks. This even helps with the identification of fourth party risk from outside vendors",
    },
    {
      title: "Remediation Services – ",
      para: "Beaconer is the only company that provides remediation services end to end. Any gap that are identified during the assessment will be remediated by Beaconer eliminating your efforts completely",
    },
  ];
  return (
    <>
      <SEO
        title="Insights on Risk Dashboard, Reporting & AI Security | Beaconer"
        description="Stay updated with our blogs on AI-driven risk assessments, cybersecurity & risk management practices. Check out how automation is shaping the future of assessments."
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
        imageUrl="/Beaconerlogo.png"
        fullUrl="https://beaconer.io/resources/blog"
        canonicalUrl="/resources/blog"
        structuredData={generateBeaconerStructuredData('blog', 'Insights on Risk Dashboard, Reporting & AI Security | Beaconer', 'Stay updated with our blogs on AI-driven risk assessments, cybersecurity & risk management practices. Check out how automation is shaping the future of assessments.', 'https://beaconer.io/resources/blog')}
      />
      <div className={style.blog_main_container}>
      <div className={style.main_top_container}>
        <div className={style.main_top_lft_container}>
          <Image
            alt={"about images"}
            className={style.main_top_lft_image}
            src={blog_image}
          />
        </div>
        <div className={style.main_top_right_container}>
          <div className={style.top_righ_heading}>
            Beaconer Vs CyberGRX : Evaluating TPRM Solutions
          </div>
          <Description
            className={style.top_righ_para}
            text={
              "Managing third party risk has emerged as a crucial part of an organization’s risk management plan in the linked world of today. With so many suppliers, partners, and vendors, companies need reliable solutions to evaluate, track, and reduce the risks related to outside parties. "
            }
          />
          <div className={style.right_bottom}>
            <div className={style.right_auther}>Written by Beaconer</div>
            <div className={style.right_date}>May 13,2024</div>
          </div>
        </div>
      </div>
      <div className={style.midle_container}> 
        <div className={style.midle_time}>4 min read</div>
        <div className={style.social_icon_contaimer}>
          <div className={style.social_icons}>
            <div
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
        <Description
          className={style.discription_first}
          text={
            "Managing third party risk has emerged as a crucial part of an organization’s risk management plan in the linked world of today. With so many suppliers, partners, and vendors, companies need reliable solutions to evaluate, track, and reduce the risks related to outside parties. "
          }
        />
        <div className={style.discription_second}>
          <div className={style.discription_heading}>
            About <span className={style.orange}>Beaconer</span>{" "}
          </div>
          <Description
            className={style.disctipt}
            text={
              "Beaconer helps businesses concentrate on their core business functions by managing the full evaluation process, from vendor coordination to remediation. Its managed services offer easy-to-use periodic evaluations by streamlining reassessment procedures. As part of Beaconer's managed services, CISSP-certified assessors do in-depth reviews, AI-driven data collection, and automated vendor risk assessments."
            }
          />
          <Description
            className={style.disctipt}
            text={
              " The Information Hub expedites vendor collaboration and evaluation requests, and its dashboard provides comprehensive monitoring and real-time updates. The platform’s TPRM support services driven by AI minimize business disruptions by delivering thorough reports in 1–6 days, ten times faster than with conventional techniques."
            }
          />
        </div>
        <div className={style.discription_second}>
          <div className={style.discription_heading}>
            About <span className={style.orange}>Beaconer</span>{" "}
          </div>
          <Description
            className={style.disctipt}
            text={
              "Completely Managed Service Model – Beaconer approaches third party risk management in a different way. All you have to do is ask for an evaluation; Beaconer will use their own database to complete it for you. This greatly expedites the evaluation process, reducing the overall time taken."
            }
          />
        </div>
        <div className={style.list_itm}>
          {data.map((itm, index) => (
            <li key={index} className={style.num_list}>
              <span className={style.num_heading}>{itm.title}</span>
              <Description className={style.num_discription} text={itm.para} />
            </li>
          ))}
        </div>
        <div className={style.discription_second}>
          <div className={style.discription_heading}>
            Why is Beaconer the{" "}
            <span className={style.orange}>
              Best Third Party Risk Management Tool?
            </span>{" "}
          </div>
          <Description
            className={style.disctipt}
            text={
              "By delivering comprehensive answers in 1-6 days, ten times faster than conventional procedures, Beaconer reduces business disruptions. It promises exceptional customer experiences at 70% less expense and five times faster remediation. This application offers comprehensive TPRM solutions for a wide range of industries, including Manufacturing, Finance, Healthcare, Retail, Legal, etc., unlike most other TPRM software."
            }
          />
          <Description
            className={style.disctipt}
            text={
              "With a team of subject matter experts, Beaconer manages the entire process of suppliers’ periodic reassessments on your behalf. It also keeps track of and initiates reassessments at predetermined intervals. Beaconer is among the top TRPM programs available as a result."
            }
          />
        </div>
        <div className={style.conclusion}>
          <div className={style.discription_heading}>Conclusion</div>
          <Description
            className={style.disctipt}
            text={
              "Selecting the best third party risk management tool depends on your  organization’s specific needs. Beaconer offers user-friendly automation, while CyberGRX excels with its data-rich Exchange platform and analytics. Overall, Beaconer offers the better solution as it performs better across several important categories."
            }
          />
          <Description
            className={style.disctipt}
            text={
              "Through this tool, organizations get comprehensive visibility, automation, and continuous monitoring capabilities to assess, mitigate, and manage third party risks effectively. As a result, they can operate with strong and safe relationships with third party vendors."
            }
          />
        </div>
        <div className={style.author_container}>
          <div>
            <div className={style.discription_heading}>
              <span className={style.orange}>Author</span>
            </div>
            <Description
              className={style.disctipt}
              text={
                "Nagaraj Kuppuswamy is the Co-founder and CEO of Beaconer, an esteemed enterprise specializing in managed third-party risk using the cloud native AI based solution. With an extensive portfolio of accolades and industry certifications, Nagaraj stands out as a seasoned expert, boasting over 16 years of dedicated involvement in the field of Cybersecurity. Throughout the course of their career, he has predominantly focused on elevating the realm of third-party risk assessment."
              }
            />
          </div>
          <div className={style.author_image_div_container}>
            <Image src={author_image}
            className={style.author_img}
            alt="author inage" />
            <div className={style.author_name_div}>
              <div className={style.author_name}>Nagaraj Kuppuswamy</div>
              <div className={style.author_disc}>Co founder & CEO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
