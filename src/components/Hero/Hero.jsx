import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'am Ada</h1>
            <p className={styles.description}>
                I am fullstack developer with 5 years of experience in React and
                Node.js.React out if you would like to learn more.
            </p>
            <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Us</a>
        </div>
        <img src={getImageUrl('hero/heroImage.png')} alt="myPicture" className={styles.heroImg} />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero
