import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <img
        className={styles.sidebarIcon}
        loading="lazy"
        alt=""
        src="/sidebar@2x.png"
      />
      <img
        className={styles.fluentlibrary20FilledIcon}
        alt=""
        src="/fluentlibrary20filled.svg"
      />
      <main className={styles.window}>
        <FrameComponent1 />
        <FrameComponent />
      </main>
      <div className={styles.welcomeChild} />
    </div>
  );
};

export default Welcome;
