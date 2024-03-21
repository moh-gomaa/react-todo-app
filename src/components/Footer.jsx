import styles from "./footer.module.css";
export default function Footer({ allTodosCount, completedTodosCount }) {
  return (
    <div className={styles.footer}>
      <span className={styles.summaryItem}>
        Completed todos count: {completedTodosCount}
      </span>

      <span className={styles.summaryItem}>
        All todos count: {allTodosCount}
      </span>
    </div>
  );
}
