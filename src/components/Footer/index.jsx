import React from 'react'
import styles from './index.module.scss';
import Link from 'next/link';

const Footer = ({ allWords, dir }) => {

  return (
    <>
      <footer id='footer' className={styles.footer} dir={dir}>
        <div className="container">

          <div className={styles.sec_container}>
            <a href='#' className={styles.logo}>
              <img src="/assets/svgs/logo_white.svg" alt="this is islam" />
            </a>

            <div className={styles.text_container}>
              <p>{allWords?.main_more_info}:</p>
              <a target="_blank" rel="noreferrer" href="mailto:info@modern-guide.com" >
                <p>info@modern-guide.com</p>
              </a>





              <a target="_blank" href="https://api.whatsapp.com/send/?phone=447405933742" className={styles.whatsapp}>
                <p>‭+44 7405 933742</p>
                <div className={styles.icon_container}>
                  <img src="/assets/svgs/whatsapp.svg" alt="" />
                </div>
              </a>

              <div className={styles.btn_container}>
                <Link href='/contact-us'>{allWords?.main_contact} </Link >
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer