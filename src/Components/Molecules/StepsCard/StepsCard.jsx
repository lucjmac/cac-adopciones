import { useEffect, useState } from "react";
import styles from "./StepsCard.module.css";

const StepsCard = ({ detail, video }) => {
  const [iframeSource, setIframeSource] = useState("");

  useEffect(() => {
    if (!video) return;

    if (video.includes("youtube")) {
      setIframeSource(video.split("watch?v=").join("embed/"));
    }
  }, [video]);

  return (
    <div className={styles.stepCard}>
      <h3 className={styles.stepCardTitle}>Steps</h3>
      <p className={styles.stepCardSteps}>{detail}</p>

      <div className={styles.videoWrapper}>
        {video && <iframe height="360" width="360" src={iframeSource}></iframe>}
      </div>
    </div>
  );
};

export default StepsCard;
