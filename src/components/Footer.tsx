import styles from "@/css/Footer.module.css";
import Body2 from "src/components/text/Body2";

export default function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <Body2 textAlign="center">
        Made by <a href="https://twitter.com/pencilflip">pencilflip</a>
      </Body2>
    </div>
  );
}
