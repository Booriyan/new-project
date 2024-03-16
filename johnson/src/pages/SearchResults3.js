import { Button } from "@mui/material";
import FrameComponent4 from "../components/FrameComponent4";
import Copilot from "../components/Copilot";
import styles from "./SearchResults3.module.css";

const SearchResults3 = () => {
  return (
    <div className={styles.searchResults}>
      <img
        className={styles.sidebarIcon}
        loading="lazy"
        alt=""
        src="/sidebar4@2x.png"
      />
      <section className={styles.windowWrapper}>
        <div className={styles.window}>
          <div className={styles.windowInner}>
            <div className={styles.menCheckeredRoundNeckCottoParent}>
              <h1 className={styles.menCheckeredRound}>
                Men Checkered Round Neck Cotton Blend Black T-Shirt
              </h1>
              <div className={styles.frameParent}>
                <div className={styles.boldElectronicDevicesSmarParent}>
                  <img
                    className={styles.boldElectronicDevicesSmar}
                    loading="lazy"
                    alt=""
                    src="/rectangle-17@2x.png"
                  />
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-36@2x.png"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/rectangle-18@2x.png"
                  />
                </div>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-36-1@2x.png"
                />
              </div>
            </div>
          </div>
          <FrameComponent4 />
        </div>
      </section>
      <div className={styles.searchResultsInner}>
        <div className={styles.copilotParent}>
          <Copilot />
          <Button
            className={styles.instanceChild}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#141414",
              fontSize: "16",
              background: "#fff",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#fff" },
              width: 304,
              height: 60,
            }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchResults3;
