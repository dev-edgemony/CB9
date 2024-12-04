import styles from "./NavBar.module.css";
import Logo from "../logo/logo.jsx";

const NavBar = () => {
  const navbarList = ["Home", "About", "Contact"];

  return (
    <nav className={styles.navbarBox}>
      <Logo />
      <ul className={styles.navbarList}>
        {navbarList.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </nav>
  );
};
export default NavBar;
