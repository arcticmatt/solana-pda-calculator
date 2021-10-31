import ResponsiveContainer from "src/components/ResponsiveContainer";
import styles from "@/css/Home.module.css";
import Header1 from "src/components/text/Header1";
import ColorClass from "src/types/enums/ColorClass";
import Body1 from "src/components/text/Body1";
import { useState } from "react";
import joinClasses from "src/utils/joinClasses";
import FontClass from "src/types/enums/FontClass";

export default function Home() {
  const [seeds, setSeeds] = useState<string>("");

  return (
    <ResponsiveContainer>
      <div className={styles.containerInner}>
        <Header1 colorClass={ColorClass.Primary} textAlign="center">
          Solana PDA Finder
        </Header1>
        <Body1
          className={styles.description}
          colorClass={ColorClass.Primary}
          textAlign="center"
        >
          A tool for finding Solana PDAs (program derived addresses).
        </Body1>
        <div className={styles.inputAndButton}>
          <input
            className={joinClasses(styles.input, FontClass.Body1)}
            onChange={(e) => setSeeds(e.target.value)}
            placeholder="Enter comma-separated seeds"
            type="text"
            value={seeds}
          />
          <button
            className={joinClasses(styles.button, FontClass.Body1)}
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </ResponsiveContainer>
  );
}
