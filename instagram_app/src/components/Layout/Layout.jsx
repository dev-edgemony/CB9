import { Outlet } from "react-router-dom";
import { galleryURL, specificUserURL } from "../../utils/endpoints";
import { createContext } from "react";
export const globalContext = createContext();
import { useState, useEffect } from "react";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

const Layout = () => {
  const [user, setUser] = useState({});
  const [photo, setPhoto] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchedPhoto, setSearchedPhoto] = useState([]);
  const [photoID, setPhotoID] = useState("");
  const [gallery, setGallery] = useState([]);
  const [profile, setProfile] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState("");

  const value = {
    filter,
    setFilter,
    photo,
    setPhoto,
    searchedPhoto,
    user,
    photoID,
    setPhotoID,
    gallery,
    setGallery,
    profile,
    setProfile,
    isClicked,
    setIsClicked,
    currentIndex,
    setCurrentIndex,
  };

  useEffect(() => {
    if (profile) {
      fetch(
        `${specificUserURL}/${profile}/?client_id=${
          import.meta.env.VITE_AUTH_KEY
        }`
      )
        .then((res) => res.json())
        .then((data) => setUser(data));

      fetch(
        `${specificUserURL}/${profile}/photos/?client_id=${
          import.meta.env.VITE_AUTH_KEY
        }&per_page=30`
      )
        .then((res) => res.json())
        .then((photoRes) => setPhoto(photoRes));
    }
  }, [profile]);

  useEffect(() => {
    fetch(
      `${galleryURL}?client_id=${import.meta.env.VITE_AUTH_KEY}&per_page=30`
    )
      .then((res) => res.json())
      .then((gallery) => setGallery(gallery));
  }, []);

  useEffect(() => {
    if (filter === "") {
      setSearchedPhoto(photo);
    } else {
      const resultPhoto = photo?.filter((data) =>
        data?.alt_description?.includes(filter)
      );
      setSearchedPhoto(resultPhoto);
    }
  }, [photo, filter]);

  return (
    <globalContext.Provider value={value}>
      <div className={styles.layout}>
        <Logo />
        <Outlet />
        <Footer />
      </div>
    </globalContext.Provider>
  );
};

export default Layout;
