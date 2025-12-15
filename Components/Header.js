import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "../Utils/images";
import Button from "./FormElement/Button";
import { Back_Aerrow, IC_Burger_Menu } from "../Utils/svg";
import "./calendlyUtils";
import style from "./main.module.css";
import { useHeaderContext } from "../Utils/HeaderContext";
import SidebarNavigation from "./SidebarNavigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

  const dropdownTimeout = useRef(null);
  const { headerData, isSidebarOpen, toggleSidebar, setSidebarOpen } =
    useHeaderContext();

  const rediredtHome = async () => {
    toggleSidebar();
    router.push("/home");
  };
  const handleMouseEnter = (url) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setHoveredItem(url);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setHoveredItem(null);
    }, 100);
  };

  const OnclickSideBar = (url) => {
    setSidebarOpen(false);
    router.push(url);
  };

  const OnclickDropdown = (url) => {
    setHoveredItem(null);
    setSidebarOpen(false);
    if (url) {
      router.push(url);
    } else {
      router.push("/home");
    }
  };

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const calenderAndClose = () => {
    toggleSidebar();
    handleOpenCalendly();
  };

  // const handleClick = (url, hasDropdown) => {
  //   if (hasDropdown) {
  //     if (activeDropdown === url) {
  //       setActiveDropdown(null);
  //       setSidebarOpen(false);
  //     } else {
  //       setActiveDropdown(url);
  //     }
  //   } else {
  //     router.push(url);
  //     setActiveDropdown(null);
  //     setSidebarOpen(false);
  //   }
  // };

  const isTabActive = (item) => {
    if (item.Url === pathname) {
      return true;
    }

    const hasActiveSubItem = item.Header_Dropdown?.some(
      (dropdownItem) =>
        dropdownItem.Sub_Dropdown?.some(
          (subItem) => subItem.Page_Redirect_Url === pathname
        ) || dropdownItem.Redirect_Url === pathname
    );

    return hasActiveSubItem;
  };
  const handleNavigate = (url) => {
    router.push(url);
    setSidebarOpen(false);
  };

  const renderDropdownContent = (item) => {
    const hasSubDropdowns = item.Header_Dropdown?.some(
      (feature) => feature.Sub_Dropdown?.length > 0
    );

    return (
      <div className="main_div_for_dropdown !bg-[--dark]">
        <div className="container_main">
          <div className="row g-4 mb-4">
            {item.Header_Dropdown?.map((feature, index) => (
              <div
                key={index}
                className="col-md-4 feature-card main_div_for_feature_card"
              >
                <div
                  className={hasSubDropdowns ? "service-card" : "service-card1"}
                >
                  <div className={style.deop_main_title_container}    onClick={() =>
                          feature.Redirect_Url &&
                          OnclickDropdown(feature.Redirect_Url)
                        }>
                    {feature.Sub_Dropdown_Icon &&
                      (typeof feature.Sub_Dropdown_Icon === "function" ? (
                        <span className={style.image_dropdown}>
                          {feature.Sub_Dropdown_Icon()}
                        </span>
                      ) : (
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                            feature.Sub_Dropdown_Icon.url || ""
                          }`}
                          alt={feature.Dropdown_Option_Title}
                          className={style.image_dropdown}
                          loading="lazy"
                          fetchpriority="high"
                        />
                      ))}

                    <div >
                      {" "}
                      <h2
                        className="service-title"
                     
                      >
                        {feature.Dropdown_Option_Title}
                      </h2>
                      {feature.Description && (
                        <p className="feature-description ms-0">
                          {feature.Description}
                        </p>
                      )}
                    </div>
                  </div>
                  {feature.Sub_Dropdown?.length > 0 &&
                    feature.Sub_Dropdown.map((subItem, idx) => (
                      <div
                        key={idx}
                        className="feature-item"
                        onClick={() =>
                          OnclickDropdown(subItem.Page_Redirect_Url)
                        }
                      >
                        <div className="feature-title">
                          {subItem.Sub_Dropdown_Title}
                        </div>
                        <div className="feature-description">
                          {subItem.Sub_Dropdown_Description}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <div
          className={`${style.customOffcanvasTopRight} ${
            isSidebarOpen ? style.customOffcanvasTopRightShow : ""
          }`}
        >
          <div className={style.sidebar_header}>
            <Image
              alt="Logo"
              width={150}
              height={150}
              src={Logo}
              onClick={() => rediredtHome()}
            />
            {/* <button
                type="button"
                className=" !bg-white"
                onClick={toggleSidebar}
                aria-label="Close"

              /> */}
            <div
              type="button"
              className="text-white px-1"
              onClick={toggleSidebar}
              aria-label="Close"
            >
              {" "}
              X
            </div>
          </div>
          <div className="offcanvas-body">
            <SidebarNavigation
              headerData={headerData}
              onNavigate={handleNavigate}
            />
          </div>
          <div className={style.sidebar_book_btn}>
            <Button
              className={style.inner_btn_book_demo}
              text="Book A Demo"
              onClick={() => calenderAndClose()}
            />
          </div>
        </div>
      </div>

      {headerData && (
        <div className={style.main_div_header}>
          <div className={style.submain_div_header}>
            <div className={style.main_div_logo_tab}>
              <div
                className={style.logo_main_div}
                onClick={() => router.push("/home")}
              >
                <Image alt="Logo" width={150} height={150} src={Logo} />
              </div>
              {headerData?.map((item, index) => (
                <div
                  className={style.main_div_tabname}
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.Url)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={
                      isTabActive(item)
                        ? style.active_tabname
                        : style.text_tab_heder
                    }
                    onClick={() => OnclickSideBar(item.Url)}
                  >
                    {item.Tab_Name}
                    {item.Svg && (
                      <div
                        className={
                          hoveredItem === item.Url || isTabActive(item)
                            ? style.SvgDIVActiv
                            : style.SvgDIV
                        }
                      >
                        <img
                          className={style.ddSvg}
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.Svg.url}`}
                          loading="lazy"
                          alt=""
                          fetchpriority="high"
                        />
                      </div>
                    )}
                  </div>
                  {hoveredItem === item.Url &&
                    item.Header_Dropdown?.length > 0 && (
                      <div
                        className="offcanvas offcanvas-top"
                        style={{
                          visibility: "visible",
                          transform: "none",
                          top: "80px",
                          backgroundColor: "var(--dark)",
                          minHeight: "fit-content",
                          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                        }}
                        onMouseEnter={() => handleMouseEnter(item.Url)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {renderDropdownContent(item)}
                      </div>
                    )}
                </div>
              ))}
            </div>
            <Button
              className={style.book_demo}
              text="Book A Demo"
              onClick={() => handleOpenCalendly()}
            />
            <div className={style.burger_menu} onClick={toggleSidebar}>
              {IC_Burger_Menu.icon()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
