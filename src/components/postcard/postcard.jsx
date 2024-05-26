import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";
const PostCard = ({ post }) => {
  const { userId, title, desc, slug, image } = post;
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.image && (
          <div className={styles.imageContainer}>
            <Image
              src={image}
              alt="put image.name from fetch"
              fill
              className={styles.image}
            />
          </div>
        )}
        <span className={styles.date}>17.05.24</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Link href={`/blog/${slug}?userId=${userId}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};
export default PostCard;
