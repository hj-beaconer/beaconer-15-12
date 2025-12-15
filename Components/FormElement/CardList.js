import styles from "./form.module.css";
import Description from "./Description";

const CardList = ({ cards }) => {
  return (
    <div className={styles.MainDivForcartSection}>
      <div className="row justify-content-center g-4">
        {cards.map((card) => (
          <div key={card.id} className="col-xxl-4 col-xl-4 col-lg-12 ">
            <div
              className="card h-100 shadow-sm border-0"
              style={{ backgroundColor: "#F8F8F8" }}
            >
              <div className="card-body d-flex flex-column">
                <div className="mb-3 text-center text-warning">
                  {card && (
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${card?.Rapid_Assessments_Blog_Svg_Image?.url}`}
                      loading="lazy" fetchpriority="high"
                    />
                  )}
                </div>
                <h5 className={styles.title_Cart}>
                  {card.Rapid_Assessments_Blog_Heading}
                </h5>
                <Description
                  className="mt-3 text-muted"
                  text={card.Rapid_Assessments_Blog_Description}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
