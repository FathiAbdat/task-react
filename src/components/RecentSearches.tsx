import { FC } from 'react';
import styles from './RecentSearches.module.css';

const RecentSearches: FC = () => {
  return (
    <section className={styles.recentSearches}>
      <h2>RECENT SEARCHES</h2>
      <div className={styles.searchCards}>
        <div className={styles.searchCard}>
          <div className={styles.route}>
            <span className={styles.airport1}>SIN</span>
            <div className={styles.flightIcon}>
              <span className={styles.dot}></span>
              <span className={styles.plane}><img src='/public/assets/Duration (1).png'></img></span>
              <span className={styles.dot}></span>
            </div>
            <span className={styles.airport}>LAX</span>
          </div>
          <div className={styles.departDate}><span>Depart On:</span> 7 Sep 2021</div>
        </div>
        <div className={styles.searchCard}>
          <div className={styles.route}>
            <span className={styles.airport1}>MY</span>
            <div className={styles.flightIcon}>
              <span className={styles.dot}></span>
              <span className={styles.plane}><img src='/public/assets/Duration (1).png'></img></span>
              <span className={styles.dot}></span>
            </div>
            <span className={styles.airport}>DUB</span>
          </div>
          <div className={styles.departDate}><span>Depart On: </span>9 Sep 2021</div>
        </div>
      </div>
      
      <div className={styles.prepareSection}>
        <h3>PREPARE FOR YOUR TRIP</h3>
        <div className={styles.prepareButtons}>
          <button className={`${styles.prepareButton} ${styles.hotel}`}>
            <span className={styles.icon}><img src='/public/assets/Hotel Icon.png'></img></span>
            <span>Hotel</span>
          </button>
          <button className={`${styles.prepareButton} ${styles.attractions}`}>
            <span className={styles.icon}><img src='/public/assets/Attractions Icon.png'></img></span>
            <span>Attractions</span>
          </button>
          <button className={`${styles.prepareButton} ${styles.eats}`}>
            <span className={styles.icon}><img src='/public/assets/Eats Icon.png'></img></span>
            <span>Eats</span>
          </button>
          <button className={`${styles.prepareButton} ${styles.commute}`}>
            <span className={styles.icon}><img src='/public/assets/Commute icon.png'></img></span>
            <span>Commute</span>
          </button>
          <button className={`${styles.prepareButton} ${styles.taxi}`}>
            <span className={styles.icon}><img src='/public/assets/Taxi Icon.png'></img></span>
            <span>Taxi</span>
          </button>
          <button className={`${styles.prepareButton} ${styles.movies}`}>
            <span className={styles.icon}><img src='/public/assets/Movies icon.png'></img></span>
            <span>Movies</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentSearches;