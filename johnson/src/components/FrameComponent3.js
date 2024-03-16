import { useMemo } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({
  aVEJO,
  menCheckeredRoundNeckCott,
  propFlex,
  propDebugCommit,
  propAlignSelf,
  propMinWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      debugCommit: propDebugCommit,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propDebugCommit, propAlignSelf]);

  const aVEJOStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.frameParent} style={frameDiv1Style}>
      <button className={styles.frameGroup}>
        <div className={styles.wrapper}>
          <div className={styles.div}>4.4</div>
        </div>
        <img className={styles.icroundStarIcon} alt="" src="/icroundstar.svg" />
      </button>
      <div className={styles.avejo} style={aVEJOStyle}>
        {aVEJO}
      </div>
      <div className={styles.menCheckeredRound}>
        {menCheckeredRoundNeckCott}
      </div>
    </div>
  );
};

export default FrameComponent3;
