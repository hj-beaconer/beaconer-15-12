import style from "../../styles/popularnewscard.module.css";

const CardPopularNews = ({ title, para, url, onclick }) => {
  return (
    <div>
      <div className={style.main_div} onClick={onclick}>
        <div className={style.image_div}>
          <img
            className={style.news_image}
            alt="blog image"
            src={url}
            loading="lazy"
            fetchpriority="high"
          />
        </div>
        <div>
          <h2 className={style.card_title}>{title}</h2>
          <p className={style.new_paragraph_text}>{para}</p>
        </div>
      </div>
      <p className={style.new_paragraph_text_sub}>{para}</p>
    </div>
  );
};

export default CardPopularNews;
