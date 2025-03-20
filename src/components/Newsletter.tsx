import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p>Fill in your details to join the party!</p>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="Your name"
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;