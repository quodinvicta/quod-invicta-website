import Image from "next/image"
import styles from "./loading.module.css"

const loading = () => {
  return (
    <div className={styles.loading}>
      <Image src="/loading.gif" width={100} height={100}></Image>
    </div>
  )
}

export default loading