import React, { useState, useCallback } from "react";
import styles from "./player-sort.module.scss";

const PlayerSort = (props) => {
  const [sortByLetter, setSortByLetter] = useState("");

  const handleLetterClick = useCallback(
    (letter) => {
      if (letter === sortByLetter) {
        setSortByLetter("");
      } else {
        setSortByLetter(letter);
      }
    },
    [setSortByLetter, sortByLetter]
  );

  let players = props.players;

  // Sort players by letter
  if (sortByLetter) {
    players = players.filter((player) => player.name.startsWith(sortByLetter));
  }

  return (
    <div className={styles["letter-selection"]}>
      {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
        <button key={letter} onClick={() => handleLetterClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default PlayerSort;
