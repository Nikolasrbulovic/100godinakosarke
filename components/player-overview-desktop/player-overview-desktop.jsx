import Image from "next/image";
import Icon1 from "../../images/trophy.svg";
import useWindowSize from "../../hooks/use-window-size";
import PhoptoSlider from "../slider/photo-slider";
import styles from "./player-overview-desktop.module.scss"

const PlayerDesktop = ({ player }) => {
    const size = useWindowSize();
  
    if (!player) return; //ovde moze shimer da ide ili neki loader
   
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
                    <div className={styles["title"]}>ULOGA: </div>
                    <div className={styles["text"]}>{player.fields.uloga}</div>
                    </div>
                    <div className={styles["stats-content"]}>
                    <div className={styles["title"]}>VISINA: </div>
                    <div className={styles["text"]}>{player.fields.visina}</div>
                    </div>
                    <div className={styles["stats-content"]}>
                    <div className={styles["title"]}>POZICIJA/IGRAC </div>
                    <div className={styles["text"]}>{player.fields.pozicija}</div>
                    </div>
                </div>
            </div>
            <div className={styles["rewards-list"]}>
              {player.fields.awards.map((award) => (
                <div key={award.id} className={styles.reward}>
                  <div className={styles["icon"]}>
                    <Icon1 width={"1.5vw"} height={"2vh"} />
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
                {player.fields.infoText3.content.map((data) => (
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
              </div>
              <div className={styles["container"]}>
                {player.fields.infoText2.content.map((data) => (
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
                {player.fields.infoText4.content.map((data) => (
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
              </div>
            </div>
          </div>
        </div>
  
        <div className={styles["galery-container"]}>
          <div className={styles.title}>
            <h2>GALERIJA</h2>
          </div>  
          <PhoptoSlider player={player}></PhoptoSlider>
        </div>
      </div>
    );
  };

  export default PlayerDesktop;