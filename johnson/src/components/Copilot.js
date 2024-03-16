import styles from "./Copilot.module.css";

const Copilot = () => {
  return (
    <div className={styles.copilot}>
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>
              <img
                className={styles.image26Icon}
                loading="lazy"
                alt=""
                src="/image-26@2x.png"
              />
            </div>
          </div>
          <div className={styles.title}>
            <div className={styles.houseOfModels}>House of Models</div>
            <div className={styles.withParent}>
              <div className={styles.with}>with</div>
              <img className={styles.bingIcon} alt="" src="/bing.svg" />
              <div className={styles.bingChat}>Bing Chat</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.segmentedControlWrapper}>
          <div className={styles.segmentedControl}>
            <button className={styles.button1}>
              <div className={styles.label}>Overview</div>
            </button>
            <div className={styles.separatorWrapper}>
              <div className={styles.separator} />
            </div>
            <div className={styles.button2}>
              <div className={styles.label1}>Specifications</div>
            </div>
            <div className={styles.separatorParent}>
              <div className={styles.separator1} />
              <div className={styles.button3}>
                <div className={styles.label2}>Reviews</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.productDescriptionParent}>
              <h3 className={styles.productDescription}>Product Description</h3>
              <div className={styles.teesCollectionSpecialize}>
                Tees Collection specialize in making men's clothes with
                characteristics of fashionable,comfortable and elegant. To show
                a kind of fashionable and special dressing style, appear the
                person's vigorous and vitality personality, and express his
                active and optimistic attitude of life. Wear our professional
                design high quality men's shirts, you will become more elegant
                and fascinating. Our designers are attention to every detail of
                the design and pursue exquisite sewing process.
              </div>
            </div>
          </div>
          <div className={styles.scorl}>
            <div className={styles.horizontalSeparator} />
            <div className={styles.copilotHeader} />
          </div>
        </div>
      </div>
      <img className={styles.copilotChild} alt="" src="/group-48095821.svg" />
    </div>
  );
};

export default Copilot;
