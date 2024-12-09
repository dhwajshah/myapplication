import React from 'react';
import styles from './Home.module.scss';
const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hello World</h1>
    </div>
  );
};

export default Home;
