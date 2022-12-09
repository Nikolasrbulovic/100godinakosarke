// import Player from "../../components/player-list/player-list";

import { useRouter } from "next/router";

const Player = () => {
  const router = useRouter();

  return <div>Player id {router.query.id}</div>;
};

Player.getLayout = (page) => (
  <>
    <AppHeader
      backButtonComponent={
        <HeaderBackButton buttonTitle="Lista igraca" href="/players" />
      }
    />
    {page}
  </>
);

export default Player;
