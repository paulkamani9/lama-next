import { addPost } from "@/lib";

const ServerActionTest = () => {
  return (
    <div>
      <form action={addPost}>
        <input placeholder="title" name="title" />
        <input placeholder="desc" name="desc" />
        <input placeholder="slug" name="slug" />
        <input placeholder="userID" name="userId" />
        <button>Hit me</button>
      </form>
    </div>
  );
};
export default ServerActionTest;
