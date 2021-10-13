import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" passHref>
        <a className={styles.logoLink}>SHAWN HU</a>
      </Link>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Projects">Projects</Link>
    </nav>
  );
};

export default NavBar;
