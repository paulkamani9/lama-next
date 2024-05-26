import { deleteUser, getUsers } from "@/lib";
import styles from "./adminUsers.module.css";
import Image from "next/image";

const AdminUsers = async() => {
    
  const users = await getUsers();

  return (
    <div className={styles.users}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.image || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className = {styles.userName}>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <button className={styles.userButton}>delete</button>
            <input type="hidden" name="id" value={user.id} />
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
