import styles from "./index.module.scss";
import { useCallback, useState } from "react";
import Basketball from "../../images/basketball.svg";
import Link from "next/link";

const PlayerListItem = (props) => {
  const [isPlayerHovered, setIsPlayerHovered] = useState(false);
  const handleMouseOver = useCallback(() => {
    setIsPlayerHovered(true);
  }, []);
  const handleMouseOut = useCallback(() => {
    setIsPlayerHovered(false);
  }, []);
  const textStyle = {
    color: isPlayerHovered ? "#CBA46D" : "white",
  };

  return (
    
      <div
        className={styles["grid-item"]}
        key={props.id}
      >
        {isPlayerHovered && (
          <div className={styles.icon}>
            <Basketball />
          </div>
        )}
        <Link href="/players/aleksandar-djordjevic">
        <div className={styles.name} style={textStyle} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        > 
          {props.name}
        </div>
        </Link>
      </div>
  );
};
export default PlayerListItem;
