import Navbar from '@/components/Navbar'
import React from 'react'
import styles from './index.module.scss';
import { FaWhatsapp } from "react-icons/fa";
import Footer from '@/components/Footer';

const ContactUs = ({ dir, allWords, allLangs }) => {
  const contactWords = allWords?.main_contact?.split(" ");

  return (
    <>
      <Navbar dir={dir?.data?.dir} allWords={allWords} allLangs={allLangs} />
      <div className={styles.hero_bg}>
        <img src="/assets/imgs/hero_bg.png" alt="" />
      </div>

      <section className={styles.contact_us} dir={dir?.data?.dir}>



        <div className="container">

          <div className={styles.sec_container}>
            <div className={styles.sec_title}>
              <h2>
                {contactWords && contactWords.length === 2 ? (
                  <>
                    <span>{contactWords[0]}</span>
                    {` `}
                    {contactWords[1]}
                  </>
                ) : (
                  ""
                )}

              </h2>
            </div>

            <form action="">
              <div className={styles.name}>
                <input type="text" name="name" id="name" required placeholder={allWords?.mian_name} />
              </div>
              <div className={styles.email}>
                <input type="email" name="email" id="email" required placeholder={allWords?.main_email} />
              </div>

              <div className={styles.title}>
                <input type="text" name="title" id="title" required placeholder={allWords?.form_title} />
              </div>

              <div className={styles.text_area}>
                <textarea name="textarea" id="textarea" placeholder={allWords?.main_message}></textarea>
              </div>


              <div className={styles.btn_container}>
                <button>{allWords?.main_send}</button>
              </div>



            </form>


            <div className={styles.info}>
              <a target="_blank" href="https://api.whatsapp.com/send/?phone=447405933742" >
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
              </a>


              <a target="_blank" rel="noreferrer" href="mailto:info@modern-guide.com" >
                <div className={styles.box}>
                  <div className={styles.icon_container}>
                    <img src="/assets/svgs/mail.svg" alt="" />
                  </div>

                  <div className={styles.text_container}>
                    <div className={styles.title}>
                      <p>{allWords?.main_email}</p>
                    </div>
                    <span>info@modern-guide.com</span>
                  </div>
                </div>
              </a>


            </div>
          </div>
        </div>

      </section >


      <Footer allWords={allWords} dir={dir?.data?.dir} />
    </>
  )
}

export default ContactUs



export async function getServerSideProps({ locale }) {
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