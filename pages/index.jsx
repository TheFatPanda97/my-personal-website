import Button from '../components/Button';

import styles from '../styles/home.module.css';

const home = () => {
  return (
    <div className={styles.home}>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Hi, I'm Shawn</h1>
      <p>student, engineer, dreamer</p>
      <Button path="About">About Me</Button>
    </div>
  );
};

export default home;
