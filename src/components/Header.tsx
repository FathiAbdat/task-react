import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoText}>FickleFlight</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">Offers</a></li>
        </ul>
      </nav>
      <div className={styles.userSection}>
        <button className={styles.notificationBtn}>
          <img src="/assets/notification bell (1).png" alt="Notifications" />
        </button>
        <button className={styles.profileBtn}>
          <img src="/assets/profile picture.png" alt="Profile" />
        </button>
      </div>
    </header>
  );
};

export default Header;