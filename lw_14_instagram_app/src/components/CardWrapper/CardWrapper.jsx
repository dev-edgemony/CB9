import Card from "../Card/Card";
import styles from "./CardWrapper.module.scss";
import { globalContext } from "../Layout/Layout";
import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";

const CardWrapper = ({ list = [] }) => {
  const { filter, setFilter, photoID, setPhotoID } = useContext(globalContext);

  return (
    <>
      <div>
        <form type="submit" className={styles.searchForm}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className={styles.searchInput}
            value={filter}
            onChange={(e) => {
              e.preventDefault();
              const input = e.target.value;
              setFilter(input);
            }}
          />
        </form>
      </div>
      <div className={styles.cardWrapper}>
        {list.map((data, index, id) => (
          <NavLink key={index} to={`/detail/:${data.id}`}>
            <Card data={data} id={data.id} onclick={setPhotoID} />
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default CardWrapper;
