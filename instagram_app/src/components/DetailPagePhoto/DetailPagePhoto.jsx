import styles from "./DetailPagePhoto.module.scss";
import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const DetailPagePhoto = ({ data, index }) => {
  const { urls, alt_description, id, user } = data;

  return (
    <>
      <div className={styles.DetailPageMainDiv}>
        <NavLink
          to={`/profile/${user.username}`}
          className={styles.DetailPageAuthor}
        >
          {user.username}
        </NavLink>
        <div className={styles.DetailPagePhotoDiv}>
          <img
            className={styles.DetailPagePhoto}
            id={id}
            src={urls.regular}
            alt={alt_description}
          />
          <ul className={styles.photoButtons}>
            <li className={styles.photoButtonsIcons}>
              <CiHeart />
            </li>
            <li className={styles.photoButtonsIcons}>
              <FaRegComment />
            </li>
            <li className={styles.photoButtonsIcons}>
              <RiShareForwardLine />
            </li>
          </ul>
          <p className={styles.altDescription}>"{alt_description}"</p>
        </div>
      </div>
    </>
  );
};

export default DetailPagePhoto;
