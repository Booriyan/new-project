import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = () => {
  return (
    <div className={styles.instanceParent}>
      <footer className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.rectangleGroup}>
          <TextField
            className={styles.frameChild}
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#474347" },
              "& .MuiInputBase-root": { height: "58px", borderRadius: "54px" },
              width: "649px",
            }}
          />
          <Button
            className={styles.frame}
            startIcon={<img width="18px" height="19px" src="/frame.svg" />}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "14",
              background: "#fff",
              borderRadius: "31px",
              "&:hover": { background: "#fff" },
            }}
          >
            Shop
          </Button>
        </div>
        <img
          className={styles.instanceItem}
          loading="lazy"
          alt=""
          src="/group-48095861.svg"
        />
        <div className={styles.blackTShirtUnder300Wrapper}>
          <div className={styles.blackTShirt}>Black T shirt under 300</div>
        </div>
      </footer>
      <div className={styles.sidebarParent}>
        <div className={styles.sidebar} />
        <div className={styles.frameItem} />
      </div>
    </div>
  );
};

export default FrameComponent4;
