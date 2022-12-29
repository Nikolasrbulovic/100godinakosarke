import styles from './index.module.scss';
import usePlayerList from './use-player-list';
import PlayerListItem from './player-list-item';
import Image from 'next/image';
import SalePng from "../../public/sale1.png"
import PlayerSort from '../player-sort/player-sort';
import { useMemo } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

const PlayerListFeature = ({players}) => {
  const [sortByLetter, setSortByLetter] = useState("");
  const playerList = usePlayerList();
  
  const filteredPlayerList = useMemo(() => sortByLetter ? playerList.filter(player => player.name.startsWith(sortByLetter)): playerList, [sortByLetter])
  filteredPlayerList.splice(6, 0, '', '', '', '','');
  return (
    <div className={styles['player-list']}>
      <div className={styles['grid-container']}>
      {filteredPlayerList.map(({key, name}) => (
          <PlayerListItem key={key}  name={name}></PlayerListItem>
        ))}
      </div>
      <PlayerSort players={playerList} setSortByLetter={setSortByLetter} sortByLetter={sortByLetter} />
      <div className={styles["hover-photo"]}>
        <img src={"/korac.png"}></img>
      </div>
    </div>
  );
};

export default PlayerListFeature;
