import { Ic_Clock } from "../../Utils/svg";
import style from "../../styles/cardwebinar.module.css";

const CardWebinar = ({ date, title, para, url, onclick, Speakers }) => {
  return (
    <>
      <div className={style.webinar_card_container} onClick={onclick}>
        <div className={style.image_height}>
          <img
            className={style.card_image}
            alt="blog image"
            src={url}
            loading="lazy"
            fetchpriority="high"
          />
        </div>

        <h2 className={style.webinar_card_heading}>{title}</h2>
        <p className={style.card_paragraph}>{para}</p>
        <div className={style.clock_icon_div}>
          {Ic_Clock.icon()}
          <p className={style.card_create_date}>{date}</p>
          <p className={style.estern_time}>Eastern Time</p>
        </div>
        <div className={style.profile_image_container}>
          <div className={style.inner_image_div}>
            {Speakers &&
              Speakers.slice(0, 2).map((item, index) => (
                <div
                  className={style.sub_image_div}
                  style={{ width: index * 60 + "px" }}
                >
                  <div
                    key={index}
                    className={style.small_profile_div}
                    style={{ left: `${index * 20}px` }}
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.Profile_Image?.url}`}
                      alt={`author-${index + 1}`}
                      className={style.full_round_image}
                    />
                  </div>
                </div>
              ))}
          </div>
          {Speakers &&
            Speakers.slice(0, 2).map((name, index) => (
              <p key={index} className={style.speaker_name}>
                {name.Name},
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

export default CardWebinar;
