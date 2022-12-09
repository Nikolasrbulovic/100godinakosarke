import { useRouter } from 'next/router';
import { createClient } from 'contentful';
import AppHeader from '../../components/app-header/app-header';
import HeaderBackButton from '../../components/header-back-button/header-back-button';

// import Player from "../../components/player-list/player-list";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'igraci',
  });

  const paths = res.items.map(item => {
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
    content_type: 'igraci',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
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
  if (!player) return; //ovde moze shimer da ide ili neki loader
  console.log('player :>> ', player);

  return <div>{player.fields.nickname}</div>;
};

Player.getLayout = page => (
  <>
    <AppHeader backButtonComponent={<HeaderBackButton buttonTitle="Lista igraca" href="/players" />} />
    {page}
  </>
);

export default Player;
