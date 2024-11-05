import React, { useRef } from 'react'
import styles from './index.module.scss';


const VideosComponent = ({ getVideoData, languageValues, }) => {




  return (
    <>

      <div className={styles.hero_bg}>
        <img src="/assets/imgs/hero_bg.png" alt="" />
      </div>
      <section className={styles.video}>
        <h1 >
          {getVideoData?.title}
        </h1>
        <div className="container">

          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${getVideoData?.video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </section >

    </>
  )
}

export default VideosComponent