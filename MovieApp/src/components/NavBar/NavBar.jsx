import styles from "./NavBar.module.scss";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const navList = ["Home", "About us", "Contact us"];
  return (
    <nav className={styles.NavBar}>
      <Logo />
      <ul className={styles.navList}>
        {navList.map((link, index) => (
          <li className={styles.navListItem} key={index}>
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
