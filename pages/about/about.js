import { StyleRegistry } from "styled-jsx";
import AppHeader from "../../components/app-header/app-header";
import HeaderBackButton from "../../components/header-back-button/header-back-button";
import styles from "../../styles/pages/about/about.module.scss";
import Image from "next/image";
const AboutPage = () => (
  <div className={styles.main}>
    <div className={styles["project-info"]}>
      <div className={styles["content"]}>
        <div className={styles["left"]}>
          <div className={styles["title"]}>PROJEKAT 100 za 100</div>
          <div className={styles["description"]}>
            Projekat 100 za100 je inovativni virtuelni muzej-sajt posvećen
            najboljim košarkašima u istoriji srpske košarke u njenom prvom veku
            (1923-2023). Košarka se za prvih 100 godina u Srbiji uspostavila kao
            jedan od najvažnijih nacionalnih brendova, po kojem je prepoznata
            širom sveta. Imena ličnosti koje ovde predstavljamo najbolje
            objašnjavaju zašto je ovo Zemlja košarke, a njihove životne priče
            mogu da posluže kao motivacija i inspiracija i onima koji nisu
            privrženi ovom sportu.
          </div>
        </div>
        <div className={styles["video"]}>video</div>
      </div>
    </div>
    <div className={styles["text-container"]}>
      <div className={styles["photo"]}>
        <Image width={783} height={888} src="/about1.png" alt="about"></Image>
      </div>
      <div className={styles["text"]}>
        <div className={styles["title"]}>SFRJ, SRJ, SRBIJA</div>
        <div className={styles["description"]}>
          Srpski igrači, treneri i funkcioneri su svoje uspehe postizali u SFR
          Jugoslaviji, SR Jugoslaviji i Srbiji. Neki od tih uspeha su nedeljivi
          i pripadaju i onima s kojima su zajedno osvajali medalje dok je Srbija
          bila deo Jugoslavije. Ipak, ostaće zauvek zapisano da je Kalemegdan
          bio i srpski i jugoslovenski Springfild, iz kojeg je sve krenulo, od
          prašnjavih terena i pocepanih patika do zlatnih visina. Iz Srbije
          potiču osnivači jugoslovenske škole košarke – najčuvenije škole na
          svetu posle američke: Nebojša Popović, Borislav Stanković, Radomir
          Šaper, Aleksandar Nikolić i Ranko Žeravica. Oni su patentirali ovaj
          brend i otvorili vrata ostalima, a ta kolona velikana je prilično
          duga…
        </div>
      </div>
    </div>
    <div className={styles["video-container-body"]}>
      <div className={styles["text"]}>
        <div className={styles["title"]}>DIGITALNA PREZENTACIJA</div>
        <div className={styles["description"]}>
          Zašto je ovaj projekat drugačiji od svih koji se bave sportskim
          velikanima? Zato što prvi put - ne samo u Srbiji i regionu - već i u
          svetu (ako se izuzmu SAD) na jednom mestu može da se vidi ovakav
          prikaz sportskih legendi, gde je svaka od njih predstavljena
          biografijom, albumom fotografija, videom, najvažnijim citatima i
          brojevima vezanim za njihove karijere. Sve to u inovativnom dizajnu i
          konceptu, gde samim ulaskom na sajt može da se oseti „miris“ pobede.
        </div>
      </div>
      <div className={styles["video"]}>video</div>
    </div>
    <div className={styles["text-container"]}>
      <div className={styles["photo"]}>
        <Image width={783} height={888} src="/about2.png" alt="about"></Image>
      </div>
      <div className={styles["text"]}>
        <div className={styles["title"]}>ZEMLJA TERENA ZA BASKET</div>
        <div className={styles["description"]}>
          Pored reprezentacije, koja nekad ima veće-nekad manje uspehe, košarka
          u Srbiji je postala tako velika i zbog klupskih i individualnih
          rezultata njenih igrača i trenera (ubedljivo najuspešniji u Evroligi).
          Uostalom, nijedna zemlja mimo Amerike ne može da se pohvali ovakvim
          brojkama: 5 članova Naismith Hall of Fame, 15 članova FIBA Hall of
          Fame, 10 od 50 najzaslužnijih ličnosti u prvih pola veka Evrolige
          (Kupa šampiona)… Ta imena zaslužuju jedan ovakav virtuelni muzej.
        </div>
      </div>
    </div>
    <div className={styles["video-container-body"]}>
      <div className={styles["text"]}>
        <div className={styles["title"]}>NOVI POCETAK</div>
        <div className={styles["description"]}>
          Zašto je ovaj projekat drugačiji od svih koji se bave sportskim
          velikanima? Zato što prvi put - ne samo u Srbiji i regionu - već i u
          svetu (ako se izuzmu SAD) na jednom mestu može da se vidi ovakav
          prikaz sportskih legendi, gde je svaka od njih predstavljena
          biografijom, albumom fotografija, videom, najvažnijim citatima i
          brojevima vezanim za njihove karijere. Sve to u inovativnom dizajnu i
          konceptu, gde samim ulaskom na sajt može da se oseti „miris“ pobede.
        </div>
      </div>
      <div className={styles["video"]}>video</div>
    </div>
  </div>
);

AboutPage.getLayout = (page) => (
  <>
    <AppHeader
      backButtonComponent={
        <HeaderBackButton buttonTitle="Pocetna stranica" href="/" />
      }
    />
    {page}
  </>
);

export default AboutPage;