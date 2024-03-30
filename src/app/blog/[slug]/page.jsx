
import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { getUser } from "@/lib/data";
import ScrollToTop from "react-scroll-to-top";
import moment from 'moment';
//FETCH DATA WITH API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

export const generateMetadata = async ({params}) =>{
  const {slug}= params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

const SinglePostPage = async ({ params }) => {

  const { slug } = params;
 const post = await getData(slug);
  const date = moment(post.createdAt);

//  const post = await getPost(slug);
  return (
    <div className={styles.container} >
    
      {post.img && (<div className={styles.imgContainer}>
        <Image className={styles.img} src={post.img} alt="" width={500} height={500}></Image>
      </div>)}
      <div className={styles.textConatiner}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {/* <Image src={user.img} alt="" className={styles.avatar} width={50} height={50}></Image> */}
          {post && 
          (<Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>)}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
            {/* {post.createdAt.toString().slice(4, 16)} */}
            
            {date.format("DD-MM-YYYY, hh:mm:ss A")}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage