import styles from "./Avatar.module.css";

export default function Avatar(props) {
  return <img className={styles.avatar} src={props.src} />;
}
