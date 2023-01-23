import styles from "./Text.module.css";
export default function Text({ employee = "none" }) {
  return (
    <div className={styles.main}>
      <div className={styles.data}>{employee}</div>
    </div>
  );
}
