import { FC } from 'react';
import styles from './PopularStays.module.css';

interface Stay {
  id: number;
  name: string;
  type: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
}

const stays: Stay[] = [
  { id: 1, name: 'Matterhorn Suites', type: 'Entire bungalow', image: '/assets/Matterhorn Suites Image.png', price: 575, rating: 4.9, reviews: 60 },
  { id: 2, name: 'Discovery Shores', type: '2-Story beachfront suite', image: '/assets/Discovery Shores Image.png', price: 360, rating: 4.8, reviews: 116 },
  { id: 3, name: 'Arctic Hut', type: 'Single deluxe hut', image: '/assets/Arctic Hut Image.png', price: 420, rating: 4.7, reviews: 78 },
  { id: 4, name: 'Lake Louise Inn', type: 'Deluxe King Room', image: '/assets/Lake Louise Image.png', price: 244, rating: 4.6, reviews: 63 },
];

const PopularStays: FC = () => {
  return (
    <section className={styles.popularStays}>
      <div className={styles.header}>
        <h2>Popular Stays</h2>
        <a href="#" className={styles.viewAll}>View all stays →</a>
      </div>
      <div className={styles.grid}>
        {stays.map((stay) => (
          <div key={stay.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={stay.image} alt={stay.name} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.stayType}>{stay.type}</div>
              <h3>{stay.name}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>${stay.price}</span>
                <span className={styles.perNight}>/night</span>
              </div>
              <div className={styles.rating}>
                <span className={styles.stars}>★ {stay.rating}</span>
                <span className={styles.reviews}>({stay.reviews} reviews)</span>
              </div>
              <button className={styles.moreDetails}>MORE DETAILS</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularStays;