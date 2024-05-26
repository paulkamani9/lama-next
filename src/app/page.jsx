import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Blah blah blah Agency</h1>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
          commodi. Vel aut facere cupiditate dolorum porro blanditiis quas quos.
          Explicabo animi, error possimus optio quia consectetur enim quisquam
          sunt labore?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="blah blah blah brands"
            fill
            className={styles.brandImages}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hero.gif"
          alt="blah blah blah illustration  of team work"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
