import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <NavLink
        to={`/`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <img
          src="../../src/assets/home-11-svgrepo-com.svg"
          alt="Home"
          className={styles.homeBtn}
        />
      </NavLink>
      <NavLink
        to={`/add/`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <img
          src="../../src/assets/add-ellipse-svgrepo-com.svg"
          alt="Add Photo"
          className={styles.addPhotoBtn}
        />
      </NavLink>
      <NavLink
        to={`/profile/shanavaro`}
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        <img
          src="../../src/assets/profile-circle-svgrepo-com.svg"
          alt="Home"
          className={styles.profileBtn}
        />
      </NavLink>
    </div>
  );
};

export default Footer;
