import styles from "./index.module.scss";
import { useState } from "react";
import Basketball from "../../images/basketball.svg";
import Link from "next/link";

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
    <Link href="/players/aleksandar-sale-nacionale-djordjevic">
      <div
        className={styles["grid-item"]}
        key={props.id}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {isShown && (
          <div className={styles.icon}>
            <Basketball />
          </div>
        )}
        <div className={styles.name} style={textStyle}>
          {props.name}
        </div>
      </div>
    </Link>
  );
};
export default PlayerListItem;
