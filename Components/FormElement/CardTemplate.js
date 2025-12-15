import style from "../../styles/resources.module.css";
import styles from "../../styles/templatecard.module.css";
const CardTemplate = ({ date, title, para, url, onclick }) => {
  return (
    <>
      <div className={styles.card_template_main} onClick={onclick}>
        <div className={styles.main_div_image}>
          <img
            className={styles.template_image}
            alt="blog image"
            src={url}
            loading="lazy"
            fetchpriority="high"
          />
        </div>

        <h2 className={styles.template_card_heading}>{title}</h2>
        <p className={style.card_para}>{para}</p>
      </div>
    </>
  );
};

export default CardTemplate;
