import styles from "./index.module.scss";
import { useState } from "react";
import Basketball from "../../images/basketball.svg";

const PlayerListItem = (props) => {
  const [isShown, setIsShown] = useState(false);
  const handleMouseOver = () => {
    setIsShown(true);
  };
  const handleMouseOut = () => {
    setIsShown(false);
  };
  const textStyle = {
    color: isShown ? "#CBA46D" : "white",
  };
  return (
    <div
      className={styles["grid-item"]}
      style={textStyle}
      key={props.id}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isShown && (
        <div className={styles.icon}>
          <Basketball />
        </div>
      )}
      <div className={styles.name}>{props.name}</div>
    </div>
  );
};
export default PlayerListItem;
