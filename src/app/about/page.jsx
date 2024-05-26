import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "about page",
  description: "A next application about page",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About blah Agency</h2>
        <h1 className={styles.title}>We do blah blah blah</h1>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
          temporibus ducimus eum esse pariatur aperiam quas maiores ratione eos
          veritatis ut adipisci, officia laboriosam alias sit quam explicabo
          molestias distinctio.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>1,000,000+</h1>
            <p>Satisfied Customers</p>
          </div>
          <div className={styles.box}>
            <h1>20+</h1>
            <p>Blue Chip clients</p>
          </div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/about.png"
          alt="graphic of man holding bag and analyzing illustration"
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
};
export default AboutPage;
