import styles from "./app-header.module.scss";
import Link from "next/link";
import Logo from "../../images/Logo.svg";

const AppHeader = ({ backButtonComponent }) => {
  return (
    <div className={styles["app-header"]}>
      <div className={styles["container"]}>
        <div className={styles["header-left"]}>
          <div className={styles["navigation-left"]}>
            <Link href={"/"}> Početna stranica </Link>
            <Link href="/about"> O projektu </Link>
          </div>
          <div className="navigation-right">
            <hr className="line"></hr>
          </div>
          {backButtonComponent}
        </div>
        <div className={styles["header-center"]}>
          <div className={styles["logo"]}>
            <Logo></Logo>
          </div>
        </div>
        <div className={styles["header-right"]}>
          <div className={styles["navigation-right"]}>
            <Link href={"https://kss.rs/"}> Kosarkaski savez srbije </Link>
          </div>
          <div className={styles["navigation-right"]}>
            <hr className="line"></hr>
          </div>
          <div className={styles["navigation-right1"]}>
            <p>sva prava rezervisana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
