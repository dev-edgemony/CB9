import styles from "./UserPage.module.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { globalContext } from "../Layout/Layout";
import { useEffect } from "react";

const UserPage = ({ data }) => {
  const { userid } = useParams();
  const { setProfile } = useContext(globalContext);
  const {
    username,
    profile_image,
    followers_count,
    total_photos,
    following_count,
    bio,
    name,
  } = data;

  useEffect(() => {
    setProfile(userid);
  }, []);

  return (
    <>
      <h1 className={styles.userName}>{username}</h1>
      <div className={styles.userWrapper}>
        <img
          className={styles.userImg}
          src={profile_image?.large}
          alt="Profile image"
        />
        <div className={styles.infos}>
          <p className={styles.infoPost}>{total_photos}</p>
          <p>Post</p>
        </div>
        <div className={styles.infos}>
          <p className={styles.infoFollower}>{followers_count}</p>
          <p>follower</p>
        </div>
        <div className={styles.infos}>
          <p className={styles.infoFollowing}>{following_count}</p>
          <p>following</p>
        </div>
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.bio}>{bio}</p>
    </>
  );
};

export default UserPage;
