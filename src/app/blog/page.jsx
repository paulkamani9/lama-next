import PostCard from "@/components/postcard/postcard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib";

export const metadata = {
  title: "blog page",
  description: "A next application blog page",
};

const fetchPosts = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {
  const posts = await fetchPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <div className={styles.post} key={post._id}>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};
export default BlogPage;
