import Image from "next/image";
import style from "../../styles/resources.module.css";

const CardRecent = ({ date, title, para, url, onclick }) => {
  return (
    <>
      <div className={` ${style.card}`} onClick={onclick}>
        <img
          className={style.image}
          alt="blog image"
          src={url}
          loading="lazy"
          fetchpriority="high"
        />
        <p className={style.card_date}>{date}</p>
        <h2 className={style.card_heading}>{title}</h2>
        <p className={style.card_para}>{para}</p>
        <div className={style.button_container}>
          <div className={style.button}>Vendor</div>
          <div className={style.button}>Third Party</div>
          <div className={style.button}>Risk Management</div>
        </div>
      </div>
    </>
  );
};

export default CardRecent;
