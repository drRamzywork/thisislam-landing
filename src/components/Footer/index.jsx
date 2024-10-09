import React from 'react'
import styles from './index.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer id='footer' className={styles.footer}>
        <div className="container">

          <div className={styles.sec_container}>
            <div className={styles.logo}>
              <img src="/assets/svgs/logo_white.svg" alt="this is islam" />
            </div>


            <div className={styles.text_container}>
              <p>لمزيد من المعلومات :</p>
              <p>info@modern-guide.com</p>

              <div className={styles.whatsapp}>
                <p>‭+44 7405 933742</p>
                <div className={styles.icon_container}>
                  <img src="/assets/svgs/whatsapp.svg" alt="" />
                </div>
              </div>

              <div className={styles.btn_container}>
                <Link href='/contact-us'>تواصل معنا </Link >
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer