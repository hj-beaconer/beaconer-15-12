import React from "react";
import { useRouter } from "next/router";
import {
  Ic_Chat,
  Ic_Chat_colored,
  Ic_News,
  Ic_News_colored,
  Ic_Template,
  Ic_Template_colored,
  Ic_Webinar,
  Ic_Webinar_colored,
} from "../Utils/svg";
import style from "./Resource.module.css";
const Resourecenavigation = ({}) => {
  const router = useRouter();
  const { pathname } = router;

  const navItems = [
    {
      name: "Blogs",
      icon: Ic_Chat.icon(),
      path: "/resources/blog",
    },
    {
      name: "Templates",
      icon: Ic_Template.icon(),
      path: "/resources/template",
    },
    {
      name: "News",
      icon: Ic_News.icon(),
      path: "/resources/news",
    },
    {
      name: "Webinar",
      icon: Ic_Webinar.icon(),
      path: "/resources/webinar",
    },
  ];

  switch (pathname) {
    case "/resources/blog":
      navItems[0].icon = Ic_Chat_colored.icon();
      break;
    case "/resources/template":
      navItems[1].icon = Ic_Template_colored.icon();
      break;
    case "/resources/news":
      navItems[2].icon = Ic_News_colored.icon();
      break;
    case "/resources/webinar":
      navItems[3].icon = Ic_Webinar_colored.icon();
      break;
    default:
      navItems[0].icon = Ic_Chat_colored.icon();
      break;
  }

  return (
    <div>
      <div className={style.flexContainer}>
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => router.push(item.path)}
            className={`${style.flexBox} ${
              pathname === item.path ? style.path_Div : ""
            }`}
          >
            <div className={style.icon_container}>{item.icon}</div>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Resourecenavigation;
