import React from 'react'
import Hero from './Hero'
import SwiperSection from './SwiperSection'
import SwiperSection2 from './SwiperSection2'
import Navbar from "@/components/Navbar";
import styles from './index.module.scss';

const Home = ({ allWords, allVideos, dir, allLangs, mainBookURL }) => {
  return (
    <>
      <div className={styles.desktop_bg}>
        <div className={styles.hero_bg}>
          <img src="/assets/imgs/hero_bg.png" alt="" />
        </div>
        <Navbar allWords={allWords} dir={dir?.data?.dir} allLangs={allLangs} />
        <Hero allWords={allWords} dir={dir?.data?.dir} mainBookURL={mainBookURL} />
      </div>

      <SwiperSection allVideos={allVideos} allWords={allWords} />

      <SwiperSection2 />
    </>
  )
}

export default Home