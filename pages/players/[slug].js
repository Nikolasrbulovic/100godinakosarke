import { createClient } from "contentful";
import AppHeader from "../../components/app-header/app-header";
import HeaderBackButton from "../../components/header-back-button/header-back-button";
import styles from "../../styles/pages/players/[slug]/[slug].module.scss";
import Image from "next/image";
import Icon1 from "../../images/trophy.svg";
// import Icon2 from "../../images/medal.svg";
import useWindowSize from "../../hooks/use-window-size";

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
  console.log("player :>> ", player);
  return (
    <div className={styles.player}>
      <div className={styles.main}>
        <div className={styles["basic-info"]}>
          <h3 className={styles["full-name"]}>
            <span>{player.fields.name.toLowerCase()}</span>{" "}
            {player.fields.lastname}
          </h3>
          <div className={styles["info"]}>
            <img
              className={styles.photo}
              src={`https:${player.fields.playersImage.fields.file.url}`}
            ></img>
            <h1 className={styles["first-name"]}>
              {player.fields.name}
              <span className={styles.nickname}>
                {" "}
                - {player.fields.nickname}
              </span>
            </h1>
            <h1 className={styles["last-name"]}>{player.fields.lastname}</h1>
            <div className={styles["stats"]}>
              <div className={styles["stats-content"]}>
                <div className={styles["title"]}>ROĐEN: </div>
                <div className={styles["text"]}>
                  26. AVGUSTA 1967. U BEOGRADU
                </div>
              </div>
              <div className={styles["stats-content"]}>
                <div className={styles["title"]}>ULOGA: </div>
                <div className={styles["text"]}>IGRAC/TRENER</div>
              </div>
              <div className={styles["stats-content"]}>
                <div className={styles["title"]}>VISINA: </div>
                <div className={styles["text"]}>188cm</div>
              </div>
              <div className={styles["stats-content"]}>
                <div className={styles["title"]}>POZICIJA/IGRAC </div>
                <div className={styles["text"]}>PLEJMEJKER</div>
              </div>
            </div>
          </div>
          <div className={styles["rewards-list"]}>
            {player.fields.awards.map((award) => (
              <div key={award.id} className={styles.reward}>
                <div className={styles["icon"]}>
                  <Icon1 />
                </div>
                <div className={styles["number"]}>{award.key}</div>
                <div className={styles["text"]}>{award.value}</div>
              </div>
            ))}
            <div className={styles["arrow-down"]}>
              <Image
                width={10}
                height={143}
                src="/Arrow-Down.png"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["achievement-list"]}>
        {player.fields.statistics.map((statistic) => (
          <div key={statistic.key} className={styles["achievement-item"]}>
            <p className={styles.text}>{statistic.key}</p>
            <p className={styles.number}>{statistic.value}</p>
          </div>
        ))}
      </div>
      <div className={styles["trainer-quote"]}>
        <div className={styles["trainer-photo"]}>
          <Image
            width={274}
            height={274}
            src={`https:${player.fields.testimonialImage.fields.file.url}`}
            alt="Sale"
          />
        </div>
        <div className={styles["quote-text"]}>
          <p>{player.fields.testimonialText}</p>
        </div>
        <div className={styles["trainer-name"]}>
          <p>{player.fields.testimonialName}</p>
        </div>
      </div>
      <div className={styles["player-video"]}>
        <Image
          width={size.width - 15}
          height={size.width / 2.24}
          src="/sale4.png"
          alt="jokic"
        />
      </div>
      <div className={styles["player-description"]}>
        <div className={styles["player-info"]}>
          <div>
            {player.fields.descriptionText.content.map((data) => (
              <div key="key">
                {data.nodeType === "heading-1" ? (
                  <>
                    {data.content.map((details) => (
                      <h1 className={styles["title"]} key="key">
                        {details.value}
                      </h1>
                    ))}
                  </>
                ) : (
                  <>
                    {data.content.map((details) => (
                      <p key="key" className={styles["text"]}>
                        {details.value}
                      </p>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles["image"]}>
          <Image
            width={Math.round(
              player.fields.descriptionImage.fields.file.details.image.width *
                (size.width / 1920)
            )}
            height={Math.round(
              player.fields.descriptionImage.fields.file.details.image.height *
                (size.width / 1920)
            )}
            src={`https:${player.fields.descriptionImage.fields.file.url}`}
            alt="sale"
          />
        </div>
      </div>
      <div className={styles["player-carier"]}>
        <div className={styles["image"]}>
          <Image
            width={Math.round(
              player.fields.infoImage.fields.file.details.image.width *
                (size.width / 1920)
            )}
            height={Math.round(
              player.fields.infoImage.fields.file.details.image.height *
                (size.width / 1900)
            )}
            src={`https:${player.fields.infoImage.fields.file.url}`}
            alt="jokic"
          />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["container-up"]}>
            <div className={styles["container"]}>
              {player.fields.infoText.content.map((data) => (
                <>
                  {data.content.map((detail) => (
                    <>
                      {data.nodeType === "heading-4" ? (
                        <h4 className={styles["title"]}>{detail.value}</h4>
                      ) : (
                        <p className={styles["text"]}>{detail.value}</p>
                      )}
                    </>
                  ))}
                </>
              ))}
              {/* <div className={styles["title"]}>KARIJERA / IGRAČ:</div>
              <div className={styles["text"]}>PARTIZAN (1982-1992)</div>
              <div className={styles["text"]}>FILIPS MILANO (1992-1994)</div>
              <div className={styles["text"]}>PORTLAND TRAILBLAZERS (1996)</div>
              <div className={styles["text"]}>REAL MADRID (1999-2002)</div>
              <div className={styles["text"]}>KAVOLINI PEZARO (2002-2005)</div>
              <div className={styles["text"]}>ARMANI MILANO (2005)</div>
              <div className={styles["text"]}>
                REPREZENTACIJA JUGOSLAVIJA (1987-1998)
              </div> */}
            </div>
            {/* <div className={styles["container"]}>
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
            </div> */}
          </div>
          {/* <div className={styles["container-up"]}>
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
          </div> */}
        </div>
      </div>

      <div className={styles["galery-container"]}>
        <div className={styles.title}>
          <h2>GALERIJA</h2>
        </div>
        <div className={styles["galery-photos"]}>
          <img className={styles["photo"]} src="/jokic3.png" alt="jokic" />
          <img className={styles["photo"]} src="/jokic2.png" alt="jokic" />
          <img className={styles["photo"]} src="/jokic.png" alt="jokic" />
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
