import { useRouter } from 'next/router';

import styles from '../styles/button.module.css';

const Button = ({ children, path }) => {
  const router = useRouter();

  return (
    <button className={styles.customButton} onClick={() => router.push(path)}>
      {children}
    </button>
  );
};

export default Button;
