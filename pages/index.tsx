import ResponsiveContainer from "src/components/ResponsiveContainer";
import styles from "@/css/Home.module.css";
import Header1 from "src/components/text/Header1";
import ColorClass from "src/types/enums/ColorClass";
import Body1 from "src/components/text/Body1";
import { useState } from "react";
import joinClasses from "src/utils/joinClasses";
import FontClass from "src/types/enums/FontClass";
import Footer from "src/components/Footer";

export default function Home() {
  const [programId, setProgramId] = useState<string>("");
  const [seeds, setSeeds] = useState<string>("");

  return (
    <div className={styles.containerOuter}>
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
          <div className={styles.inputsAndButton}>
            <div className={styles.inputs}>
              <input
                className={joinClasses(styles.input, FontClass.Body1)}
                onChange={(e) => setProgramId(e.target.value)}
                placeholder="Program ID"
                type="text"
                value={programId}
              />
              <input
                className={joinClasses(styles.input, FontClass.Body1)}
                onChange={(e) => setSeeds(e.target.value)}
                placeholder="seed1,seed2,..."
                type="text"
                value={seeds}
              />
            </div>
            <button
              className={joinClasses(styles.button, FontClass.Body1)}
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </ResponsiveContainer>
      <Footer />
    </div>
  );
}
