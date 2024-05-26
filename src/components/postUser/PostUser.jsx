import Image from "next/image";
import styles from "./postuser.module.css";
import { getUser } from "@/lib";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  const { username, password, image} = user;

  
  return (
    <div className={styles.detail}>
      <Image
        src={image? image : "/noavatar.png"}
        alt="/noavatar.png"
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{username}</span>
      </div>

      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Website</span>
        <span className={styles.detailValue}>{password}</span>
      </div>
    </div>
  );
};

export default PostUser;
