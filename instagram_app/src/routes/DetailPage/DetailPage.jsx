import { NavLink } from "react-router-dom";
import DetailPagePhoto from "../../components/DetailPagePhoto/DetailPagePhoto";
import { globalContext } from "../../components/Layout/Layout";
import { useContext } from "react";
import styles from "./DetailPage.module.scss";

const DetailPage = () => {
  const { searchedPhoto, profile } = useContext(globalContext);

  return (
    <div className={styles.mainWrapper}>
      <NavLink to={`/profile/${profile}`}>
        <img
          src="../../src/assets/back-svgrepo-com.svg"
          alt="back"
          className={styles.backArrow}
        />
      </NavLink>
      <div>
        {searchedPhoto.map((photo, index) => (
          <DetailPagePhoto data={photo} key={index} id={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
