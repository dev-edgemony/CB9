import styles from "./Modal.module.scss";
import { IoMdCloseCircle } from "react-icons/io";

const Modal = ({ handleCloseClick, movie }) => {
  const { title, overwiew, backdrop_path } = movie;

  return (
    <div className={styles.modalBox}>
      <div className={styles.modalWindow}>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
        <div className={styles.modalInfo}>
          <h2>{title}</h2>
          <p className={styles.overwiew}>{overwiew}</p>
        </div>
        <div className={styles.closeBtnBox}>
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
