import { useState, useRef } from 'react';
import styles from './index.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, } from 'swiper/modules';
import { useRouter } from 'next/router';



const LangSelector = ({ allLangs, setShowMenuLangs }) => {
  const { asPath } = useRouter()
  const swiperRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      const newIndex = swiper.realIndex;

      setSelectedIndex(newIndex);

    }
  }

  const handleClick = (index) => {
    setSelectedIndex(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setShowMenuLangs(false)
  };





  return (
    <div
      id='lang_container'
      className={styles.menu_container}
    >

      <div className={styles.languages}>

        <div className={styles.icon_container}>
          <img src="/assets/svgs/languages.svg" alt="" />
        </div>

        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          direction={"vertical"}
          slidesPerView={5}
          spaceBetween={8}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          // centeredSlides={false}
          centeredSlides={true}
          className={styles.vertical_swiper}>

          {allLangs?.data?.map((lang, index) =>
            <SwiperSlide key={index} >
              <a
                href={`/${lang.code}${asPath}`}

                key={lang.id}
                className={`${styles.language_item} ${index === selectedIndex ? styles.selected : ''}`}
                onClick={() => handleClick(index)}
              >
                <div className={styles.language_name}>{lang.name}</div>
                <div className={styles.language_native}>{lang.native}</div>
              </a>
            </SwiperSlide>
          )}
        </Swiper>
      </div>



    </div >
  );
};

export default LangSelector;
