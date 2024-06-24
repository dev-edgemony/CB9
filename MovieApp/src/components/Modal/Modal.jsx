import styles from "./Modal.module.scss";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ handleCloseClick, movie }) => {
  const { original_name, overview, backdrop_path } = movie;

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalWindow}>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
        <h2 className={styles.modalTitle}>{original_name}</h2>
        <p className={styles.modalOverview}>{overview}</p>
        <div className={styles.closeButtonContainer}>
          <IoMdCloseCircle
            className={styles.iconClose}
            onClick={handleCloseClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
