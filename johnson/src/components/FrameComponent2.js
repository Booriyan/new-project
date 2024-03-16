import { useMemo } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  trendingSmartWatches2024,
  emailinfopraktijkspiritnl,
  propBackgroundColor,
  propAlignSelf,
  propWidth,
  propOverflow,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const trendingSmartWatchesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const emailinfopraktijkspiritnlIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className={styles.trendingSmartWatches2024Parent}
      style={frameDivStyle}
    >
      <div
        className={styles.trendingSmartWatches}
        style={trendingSmartWatchesStyle}
      >
        {trendingSmartWatches2024}
      </div>
      <div className={styles.frameWrapper}>
        <button className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.emailinfopraktijkspiritnlIcon}
            alt=""
            src={emailinfopraktijkspiritnl}
            style={emailinfopraktijkspiritnlIconStyle}
          />
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
