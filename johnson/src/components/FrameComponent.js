import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <footer className={styles.windowInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.instanceChild} />
        <div className={styles.rectangleGroup}>
          <TextField
            className={styles.frameChild}
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#474347" },
              "& .MuiInputBase-root": { height: "58px", borderRadius: "54px" },
              width: "981px",
            }}
          />
          <Button
            className={styles.frame}
            startIcon={<img width="18px" height="19px" src="/frame-2.svg" />}
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
        <div className={styles.askMeAnythingWrapper}>
          <div className={styles.askMeAnything}>Ask me anything...</div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
