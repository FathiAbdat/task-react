import { FC } from 'react';
import styles from './RecommendedHolidays.module.css';

interface Holiday {
  id: number;
  name: string;
  image: string;
  price: string;
  duration: string;
}

const holidays: Holiday[] = [
  { id: 1, name: 'Bali', image: '/assets/BoracayImage.png', price: '$899', duration: '4D3N' },
  { id: 2, name: 'Swiss', image: '/assets/SwitzerlandImage.png', price: '$900', duration: '6D5N' },
  { id: 3, name: 'Boracay', image: '/assets/BoracayImage.png', price: '$699', duration: '5D4N' },
  { id: 4, name: 'Palawan', image: '/assets/PalawanImage.png', price: '$789', duration: '4D3N' },
];

const RecommendedHolidays: FC = () => {
  return (
    <section className={styles.recommendedHolidays}>
      <div className={styles.header}>
        <h2>Recommended Holidays</h2>
        <a href="#" className={styles.viewAll}>View all holidays →</a>
      </div>
      <div className={styles.grid}>
        {holidays.map((holiday) => (
          <div key={holiday.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={holiday.image} alt={holiday.name} />
              <div className={styles.duration}>{holiday.duration}</div>
            </div>
            <div className={styles.cardContent}>
              <h3>{holiday.name}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>{holiday.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedHolidays;