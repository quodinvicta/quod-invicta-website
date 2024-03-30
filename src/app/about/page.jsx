import Image from "next/image"
import styles from "./about.module.css"

export const metadata = {
  title: {
    default: "About Page",
    template: "%s | Quod Invicta"
  },
  description: 'The Official Webpage for Quod Invicta',
}


const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image src="/about.png" alt="" fill/>
      </div>
      <h1 className={styles.subtitle}>About The Team</h1>
      <div className={styles.textContainer}>
          Quod Invicta was founded in 2011 and was named as Invincibles and was rebranded in 2017 as Quod Invicta, Invicta is 'Invincibles' in Latin to keep the history of the team. Our main objective is to make clothing more of a lifestyle than something that is used to cover one’s body through engineering and collaborating with brands to create an awareness of sustainable clothing.
      </div>
      <h1 className={styles.subtitle}>Achievements</h1>
      <div >
        <ul className={styles.achievements}>
            <li>Culfest'20 - Champions</li>
            <li>Ensemble Valhalla'19 - Champions </li>
            <li>We had participated in various events and fashion shows organized by IIT Guwahati, IIT Kharagpur, NIT Jamshedpur, NIT Rourkela, Xavier School of Management and Tata Steel from 2011-2020.</li>
            <li>Tanishq's 2020 Valentine's collection was directed and shot by Invicta.</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutPage