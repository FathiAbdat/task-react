import { FC } from 'react';
import styles from './Destinations.module.css';

interface Destination {
  id: number;
  name: string;
  image: string;
  price: string;
}

const destinations: Destination[] = [
  { id: 1, name: 'Paris', image: '/assets/ParisImage.png', price: '$699' },
  { id: 2, name: 'Greece', image: '/assets/GreeceImage.png', price: '$1079' },
  { id: 3, name: 'Norway', image: '/assets/NorwayImage.png', price: '$895' },
  { id: 4, name: 'Tuscany', image: '/assets/TuscanyImage.png', price: '$1245' },
];

const Destinations: FC = () => {
  return (
    <section className={styles.destinations}>
      <div className={styles.header}>
        <h2>Most Popular Destinations</h2>
        <a href="#" className={styles.viewAll}>View all destinations →</a>
      </div>
      <div className={styles.grid}>
        {destinations.map((destination) => (
          <div key={destination.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={destination.image} alt={destination.name} />
              <div className={styles.priceTag}>
                <span className={styles.from}>FROM</span>
                <span className={styles.amount}>{destination.price}</span>
              </div>
            </div>
            <div className={styles.cardContent}>
              <h3>{destination.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;