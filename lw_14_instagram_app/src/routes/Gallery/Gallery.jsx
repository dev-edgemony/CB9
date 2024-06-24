import styles from "./Gallery.module.scss";
import { globalContext } from "../../components/Layout/Layout";
import { useContext } from "react";
import DetailPagePhoto from "../../components/DetailPagePhoto/DetailPagePhoto";

const Gallery = () => {
  const { gallery } = useContext(globalContext);

  return (
    <div className={styles.galleryWrapper}>
      <h1 className={styles.title}>Scelti per te...</h1>
      <div className={styles.pippo}>
        {gallery.map((data, index) => (
          <DetailPagePhoto data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
