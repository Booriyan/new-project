import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "./FrameComponent3";
import styles from "./Window1.module.css";

const Window1 = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/search-results");
  }, [navigate]);

  return (
    <section className={styles.window}>
      <h1 className={styles.listOfBlack}>List of Black T-shirt</h1>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <Button
              className={styles.frameChild}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#faf9f6",
                fontSize: "14",
                background: "#2c2c2c",
                borderRadius: "20px",
                "&:hover": { background: "#2c2c2c" },
                height: 40,
              }}
            >
              Recommended
            </Button>
            <Button
              className={styles.frameItem}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "rgba(250, 249, 246, 0.5)",
                fontSize: "14",
                background: "#2c2c2c",
                borderRadius: "20px",
                "&:hover": { background: "#2c2c2c" },
                width: 128,
                height: 40,
              }}
            >
              Lowest Price
            </Button>
            <Button
              className={styles.frameInner}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "rgba(250, 249, 246, 0.5)",
                fontSize: "14",
                background: "#2c2c2c",
                borderRadius: "20px",
                "&:hover": { background: "#2c2c2c" },
                width: 112,
                height: 40,
              }}
            >
              Top Rated
            </Button>
          </div>
          <form className={styles.display}>
            <div className={styles.rectangleParent}>
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-17@2x.png"
              />
              <Button
                className={styles.frameButton}
                endIcon={
                  <img width="43.3px" height="43.3px" src="/ellipse-8.png" />
                }
                disableElevation={true}
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.55))",
                  borderRadius:
                    "0px 0px 24.035680770874023px 24.035680770874023px",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.55))",
                  },
                  height: 97.09999999999992,
                }}
              />
              <div className={styles.interactiveStar}>
                <div className={styles.labelProductName}>
                  <button className={styles.priceTagParent}>
                    <div className={styles.priceTag}>
                      <div className={styles.buttonShopNow}>4.4</div>
                    </div>
                    <img
                      className={styles.icroundStarIcon}
                      alt=""
                      src="/icroundstar.svg"
                    />
                  </button>
                </div>
                <div className={styles.displayProductParent}>
                  <div className={styles.displayProduct}>
                    <div className={styles.jumpCuts}>{`Jump Cuts `}</div>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.menPrintedPolo}>
                      Men Printed Polo Neck Polyester Black T-Shirt
                    </div>
                    <div className={styles.frameDiv}>
                      <div className={styles.wrapper}>
                        <b className={styles.b}>₹349</b>
                      </div>
                      <Button
                        className={styles.priceTagCurrency}
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          color: "#fff",
                          fontSize: "13.5",
                          background: "rgba(250, 249, 246, 0.2)",
                          borderRadius: "19.228544235229492px",
                          "&:hover": { background: "rgba(250, 249, 246, 0.2)" },
                          width: 107.09999999999992,
                          height: 38.5,
                        }}
                      >
                        Shop now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.rectangleContainer}>
                <textarea
                  className={styles.rectangleTextarea}
                  rows={7}
                  cols={16}
                />
                <img
                  className={styles.frameChild1}
                  alt=""
                  src="/rectangle-17-1@2x.png"
                  onClick={onRectangleImageClick}
                />
                <img
                  className={styles.displayMenTShirt}
                  loading="lazy"
                  alt=""
                  src="/ellipse-8-1@2x.png"
                />
              </div>
              <div className={styles.priceTagSingleParent}>
                <div className={styles.priceTagSingle} />
                <div className={styles.buttonShop}>
                  <FrameComponent3
                    aVEJO="AVEJO "
                    menCheckeredRoundNeckCott="Men Checkered Round Neck Cotton Blend Black T-Shirt"
                  />
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent2}>
                  <div className={styles.container}>
                    <b className={styles.b1}>₹419</b>
                  </div>
                  <Button
                    className={styles.frameChild2}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "13.5",
                      background: "rgba(250, 249, 246, 0.2)",
                      borderRadius: "19.228544235229492px",
                      "&:hover": { background: "rgba(250, 249, 246, 0.2)" },
                      width: 107.09999999999992,
                      height: 38.5,
                    }}
                  >
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.iconStarContainerParent}>
              <div className={styles.iconStarContainer}>
                <div className={styles.iconStarContainerChild} />
                <textarea
                  className={styles.iconStarContainerItem}
                  rows={7}
                  cols={16}
                />
                <img
                  className={styles.mainContentArea}
                  alt=""
                  src="/main-content-area@2x.png"
                />
                <img
                  className={styles.buttonBuyNow}
                  loading="lazy"
                  alt=""
                  src="/ellipse-8-2@2x.png"
                />
              </div>
              <div className={styles.roundedCornersSet}>
                <FrameComponent3
                  aVEJO="EyeBogler  "
                  menCheckeredRoundNeckCott="Men Solid Round Neck Polyester Black T-Shirt"
                  propFlex="unset"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propMinWidth="55px"
                />
                <div className={styles.componentPriceTagParent}>
                  <div className={styles.componentPriceTag}>
                    <b className={styles.b2}>₹254</b>
                  </div>
                  <Button
                    className={styles.frameChild3}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "13.5",
                      background: "rgba(250, 249, 246, 0.2)",
                      borderRadius: "19.228544235229492px",
                      "&:hover": { background: "rgba(250, 249, 246, 0.2)" },
                      width: 107.09999999999992,
                      height: 38.5,
                    }}
                  >
                    Shop now
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.frameWrapper1}>
          <Button
            className={styles.frameChild4}
            startIcon={<img width="18px" height="19px" src="/frame.svg" />}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#f8f8f8",
              fontSize: "12",
              borderColor: "#3a3a3a",
              borderRadius: "8px",
              "&:hover": { borderColor: "#3a3a3a" },
              width: 232,
            }}
          >
            Shop more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Window1;
