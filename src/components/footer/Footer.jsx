import Image from "next/image";
import styles from "./footer.module.css";
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"></link>
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Quod Invicta</div>
      <div className={styles.text}>The Offical Fashion Club of NIT Jamshedpur. <br></br>
      E-Mail: invicta.nit.jsr@gmail.com
      </div>
    </div>
    
  )
}

export default Footer