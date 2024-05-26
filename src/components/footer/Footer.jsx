import styles from "./foooter.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>Logo</h2>
      <span className={styles.text}>The blah blah has come</span>
    </div>
  );
};
export default Footer;
