import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import styles from './index.module.scss';
import Link from 'next/link';
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import LangSelector from '../LangSelector';
import { IoArrowBackOutline } from "react-icons/io5";


const Navbar = ({ dir, allWords, allLangs, contact, height }) => {
  const { locale } = useRouter();

  const links = [
    { title: allWords?.main_chose_lang, hasPage: true, icon: 'langs.svg' },
    { title: allWords?.main_about, link: '#', hasPage: false, icon: 'book.svg' },
    { title: allWords?.man_muslim_guide + " " + allWords?.main_new, icon: 'modern.svg', link: `https://newmuslimguide.com/${locale}`, hasPage: false },
    { title: allWords?.man_muslim_guide, icon: 'bookOpen.svg', link: `https://imuslimguide.com/${locale}`, hasPage: false },
    { title: allWords?.main_cities, icon: 'cities.svg', link: 'https://kids.thisislam.net/', hasPage: false },
    { title: allWords?.main_contact, icon: 'contact.svg', link: '/contact-us', hasPage: false },
  ]

  const [showMenu, setShowMenu] = useState(false);
  const [showMenuLangs, setShowMenuLangs] = useState(false);


  // useEffect(() => {
  //   if (showMenuLangs) {
  //     setShowMenu(false)
  //   }

  // }, [showMenu, showMenuLangs])

  return (
    <>

      <nav className={`${styles.navbar} ${height} ${contact === true && styles.contact}`} dir={dir} >

        <div className="mobile">
          <div className={styles.hero_bg}>
            <img src="/assets/imgs/hero_bg.png" alt="" />
          </div>
        </div>

        <div className="container">
          <div className={styles.sec_container}>
            <div className={styles.burger_icon} onClick={() => setShowMenu(true)}>
              <RxHamburgerMenu />
            </div>


            {showMenu &&
              <motion.div
                animate={dir === 'rtl' ? { x: [300, 0] } : { x: [-300, 0] }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={styles.menu_container} >
                <div className={styles.close_icon} onClick={() => setShowMenu(false)}>
                  <IoClose />
                </div>
                <div className={styles.links}>
                  <ul>
                    {links.map((link, idx) =>
                      <li key={idx}>

                        <div className={styles.icon_container}>
                          <img src={`/assets/svgs/${link.icon}`} alt={link.title} />
                        </div>

                        {link.hasPage === true ?
                          <a onClick={() => setShowMenuLangs(true)} target='_blank'> {link.title}</a>
                          :
                          <Link href={link.link}>{link.title}</Link>}



                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            }


            {showMenuLangs &&
              <motion.div
                animate={{ y: [300, 0] }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={styles.menu_container_langs} >

                <div className="container position-relative">
                  <div className={styles.back_container} onClick={() => setShowMenuLangs(false)}>
                    <IoArrowBackOutline />
                  </div>
                </div>

                <div className={styles.hero_bg}>
                  <img src="/assets/imgs/hero_bg.png" alt="" />
                </div>

                <motion.div initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, type: "tween" }} className={styles.logo} onClick={() => setShowMenuLangs(false)}>
                  <img src="/assets/svgs/logo.svg" alt="this is islam logo" />
                </motion.div>



                <LangSelector allLangs={allLangs} setShowMenuLangs={setShowMenuLangs} />
              </motion.div>
            }

            <motion.div initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "tween" }} >
              <Link href='/' className={styles.logo}>
                <img src="/assets/svgs/logo.svg" alt="this is islam logo" />
              </Link>
            </motion.div>

          </div>
        </div>




        {
          (showMenu) &&
          <div className={styles.layer} onClick={() => {
            setShowMenu(false);
          }} />
        }

      </nav >

    </>
  )
}

export default Navbar