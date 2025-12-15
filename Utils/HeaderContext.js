import React, { createContext, useContext, useState, useEffect } from "react";
import useHeader from "../hooks/header";

import { ThirdPartyRiskIcon ,SOCAnalystCourse ,CloudSecurityCourse , GRCComplianceCourse} from "../Utils/svg";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const { getheader } = useHeader();
  const [headerData, setHeaderData] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const setSidebarOpenState = (val) => setSidebarOpen(!!val);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await getheader();
        const data = (response && response.data && response.data.data) || [];

        const desiredSequence = [
          "Home",
          "Solutions",
          "Resources",
          "Industries",
          "About",
          "Training",
          "Contact",
        ];
        const sortedData = [...data].sort((a, b) => {
          const indexA = desiredSequence.indexOf(a.Tab_Name);
          const indexB = desiredSequence.indexOf(b.Tab_Name);
          const adjustedIndexA = indexA === -1 ? Infinity : indexA;
          const adjustedIndexB = indexB === -1 ? Infinity : indexB;
          return adjustedIndexA - adjustedIndexB;
        });

        const trainingExists = sortedData.some(
          (d) => d.Tab_Name && d.Tab_Name.trim().toLowerCase() === "training"
        );

        const trainingMenu = {
          Tab_Name: "Training",
          Url: "/training",
          Svg: null,
          Header_Dropdown: [
            {
              Dropdown_Option_Title: "Third Party Risk",
              Redirect_Url: "/third-party-risk",
              Sub_Dropdown: [],
              Sub_Dropdown_Icon: ThirdPartyRiskIcon.icon || null,
              Description:
                "Master vendor risk assessment and management",
            },
            {
              Dropdown_Option_Title: "GRC/Compliance Course",
              Redirect_Url: "/compliance",
              Sub_Dropdown: [],
              Sub_Dropdown_Icon: GRCComplianceCourse.icon || null,

              Description:
                "Learn governance, risk, and compliance frameworks",
            },
            {
              Dropdown_Option_Title: "SOC Analyst Course",
              Redirect_Url: "/soc",
              Sub_Dropdown: [],
              Sub_Dropdown_Icon: SOCAnalystCourse.icon || null,

              Description:
                "Build expertise in threat detection and response",
            },
            {
              Dropdown_Option_Title: "Cloud Security",
              Redirect_Url: "/cloud-security",
              Sub_Dropdown: [],
              Sub_Dropdown_Icon: CloudSecurityCourse.icon || null,

              Description:
                "Secure cloud infrastructure and applications",
            },
          ],
        };

        let updatedData = sortedData;

        if (!trainingExists) {
          const contactIndex = sortedData.findIndex(
            (i) => i.Tab_Name && i.Tab_Name.toLowerCase() === "contact"
          );
          if (contactIndex === -1) {
            updatedData = [...sortedData, trainingMenu];
          } else {
            updatedData = [
              ...sortedData.slice(0, contactIndex),
              trainingMenu,
              ...sortedData.slice(contactIndex),
            ];
          }
        }

        setHeaderData(updatedData);
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchHeaderData();
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        headerData,
        isSidebarOpen,
        toggleSidebar,
        setSidebarOpen: setSidebarOpenState,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  return useContext(HeaderContext);
};
