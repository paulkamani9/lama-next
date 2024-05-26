import { deletePost, getPosts } from "@/lib";
import styles from "./adminPosts.module.css";
import Image from "next/image";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.posts}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.image || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className = {styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <button className={styles.postButton}>delete</button>
            <input type="hidden" name="id" value={post.id} />
          </form>
        </div>
      ))}
    </div>
  );
};
export default AdminPosts;
