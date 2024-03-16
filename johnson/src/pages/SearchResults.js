import { Button } from "@mui/material";
import Window1 from "../components/Window1";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
  return (
    <div className={styles.searchResults}>
      <img
        className={styles.sidebarIcon}
        loading="lazy"
        alt=""
        src="/sidebar1@2x.png"
      />
      <header className={styles.window}>
        <Window1 />
        <footer className={styles.windowInner}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent}>
                    <img
                      className={styles.groupIcon}
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
                  className={styles.frame}
                  startIcon={
                    <img width="18px" height="19px" src="/frame-1.svg" />
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
                  }}
                >
                  Shop
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </header>
    </div>
  );
};

export default SearchResults;
