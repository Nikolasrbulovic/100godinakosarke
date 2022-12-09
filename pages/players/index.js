import AppHeader from '../../components/app-header/app-header';
import HeaderBackButton from '../../components/header-back-button/header-back-button';
import PlayerListFeature from '../../components/player-list/player-list';
import { createClient } from 'contentful';

import styles from './index.module.scss';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'igraci' });

  return {
    props: {
      players: res.items,
    },
    revalidate: 1,
  };
}

const PlayerList = ({ players }) => {
  console.log('players :>> ', players);
  return (
    <div className={styles.container}>
      <PlayerListFeature />
    </div>
  );
};

PlayerList.getLayout = page => (
  <>
    <AppHeader backButtonComponent={<HeaderBackButton buttonTitle="Pocetna stranica" href="/" />} />
    {page}
  </>
);

export default PlayerList;
