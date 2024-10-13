import React from 'react'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import ReactPlayer from 'react-player'





const SwiperSection = ({ allVideos, allWords, dir }) => {


  const breakpoints = {
    300: {
      slidesPerView: 1.1,
    },
    400: {
      slidesPerView: 1.2,
    },
    414: {
      slidesPerView: 1.3,
    },
    450: {


      slidesPerView: 1.5,
    },
    640: {


      slidesPerView: 2.5,
    },
    768: {


      slidesPerView: 2.5,
    },
    1204: {
      // slidesPerView: 2.1,
      slidesPerView: 3.1,
    },


  }


  return (
    <section id='swiper_sec' className={styles.swiper_sec}>
      <div className={styles.sec_container}>
        <div className="container">
          <div className={styles.sec_title}>
            <h2>
              {allWords?.main_explanatory}
            </h2>
          </div>
        </div>

        <div className={styles.swiper_container}>
          <Swiper
            breakpoints={breakpoints}
            freeMode={true}
            pagination={false}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            dir={dir}
            spaceBetween={16}
          >

            {allVideos?.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={`${styles.box} `} >
                  <div className={styles.img_container}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${card?.video}?cc_load_policy=1&cc_lang_pref=en&hl=en&controls=1&modestbranding=1&showinfo=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>



                  </div>

                  <div className={styles.title}>
                    <h3>{card.title}</h3>
                  </div>




                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default SwiperSection



