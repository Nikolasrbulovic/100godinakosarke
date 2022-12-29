import React, { useState, useCallback } from "react";
import styles from "./player-sort.module.scss";
import usePlayerList from "../player-list/use-player-list";
const PlayerSort = ({ setSortByLetter, sortByLetter }) => {
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
