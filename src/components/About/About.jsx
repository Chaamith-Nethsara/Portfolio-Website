import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id='about' >
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageUrl('about/aboutImage.png')} alt="me sitting with a laptop" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt="cursor-image" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'am frontend developer with experience in build and 
                            optimized sites
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="cursor-image" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I'am experience developing fast and optimized and APIs 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/uiIcon.png')} alt="cursor-image" />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have designed multiple landing pages and have 
                            systems as well
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    
    </section>
  )
}

export default About
