import { FC } from 'react';
import styles from './Hero.module.css';

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Let's explore & travel the world</h1>
        <p>Find the best destinations and the most popular stays!</p>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <div className={styles.searchGroup}>
              <div className={styles.searchHeader}>
                <label>SEARCH FLIGHTS</label>
                <div className={styles.flightType}>
                  <label>
                    <input type="radio" name="flightType" value="return" /> Return
                  </label>
                  <label>
                    <input type="radio" name="flightType" value="oneway" defaultChecked /> One-way
                  </label>
                </div>
              </div>
              <div className={styles.inputs}>
                <div className={styles.inputGroup}>
                  <input type="text" placeholder="Singapore (SIN)" />
                  <input type="text" placeholder="Los Angeles (LA)" />
                  <input type="date" defaultValue="2022-01-05" />
                </div>
                <button className={styles.searchButton}>SEARCH FLIGHTS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;