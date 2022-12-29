import Link from "next/link";
import styles from "./app-footer-mobile.module.scss"
const AppFooterMobile = () => {
    return (
      <div className={styles["app-footer"]}>
        <div className={styles["container-up"]}>
        <Link href={""}> Košarkaški savez Srbije </Link>
        <Link href={""}> Instagram </Link>
        <Link href={""}> Facebook </Link>
        </div>
        <div className={styles["navigation-line"]}>
        <hr className={styles["line"]}></hr>
        </div>
        <div className={styles["container-down"]}>
            <p>Sva prava rezervisana</p>
        </div>
      </div>
    );
  };
  
  export default AppFooterMobile;