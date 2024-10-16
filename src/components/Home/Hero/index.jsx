import React, { useState } from 'react'
import styles from './index.module.scss';
import { AnimatePresence, motion } from 'framer-motion'
const Hero = ({ allWords, dir, mainBookURL }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const mainDesc = allWords?.main_desc;
  const splitText = mainDesc?.split('...');
  const mainText = splitText[0] + (mainDesc?.includes('...') ? '...' : '');
  const remainingText = mainDesc?.slice(mainText?.length);
  //  ||
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };



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
              <p>
                {mainText}
                {/* Only show the rest of the text if it's expanded */}
                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    {remainingText}
                  </motion.span>
                )}
              </p>

              <motion.button
                onClick={toggleExpand}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${styles.read_more_btn} ${isExpanded && styles.active}`}
              >
                {isExpanded ? allWords?.read_less : allWords?.read_more}
              </motion.button>


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
            {/* <p>{allWords?.main_desc}</p> */}


            <p>
              {mainText}
              {/* Only show the rest of the text if it's expanded */}
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {remainingText}
                </motion.span>
              )}
            </p>

            <motion.button
              onClick={toggleExpand}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${styles.read_more_btn} ${isExpanded && styles.active}`}
            >
              {isExpanded ? allWords?.read_less : allWords?.read_more}
            </motion.button>







            <a href={mainBookURL} target='_blanked' className={styles.btn_container}>
              <button>
                {allWords?.main_download}
              </button>
            </a>
          </div>

        </div>

      </motion.div>

    </section >
  )
}

export default Hero