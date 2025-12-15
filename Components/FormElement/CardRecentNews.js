import styles from "../../styles/recentnewscard.module.css";
const CardRecentNews = ({ title, onclick, url }) => {
  return (
    <>
      <div className={styles.card_container} onClick={onclick}>
        <img
          className={styles.card_image}
          alt="blog image"
          src={url}
          loading="lazy"
          fetchpriority="high"
        />
        <div className={styles.overlay_div}>
          <h2 className={styles.recent_card_title}>{title}</h2>
        </div>
      </div>
    </>
  );
};

export default CardRecentNews;
