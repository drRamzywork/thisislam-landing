import React from 'react'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';



const data = [
  { img: '/assets/imgs/cover-1.png' },
  { img: '/assets/imgs/cover-2.png' },
  { img: '/assets/imgs/cover-3.png' },

]

const SwiperSection2 = () => {
  const breakpoints = {
    300: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 1.5,
    },
    414: {
      slidesPerView: 1.5,
    },
    450: {


      slidesPerView: 1.5,
    },
    640: {


      slidesPerView: 2.5,
    },
    768: {


      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    1204: {
      slidesPerView: 3,
    },


  }
  return (
    <section id='swiper_sec' className={styles.swiper_sec}>

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

          >

            {data?.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={`${styles.box} `} >
                  <div className={styles.img_container}>
                    <img src={card.img} alt="" />
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

export default SwiperSection2



