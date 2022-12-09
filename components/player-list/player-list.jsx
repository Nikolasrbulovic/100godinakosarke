import styles from './index.module.scss';
import usePlayerList from './use-player-list';
import PlayerListItem from './player-list-item';

const PlayerListFeature = () => {
  const playerList = usePlayerList();

  return (
      <div className={styles["player-list"]}>
        <div className={styles["grid-container"]}>
          {playerList.map(({name, id}) =><PlayerListItem id={id} name={name}></PlayerListItem>)}
        </div>
      </div>
  );
};

export default PlayerListFeature;
