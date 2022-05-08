import { usePagePercent } from "../../hooks/usePagePercent";
import styles from "./ReadProgress.module.css";

export const ReadProgress = () => {
  const percent = usePagePercent();
  return <div style={{ width: `${percent}%` }} className={styles.progress} />;
};
