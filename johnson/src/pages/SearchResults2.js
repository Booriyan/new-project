import { Button } from "@mui/material";
import styles from "./SearchResults2.module.css";

const SearchResults2 = () => {
  return (
    <div className={styles.searchResults}>
      <img
        className={styles.sidebarIcon}
        loading="lazy"
        alt=""
        src="/sidebar3@2x.png"
      />
      <main className={styles.window}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-48095773.svg"
          />
          <div className={styles.makingExperience}>
            <div className={styles.makingAnExperience}>
              Making an experience for you!
            </div>
          </div>
        </div>
        <footer className={styles.childContainerWrapper}>
          <div className={styles.childContainer}>
            <div className={styles.childContainerChild} />
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.subFeatureSet}>
                <div className={styles.subFeatureSetChild} />
                <div className={styles.blackTshirt}>
                  <div className={styles.frameGroup}>
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/group-48095861.svg"
                    />
                    <div className={styles.blackTShirtUnder300Wrapper}>
                      <div className={styles.blackTShirt}>
                        Black T shirt under 300
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className={styles.column}
                  startIcon={
                    <img width="18px" height="19px" src="/frame.svg" />
                  }
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "14",
                    background: "#fff",
                    borderRadius: "31px",
                    "&:hover": { background: "#fff" },
                    width: 102,
                    height: 38,
                  }}
                >
                  Shop
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default SearchResults2;
