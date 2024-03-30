import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import moment from 'moment';
const PostCard = ({post}) => {


  const date = moment(post.createdAt);
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt="" fill className={styles.img}></Image>
            </div>}
            <span className={styles.date}>
            {/* {post.createdAt.toString().slice(4, 16)} */}
            {date.format("DD-MM-YYYY, hh:mm:ss A")}
            </span>
        </div>
        <div className={styles.bottom}>
            <h1 classname={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
            <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard