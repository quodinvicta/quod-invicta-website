import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Quod Invicta</div>
      <div className={styles.text}>The Offical Fashion Club of NIT Jamshedpur.</div>
    </div>
    
  )
}

export default Footer