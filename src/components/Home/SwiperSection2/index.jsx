import React from 'react'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';



const SwiperSection2 = ({ allWords, dir }) => {
  const breakpoints = {
    300: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 1,
    },
    450: {


      slidesPerView: 1,
    },
    640: {


      slidesPerView: 1,
    },
    768: {


      slidesPerView: 1,
    },
    1204: {
      slidesPerView: 3,
    },


  }

  return (

    <section id='swiper_sec' className={styles.swiper_sec} dir={dir}>

      <div className={styles.sec_container}>

        <div className={styles.swiper_container}>
          <Swiper
            breakpoints={breakpoints}
            freeMode={true}
            pagination={false}
            modules={[FreeMode, Autoplay, Pagination]}
            className="mySwiper"
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}

            spaceBetween={10}
            dir={dir}


          >


            <SwiperSlide >

              <a target='_blank' href="https://kids.thisislam.net/">

                <div className={styles.box}>
                  <div className={styles.cover_container}>
                    <img src="/assets/imgs/cities_cover.png" alt="" />
                  </div>

                  <div className={styles.box_container}>
                    <div className={styles.book_img}>
                      <img src="/assets/imgs/cities_book.png" alt="" />
                    </div>

                    <div className={styles.title}>
                      <h3>
                        {allWords?.main_cities}

                      </h3>

                    </div>
                  </div>
                </div>
              </a>

            </SwiperSlide>


            <SwiperSlide >
              <a target='_blank' href="https://imuslimguide.com/">
                <div className={styles.box}>
                  <div className={styles.cover_container}>
                    <img src="/assets/imgs/muslim_cover.jpg" alt="" />
                  </div>

                  <div className={styles.box_container}>
                    <div className={styles.book_img}>
                      <img src="/assets/imgs/muslim_book.png" alt="" />
                    </div>

                    <div className={`${styles.title} ${styles.muslim}`}>
                      <h3>
                        {allWords?.man_muslim_guide}
                      </h3>

                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>




            <SwiperSlide >
              <a target='_blank' href="https://newmuslimguide.com/">
                <div className={styles.box}>
                  <div className={styles.cover_container}>
                    <img src="/assets/imgs/new_cover.jpg" alt="" />
                  </div>

                  <div className={styles.box_container}>
                    <div className={styles.book_img}>
                      <img src="/assets/imgs/new_book.png" alt="" />
                    </div>

                    <div className={`${styles.title} ${styles.new}`}>
                      <h3>
                        <span> {allWords?.main_new}</span>

                        {` `}

                        {allWords?.man_muslim_guide}



                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>


          </Swiper>

        </div>

      </div>

    </section>

  )
}

export default SwiperSection2



