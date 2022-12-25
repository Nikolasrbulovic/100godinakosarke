import styles from './index.module.scss';
import usePlayerList from './use-player-list';
import PlayerListItem from './player-list-item';
import Image from 'next/image';
import SalePng from "../../public/sale1.png"
import PlayerSort from '../player-sort/player-sort';

const PlayerListFeature = ({players}) => {
  const playerList = usePlayerList();

  return (
    <div className={styles['player-list']}>
      <div className={styles['grid-container']}>
      {playerList?.map(({key, name}) => (
          <PlayerListItem key={key}  name={name}></PlayerListItem>
        ))}
      
      </div>
      <PlayerSort players={playerList} />
      
    </div>
  );
};

export default PlayerListFeature;
