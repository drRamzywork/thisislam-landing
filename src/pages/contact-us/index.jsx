import Navbar from '@/components/Navbar'
import React from 'react'
import styles from './index.module.scss';
import { FaWhatsapp } from "react-icons/fa";
import Footer from '@/components/Footer';

const ContactUs = ({ dir, allWords, allLangs }) => {
  return (
    <>
      <Navbar dir={dir?.data?.dir} allWords={allWords} allLangs={allLangs} />
      <section className={styles.contact_us} dir='ltr'>
        <div className="container">

          <div className={styles.sec_container}>
            <div className={styles.sec_title}>
              <h2>
                <span>Get in</span>

                Touch
              </h2>
            </div>

            <form action="">
              <div className={styles.name}>
                <input type="text" name="name" id="name" required placeholder='Name' />
              </div>
              <div className={styles.email}>
                <input type="email" name="email" id="email" required placeholder='Email' />
              </div>

              <div className={styles.title}>
                <input type="text" name="title" id="title" required placeholder='Title' />
              </div>

              <div className={styles.text_area}>
                <textarea name="textarea" id="textarea" placeholder='Your Message'></textarea>
              </div>


              <div className={styles.btn_container}>
                <button>SEND</button>
              </div>



            </form>


            <div className={styles.info}>
              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <FaWhatsapp />
                </div>

                <div className={styles.text_container}>
                  <div className={styles.title}>
                    <p>Whatsapp</p>
                  </div>
                  <span>‭+44 7405 933742</span>
                </div>
              </div>



              <div className={styles.box}>
                <div className={styles.icon_container}>
                  <img src="/assets/svgs/mail.svg" alt="" />
                </div>

                <div className={styles.text_container}>
                  <div className={styles.title}>
                    <p>Email</p>
                  </div>
                  <span>info@modern-guide.com</span>
                </div>
              </div>



            </div>
          </div>
        </div>

      </section>


      <Footer />
    </>
  )
}

export default ContactUs



export async function getStaticProps({ locale }) {
  const baseURL = "https://app.thisislam.net/api";
  try {
    const allLangsRes = await fetch(`${baseURL}/all_langs`);
    if (!allLangsRes.ok) throw new Error("Failed to fetch all_langs");
    const allLangs = await allLangsRes.json();



    const dirResponse = await fetch(`${baseURL}/get_direction/${locale}`);
    if (!dirResponse.ok) throw new Error("Failed to fetch get_direction");
    const dir = await dirResponse.json();


    const allWordsRes = await fetch(`${baseURL}/get-trans/${locale}`);
    if (!allWordsRes.ok) throw new Error("Failed to fetch get_site_info");
    const allWords = await allWordsRes.json();




    return {
      props: {
        allLangs,
        allWords,
        dir,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("API call error:", error.message);
    return {
      props: {
        allLangs: null,
        dir: null,
        allWords: null,
      },
      revalidate: 10,
    };
  }
}