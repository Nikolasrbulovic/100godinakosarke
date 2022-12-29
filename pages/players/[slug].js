import { createClient } from "contentful";
import AppHeader from "../../components/app-header/app-header";
import AppHeaderMobile from "../../components/app-header-mobile/app-header-mobile";
import HeaderBackButton from "../../components/header-back-button/header-back-button";
import PlayerMobile from "../../components/player-overview-mobile/player-overview-mobile";
import useWindowSize from "../../hooks/use-window-size";
import AppFooterMobile from "../../components/app-footer-mobile/app-footer-mobile";
import PlayerDesktop from "../../components/player-overview-desktop/player-overview-desktop";
import AppFooterDesktop from "../../components/app-footer-desktop/app-footer-desktop";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "igraci",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "igraci",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { player: items[0] },
    revalidate: 1,
  };
};

const Player = ({ player }) => {
  const size = useWindowSize();

  if (!player) return; //ovde moze shimer da ide ili neki loader
  if (size.width < 480) {
    return <PlayerMobile player={player} />;
  } else {
    return <PlayerDesktop player={player} />;
  }
};

Player.getLayout = (page) => {
  let windowSize = 1920;
  if (typeof window !== "undefined") {
    windowSize = window.innerWidth;
  }
  return (
    <>
      {windowSize < 480 ? (
        <AppHeaderMobile
          backButtonComponent={
            <HeaderBackButton buttonTitle="Lista igraca" href="/players" />
          }
        />
      ) : (
        <AppHeader
          backButtonComponent={
            <HeaderBackButton buttonTitle="Lista igraca" href="/players" />
          }
        />
      )}
      {page}
      {windowSize < 480 ? <AppFooterMobile /> : <AppFooterDesktop />}
    </>
  );
};

export default Player;
