import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib";

const fetchPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) return "error";

  return res.json();

};
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await fetchPost(slug);
  const { title, desc } = post;

  return {
    title,
    description: desc,
  };
};

const SinglePost = async ({ params, searchParams }) => {
  const { slug } = params;
  const { userId } = searchParams;

  const post = await fetchPost(slug); // deduced!!. That means nextJs would not fetch this data again since it fetched it on line 9.

  const { title, desc, image } = post;

  return (
    <div className={styles.container}>
      {image && (
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt="Brunette woman taking a vintage photograph"
            fill
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <Suspense fallback={<p>Loading ....</p>}>
          <PostUser userId={userId} />
        </Suspense>
        <div className={styles.content}>{desc}</div>
      </div>
    </div>
  );
};
export default SinglePost;
