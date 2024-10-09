import React from 'react'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';



const data = [
  { title: "اختراعات المسلمين ", img: '/assets/imgs/2.png' },
  { title: "عيسى عليه السلام ", img: '/assets/imgs/1.png' },
  { title: "اختراعات المسلمين ", img: '/assets/imgs/2.png' },
  { title: "عيسى عليه السلام ", img: '/assets/imgs/1.png' },
  { title: "اختراعات المسلمين ", img: '/assets/imgs/2.png' },
  { title: "عيسى عليه السلام ", img: '/assets/imgs/1.png' },
  { title: "اختراعات المسلمين ", img: '/assets/imgs/2.png' },
  { title: "عيسى عليه السلام ", img: '/assets/imgs/1.png' },
  { title: "اختراعات المسلمين ", img: '/assets/imgs/2.png' },
  { title: "عيسى عليه السلام ", img: '/assets/imgs/1.png' },

]

const SwiperSection = ({ allVideos, allWords }) => {


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
          >

            {allVideos?.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={`${styles.box} `} >
                  <div className={styles.img_container}>

                    <iframe
                      width="560"
                      height="315"
                      src={`https://www.youtube.com/embed/${card?.video}`}
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
          {/* <Swiper
            modules={[Pagination, Navigation, FreeMode]}
            navigation={false}
            pagination={false}
            dir={'rtl'}
            centeredSlides={true}
            spaceBetween={16}
            slidesPerView={1.5}
            className={styles.swiper}
            freeMode={true}
          >

            {data?.map((card, index) => (
              <SwiperSlide key={index}>
                <div className={`${styles.box} `} >
                  <div className={styles.img_container}>
                    <img src={card.img} alt="" />
                  </div>

                  <div className={styles.title}>
                    <h3>{card.title}</h3>
                  </div>

                  <div className={styles.play_btn}>
                    <img src="/assets/svgs/playbtn.svg" alt="" />
                  </div>



                </div>
              </SwiperSlide>
            ))}

          </Swiper> */}
        </div>
      </div>
    </section>
  )
}

export default SwiperSection



