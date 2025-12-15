"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./form.module.css";
import { Imageslider } from "../../Utils/images";
import Image from "next/image";
import Description from "./Description";

const CustomerSlider = ({ testimonials }) => {
  return (
    <div className={styles.bottom_slider_container}>
      <div className={styles.gradientSection}>
        <div className={styles.title}>From Our Customers</div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.sliderContainer}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <div className="flex flex-col items-center gap-3">
                <div className="!h-52 !w-52 rounded-[20px] overflow-hidden flex items-center justify-center flex-col">
                  <img
                    width={100}
                    height={100}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${testimonial.Customer_Image.url}`}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    fetchpriority="high"
                  />
                </div>
                <div>
                  <div className={styles.name}>{testimonial.Customer_Name}</div>
                  <p className={styles.position}>
                    {testimonial.Customer_Job_Position}
                  </p>
                </div>
              </div>
              <div className={styles.content}>
                <Description
                  className={styles.feedback}
                  text={testimonial.Customer_Review_Text}
                />
              </div>
            </div>
            <div className={styles.card_responshiv}>
              <div className={styles.imageWrapper}>
                <div className="h-28 w-28 rounded-[20px] overflow-hidden flex items-center justify-center flex-col">
                  <img
                    width={100}
                    height={100}
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${testimonial.Customer_Image.url}`}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    fetchpriority="high"
                  />
                </div>
                <div className={styles.info_div}>
                  <h3 className={styles.name}>{testimonial.Customer_Name}</h3>
                  <p className={styles.position}>
                    {testimonial.Customer_Job_Position}
                  </p>
                </div>
              </div>
              <div className={styles.content}>
                <Description
                  className={styles.feedback}
                  text={testimonial.Customer_Review_Text}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerSlider;
