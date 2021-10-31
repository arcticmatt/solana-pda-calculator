import ResponsiveContainer from "src/components/ResponsiveContainer";
import styles from "@/css/Home.module.css";

export default function Home() {
  return (
    <ResponsiveContainer>
      <div className={styles.containerInner}>Hi</div>
    </ResponsiveContainer>
  );
}
