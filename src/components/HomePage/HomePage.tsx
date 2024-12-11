import React from 'react';
import styles from './HomePage.module.scss';
const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.heading}>Hello World</h1>
    </div>
  );
};

export default HomePage;
