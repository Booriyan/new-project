import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.helloJohnHowCanIHelpYouParent}>
      <h2 className={styles.helloJohnHowContainer}>
        <span>
          <p className={styles.helloJohn}>Hello, John</p>
          <p className={styles.howCanI}>How can I help you today?</p>
        </span>
      </h2>
      <div className={styles.frameParent}>
        <FrameComponent2
          trendingSmartWatches2024="Trending smart watches 2024"
          emailinfopraktijkspiritnl="/emailinfopraktijkspiritnl.svg"
        />
        <FrameComponent2
          trendingSmartWatches2024="Portable vacuum cleaner"
          emailinfopraktijkspiritnl="/group-48095807.svg"
          propBackgroundColor="#343434"
          propAlignSelf="unset"
          propWidth="217px"
          propOverflow="unset"
        />
        <FrameComponent2
          trendingSmartWatches2024="Kurti sets under 600"
          emailinfopraktijkspiritnl="/frame-1.svg"
          propBackgroundColor="#343434"
          propAlignSelf="unset"
          propWidth="180px"
          propOverflow="hidden"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
