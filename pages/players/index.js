import AppHeader from "../../components/app-header/app-header";
import HeaderBackButton from "../../components/header-back-button/header-back-button";
import PlayerListFeature from "../../components/player-list/player-list";
import styles from "./index.module.scss";

const PlayerList = () => (
  <div className={styles.container}>
    <PlayerListFeature />
  </div>
);

PlayerList.getLayout = (page) => (
  <>
    <AppHeader
      backButtonComponent={
        <HeaderBackButton buttonTitle="Pocetna stranica" href="/" />
      }
    />
    {page}
  </>
);

export default PlayerList;
