import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "./main.module.css";
import { Back_Aerrow } from "../Utils/svg";

const SidebarNavigation = ({ headerData, onNavigate, isOpen }) => {
  const [showMainDropdown, setShowMainDropdown] = useState(true);
  const [selectedTab, setSelectedTab] = useState(null);
  const pathname = usePathname();

  const handleTabClick = (item) => {
    if (item.Header_Dropdown?.length > 0) {
      setSelectedTab(item);
      setShowMainDropdown(false);
    } else {
      onNavigate(item.Url);
    }
  };

  const handleBack = () => {
    setShowMainDropdown(true);
    setSelectedTab(null);
  };

  useEffect(() => {
    if (!isOpen) {
      setShowMainDropdown(true);
      setSelectedTab(null);
    }
  }, [isOpen]);

  const isTabActive = (item) => {
    return (
      item.Url === pathname ||
      item.Header_Dropdown?.some(
        (dropItem) =>
          dropItem.Redirect_Url === pathname ||
          dropItem.Sub_Dropdown?.some(
            (subItem) => subItem.Page_Redirect_Url === pathname
          )
      )
    );
  };

  return (
    <div className={styles.mainSideDiv}>
      {showMainDropdown ? (
        headerData?.map((item, index) => (
          <div key={index} className={styles.tabHover}>
            <div
              className={`${styles.sidebarTabs} 
                ${
                  isTabActive(item)
                    ? `${styles.activeTab}`
                    : `${styles.activeTab1}`
                }`}
              onClick={() => handleTabClick(item)}
            >
              <span
                onClick={(e) => {
                  if (item.Tab_Name === "Training") {
                    e.stopPropagation(); // prevent dropdown open
                    onNavigate("/training");
                  }
                }}
                style={{
                  cursor: item.Tab_Name === "Training" ? "pointer" : "default",
                }}
              >
                {item.Tab_Name}
              </span>

              {item.Header_Dropdown?.length > 0 && (
                <svg
                  className={`${styles.sidebarSvg} ${
                    isTabActive(item)
                      ? `${styles.colorSvg}`
                      : `${styles.normalSvg}`
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.mainSideDiv}>
          <div className={styles.mainTabDiv} onClick={handleBack}>
            {Back_Aerrow.icon()}
            <span className="font-medium">Back</span>
          </div>
          <span className={styles.innerSidebarHeading}>
            {selectedTab?.Tab_Name}
          </span>
          {selectedTab?.Header_Dropdown?.map((dropdownItem, idx) => (
            <div key={idx}>
              <div className={styles.imageDiv}>
                <div className={styles.dropdownMainItem}>
                  {dropdownItem.Sub_Dropdown_Icon &&
                    (typeof dropdownItem.Sub_Dropdown_Icon === "function" ? (
                      <span className={styles.innerImageDiv}>
                        {dropdownItem.Sub_Dropdown_Icon()}
                      </span>
                    ) : (
                      <img
                        width={30}
                        height={30}
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                          dropdownItem.Sub_Dropdown_Icon?.url || ""
                        }`}
                        alt=""
                        className={styles.innerImageDiv}
                        loading="lazy"
                        fetchpriority="high"
                      />
                    ))}

                  <div
                    className={`${styles.pathNameDiv}
                      ${
                        dropdownItem.Redirect_Url === pathname
                          ? `${styles.secondTabDiv}`
                          : `${styles.secondTabDiv1}`
                      }`}
                    onClick={() => onNavigate(dropdownItem.Redirect_Url)}
                  >
                    {dropdownItem.Dropdown_Option_Title}
                  </div>
                </div>

                <div className={styles.marginDiv}>
                  {dropdownItem.Sub_Dropdown?.map((subItem, subIdx) => (
                    <div
                      key={subIdx}
                      className={`${styles.innerPathNameDiv}
                        ${
                          subItem.Page_Redirect_Url === pathname
                            ? `${styles.secondTabSubDiv}`
                            : `${styles.secondTabSubDiv1}`
                        }`}
                      onClick={() => onNavigate(subItem.Page_Redirect_Url)}
                    >
                      {subItem.Sub_Dropdown_Title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarNavigation;
