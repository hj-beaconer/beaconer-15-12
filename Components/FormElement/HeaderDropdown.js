import React from "react";
import {
  Attack_Surface_Scanner,
  Dark_Web_Monitoring,
  Remediation,
  Third_Party_Assessment_Report,
  Threat_Detection,
} from "../../Utils/svg";

const featureData = [
  {
    icon: Threat_Detection,
    title: "THREAT DETECTION",
    items: [
      {
        title: "Quick Threat Detection",
        description:
          "Rapid security assessment identifies IT vulnerables before deployment to ensure security.",
      },
      {
        title: "Security Incident Investigation",
        description:
          "A rapid post-breach assessment evaluates systems to contain damage.",
      },
    ],
  },
  {
    icon: Dark_Web_Monitoring,
    title: "DARK WEB MONITORING",
    items: [
      {
        title: "Monitoring for Stolen Credentials",
        description:
          "A healthcare organization evaluates vendors to ensure data security and compliance.",
      },
      {
        title: "Brand Reputation Protection",
        description:
          "A global tech firm monitors the Dark Web for IP leaks and attack threats.",
      },
    ],
  },
  {
    icon: Remediation,
    title: "REMEDIATION",
    items: [
      {
        title: "Post-Audit Security fixes",
        description:
          "After a vulnerability scan, the IT team starts remediation to patch critical flaws.",
      },
      {
        title: "Breach Recovery",
        description:
          "After a ransomware attack, the team restores operations and improves security.",
      },
    ],
  },
  {
    icon: Attack_Surface_Scanner,
    title: "ATTACK SURFACE SCANNER",
    items: [
      {
        title: "Ongoing Security Scanner",
        description:
          "A rapid assessment identifies vulnerabilities before deployment.",
      },
      {
        title: "Security Incident Investigation",
        description:
          "A rapid assessment evaluates systems to contain post-breach damage.",
      },
    ],
  },
  {
    icon: Third_Party_Assessment_Report,
    title: "THIRD PARTY ASSESSMENT REPORT",
    items: [
      {
        title: "Vendor Risk Management",
        description:
          "A healthcare organization evaluates vendors for patient data security compliance.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "A regulated company conducts assessments for GDPR or PCI DSS compliance.",
      },
    ],
  },
];

const HeaderDropdown = () => {
  return (
    <div
      className="offcanvas offcanvas-top"
      tabIndex="-1"
      id="offcanvasTop"
      aria-labelledby="offcanvasTopLabel"
      style={{
        visibility: "visible",
        transform: "none",
        top: "80px",
        backgroundColor: "white",
        minHeight: "fitContent",
      }}
    >
      <div className="main_div_for_dropdown">
        <div className="container_main">
          <div className="row g-4 mb-4">
            {featureData.map((feature, index) => (
              <div
                key={index}
                className="col-md-4 feature-card main_div_for_feature_card"
              >
                <div className="service-card">
                  <div className="d-flex gap-2">
                    {feature.icon.icon()}
                    <h2 className="service-title">{feature.title}</h2>
                  </div>
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-title">{item.title}</div>
                      <div className="feature-description">
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdown;
