import Image from "next/image";
import style from "../../styles/resources.module.css";
import { businessman } from "../../Utils/images";

const CardBottom = ({ date, title, para, url, onclick }) => {
  return (
    <>
      <div className={style.card_bottom} onClick={onclick}>
        <figure>
          <img className={style.image_bottom} alt="Bussnes" src={url} loading="lazy"  fetchpriority="high"/>
        </figure>
        <p className={style.card_date_bottom}>{date}</p>
        <h2 className={style.card_heading_bottom}>{title}</h2>
        <p className={style.card_para_bottom}>{para}</p>
      </div>
    </>
  );
};

export default CardBottom;
