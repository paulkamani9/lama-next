import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "contact page",
  description: "contact page",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/contact.png"
          alt="graphic of man pointing to a letter and a big envelop by his side"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea
            name="your message to us"
            cols="30"
            rows="10"
            placeholder="Your message"
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
