import AppHeader from "../../components/app-header/app-header";
import HeaderBackButton from "../../components/header-back-button/header-back-button";
import PlayerListFeature from "../../components/player-list/player-list";
import { createClient } from "contentful";
import PlayerSort from "../../components/player-sort/player-sort";
import { useState } from "react";

import styles from "../../styles/pages/players/index.module.scss";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "igraci" });

  return {
    props: {
      players: res.items,
    },
    revalidate: 1,
  };
}

const PlayerList = ({ players }) => {
  console.log("player :>> ", players);
  //rutiranje ide preko slug-a npr /players/aleksandar-sale-nacionale-djordjevic
  return (
    <div className={styles.container}>
      <PlayerListFeature players={players} />
    </div>
  );
};

PlayerList.getLayout = (page) => (
  <>
    <AppHeader
      backButtonComponent={
        <HeaderBackButton isLink={false} buttonTitle="Lista igrača" />
      }
    />
    {page}
  </>
);

export default PlayerList;
