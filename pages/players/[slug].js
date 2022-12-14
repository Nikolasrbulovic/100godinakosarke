import { useRouter } from "next/router";
import { createClient } from "contentful";
import AppHeader from "../../components/app-header/app-header";
import HeaderBackButton from "../../components/header-back-button/header-back-button";
import styles from "../../styles/pages/players/[slug]/[slug].module.scss";
import Image from "next/image";
import Icon1 from "../../images/trophy.svg";
import Icon2 from "../../images/medal.svg";
//import Player from "../../components/player-list/player-list";

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
  //if (!player) return; //ovde moze shimer da ide ili neki loader
  console.log("player :>> ", player);

  return (
    <div className={styles.player}>
      <div className={styles.main}>
        <div className={styles["basic-info"]}>
          <h3 className={styles["full-name"]}>Aleksandar DJORDJEVIC</h3>
          <div className={styles["info"]}>
            <div className={styles.photo}>
              <Image
                width={600}
                height={600}
                src="/sale-nacionale.png"
                alt="Sale"
              ></Image>
            </div>
            <h1 className={styles["first-name"]}>
              ALEKSANDAR
              <span className={styles.nickname}> - SALE NACIONALE</span>
            </h1>
            <h1 className={styles["last-name"]}>ĐORĐEVIĆ</h1>
            <p className={styles["stats"]}>stats</p>
          </div>
          <div className={styles["rewards-list"]}>
            <div className={styles.reward}>
              <div className={styles["reward-golden"]}>
                <div className={styles["icon"]}>
                  <Icon1></Icon1>
                </div>
                <div className={styles["number"]}>2x</div>
                <div className={styles["text"]}>
                  Igrač godine u Evropi (1994, 1995)
                </div>
              </div>
            </div>
            <div className={styles.reward}>
              <div>
                <div className={styles["icon"]}>
                  <Icon2></Icon2>
                </div>
                <div className={styles["number"]}>1x</div>
                <div className={styles["text"]}>Najbolji igrač EP (1997)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["achievement-list"]}>
        <div className={styles["achievement-item"]}>
          <p className={styles.text}>
            Jedina ličnost u istoriji košarke – finalista svih Velikih
            takmičenja i kao igrač i kao trener
          </p>
          <p className={styles.number}>1</p>
        </div>
        <div className={styles["achievement-item"]}>
          <p className={styles.text}>
            Jedna od 50 najzaslužnijih ličnosti u prvih 50 godina Evrolige
            (1958-2008)
          </p>
          <p className={styles.number}>1</p>
        </div>
        <div className={styles["achievement-item"]}>
          <p className={styles.text}>
            Meča u reprezentaciji Jugoslavije (89 pobeda-15 poraza)
          </p>
          <p className={styles.number}>1</p>
        </div>
        <div className={styles["achievement-item"]}>
          <p className={styles.text}>Poena za reprezentaciju:</p>
          <p className={styles.number}>937</p>
        </div>
      </div>
      <div className={styles["trainer-quote"]}>
        <div className={styles["trainer-photo"]}>
          <Image width={274} height={274} src="/121.png" alt="Sale"></Image>
        </div>
        <div className={styles["quote-text"]}>
          <p>
            „BILO JE ZADOVOLJSTVO GLEDATI GA, JER ON JE OLIČENJE OVE IGRE, JEDAN
            OD NAJBOLJIH EVROPSKIH PLEJMEJKERA SVIH VREMENA. ON IMA KOŠARKAŠKI
            GEN U SEBI, ON VIDI DRUGAČIJE STVARI OD OSTALIH. NJEGOVA MISIJA NA
            TERENU JE – POBEDA! I PREMA TOME SE PONAŠA ILI KAO ORGANIZATOR IGRE
            ILI KAO UBOJIT STRELAC“.
          </p>
        </div>
        <div className={styles["trainer-name"]}>
          <p>Dan Peterson, trener</p>
        </div>
      </div>
      <div className={styles["player-video"]}>
        <Image width={1920} height={857} src="/sale4.png" alt="jokic"></Image>
      </div>
      <div className={styles["player-description"]}>
        <div className={styles["player-info"]}>
          <div className={styles["title"]}>
            KOŠARKAŠKI UMETNIK I KILLER U JEDNOM
          </div>
          <div className={styles["text"]}>
            Aleksandar Đorđević je jedinstvena ličnost u istoriji košarke: niko
            osim njega nije učestvovao u finalima sva tri najveća međunarodna
            takmičenja (svetska i evropska prvenstva, olimpijske igre) i kao
            igrač i kao trener. Rođeni pobednik - tako su ga opisivali mnogi
            hroničari košarke i kolumnisti, veličajući njegovu harizmu, hrabrost
            i sve ostale vrline velikog vođe na terenu. Majstor suptilne
            komunikacije, vrhunski profesor motivacije, zakleti protivnik
            alibija! Tako ga opisuju danas, kada kao trener nastavlja svoj
            košarkaši put. Ostao je upamćen kao jedan od najboljih evropskih
            plejmejkera svih vremena, savršene tehnike, besprekornog šuta i
            neverovatnog osećaja za igru, tako da je u svakom timu bio
            „produžena ruka trenera“.
          </div>
        </div>
        <div className={styles["image"]}>
          <Image width={960} height={727} src="/sale1.png" alt="sale"></Image>
        </div>
      </div>
      <div className={styles["player-carier"]}>
        <div className={styles["image"]}>
          <Image width={506} height={838} src="/sale2.png" alt="jokic"></Image>
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["container-up"]}>
            <div className={styles["container"]}>
              <div className={styles["title"]}>KARIJERA / IGRAČ:</div>
              <div className={styles["text"]}>PARTIZAN (1982-1992)</div>
              <div className={styles["text"]}>FILIPS MILANO (1992-1994)</div>
              <div className={styles["text"]}>PORTLAND TRAILBLAZERS (1996)</div>
              <div className={styles["text"]}>REAL MADRID (1999-2002)</div>
              <div className={styles["text"]}>KAVOLINI PEZARO (2002-2005)</div>
              <div className={styles["text"]}>ARMANI MILANO (2005)</div>
              <div className={styles["text"]}>
                REPREZENTACIJA JUGOSLAVIJA (1987-1998)
              </div>
            </div>
            <div className={styles["container"]}>
              <div className={styles["title"]}>NAJVECI USPESI / IGRAČ:</div>
              <div className={styles["text"]}>KUP ŠAMPIONA 1992</div>
              <div className={styles["text"]}>
                KUP RADIVOJA KORAĆA 1989, 1993, 1999
              </div>
              <div className={styles["text"]}>
                PRVENSTVO JUGOSLAVIJE 1987, 1992
              </div>
              <div className={styles["text"]}>
                PRVENSTVO ŠPANIJE 1997, 1999, 2000
              </div>
              <div className={styles["text"]}>KUP JUGOSLAVIJE 1989, 1992</div>
              <div className={styles["text"]}>
                EVROPSKO PRVENSTVO – ZLATNO 1991, 1995
              </div>
              <div className={styles["text"]}>
                EVROPSKO PRVENSTVO – BRONZA 1987
              </div>
              <div className={styles["text"]}>
                SVETSKO PRVENSTVO – ZLATNA 1998
              </div>
              <div className={styles["text"]}>
                OLIMPIJSKE IGRE – SREBRNA 1996
              </div>
            </div>
          </div>
          <div className={styles["container-up"]}>
            <div className={styles["container"]}>
              <div className={styles["title"]}>KARIJERA / TRENER:</div>
              <div className={styles["text"]}>ARMANI MILANO (2006/2007)</div>
              <div className={styles["text"]}>
                REPREZENTACIJA SRBIJE (2013-19)
              </div>
              <div className={styles["text"]}>PANATINAIKOS (2015/16)</div>
              <div className={styles["text"]}>BENETON TREVIZO (2011/12)</div>
              <div className={styles["text"]}>BAJERN MINHEN (2016-18)</div>
              <div className={styles["text"]}>VIRTUS BOLONJA (2019-21)</div>
              <div className={styles["text"]}>FENERBAHČE ISTANBUL (2021-…)</div>
            </div>
            <div className={styles["container"]}>
              <div className={styles["title"]}>NAJVECI USPESI / TRENER:</div>
              <div className={styles["text"]}>
                EVROPSKA PRVENSTVA – SREBRO 2017
              </div>
              <div className={styles["text"]}>
                SVETSKA PRVENSTVA – SREBRO 2014
              </div>
              <div className={styles["text"]}>
                SVETSKA PRVENSTVA – SREBRO 2014
              </div>
              <div className={styles["text"]}>FIBA KUP ŠAMPIONA 2019</div>
              <div className={styles["text"]}>KUP GRČKE 2016</div>
              <div className={styles["text"]}>KUP NEMAČKE 2018</div>
              <div className={styles["text"]}>PRVENSTVO ITALIJE 2021</div>
              <div className={styles["text"]}>PARTIZAN (1982-1992)</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["galery-container"]}>
        <div className={styles.title}>
          <h2>GALERIJA</h2>
        </div>
        <div className={styles["galery-photos"]}>
          <div className={styles["photo"]}>
            <Image
              width={542}
              height={542}
              src="/jokic3.png"
              alt="jokic"
            ></Image>
          </div>
          <div className={styles["photo"]}>
            {" "}
            <Image
              width={542}
              height={542}
              src="/jokic2.png"
              alt="jokic"
            ></Image>
          </div>
          <div className={styles["photo"]}>
            <Image
              width={542}
              height={542}
              src="/jokic.png"
              alt="jokic"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
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
