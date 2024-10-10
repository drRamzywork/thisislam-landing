import React from 'react'
import styles from './index.module.scss';
import { motion } from 'framer-motion'
const Hero = ({ allWords, dir, mainBookURL }) => {

  return (
    <section className={styles.hero} dir={dir}>
      <div className="mobile">
        <motion.div initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }} className={styles.bg}>
          <img src="/assets/imgs/books2.png" alt="" />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }} className={styles.sec_container}>


        <div className="desktop">
          <motion.div initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "tween" }} className={styles.bg}>
            <img src="/assets/imgs/books.png" alt="" />
          </motion.div>
        </div>


        <div className={styles.main_book}>



          {dir === 'rtl' &&
            <img src={`/assets/imgs/book_ar.png`} alt="" />
          }


          {dir === 'ltr' &&
            <img src={`/assets/imgs/book_en.png`} alt="" />
          }
        </div >




        <div className="mobile">
          <div className="container">

            <div className={styles.desc}>
              <p>{allWords?.main_desc}</p>

              <a href={mainBookURL} target='_blanked' className={styles.btn_container}>
                <button>
                  {allWords?.main_download}
                </button>
              </a>
            </div>

          </div>
        </div>

        <div className="desktop">
          <div className={styles.desc}>
            <p>{allWords?.main_desc}</p>
            <a href={mainBookURL} target='_blanked' className={styles.btn_container}>
              <button>
                {allWords?.main_download}
              </button>
            </a>
          </div>

        </div>

      </motion.div>

    </section>
  )
}

export default Hero