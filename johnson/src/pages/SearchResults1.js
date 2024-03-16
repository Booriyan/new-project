import { Button } from "@mui/material";
import styles from "./SearchResults1.module.css";

const SearchResults1 = () => {
  return (
    <div className={styles.searchResults}>
      <img
        className={styles.sidebarIcon}
        loading="lazy"
        alt=""
        src="/sidebar2@2x.png"
      />
      <main className={styles.window}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-48095774.svg"
            />
            <div className={styles.shoppingAcrossWebWrapper}>
              <div className={styles.shoppingAcrossWeb}>
                Shopping across web
              </div>
            </div>
          </div>
          <div className={styles.flipkartcomMeeshocomMensxpWrapper}>
            <div className={styles.flipkartcomMeeshocomMensxpContainer}>
              <p className={styles.flipkartcom}>flipkart.com</p>
              <p className={styles.meeshocom}>meesho.com</p>
              <p className={styles.mensxpcom}>mensxp.com</p>
              <p className={styles.amazoncom}>amazon.com</p>
              <p className={styles.ajiocom}>ajio.com</p>
              <p className={styles.nikeae}>nike.ae</p>
            </div>
          </div>
        </div>
        <footer className={styles.windowInner}>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.rectangleParent}>
              <div className={styles.frameInner} />
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.frameWrapper}>
                  <div className={styles.frameContainer}>
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

export default SearchResults1;
