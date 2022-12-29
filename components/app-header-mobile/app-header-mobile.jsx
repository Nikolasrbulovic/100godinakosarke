import styles from "./app-header-mobile.module.scss"
import Logo from "../../images/Logo.svg";
import Link from "next/link";
const AppHeaderMobile = ({ backButtonComponent }) => {
    return (
      <div className={styles["app-header"]}>
        <div className={styles["container"]}>
            <div className={styles["logo"]}>
                <Logo></Logo>
             </div>
            <div className={styles["navigation"]}>
                <div className={styles["navigation-left"]}>
                    <Link href={""}>Početna stranica</Link>
                </div>
                <div className={styles["navigation-right"]}>
                    <Link href={"/about"}>O projektu</Link>
                </div>
            </div>
        
        </div>
        <div className={styles["navigation-line"]}>
            <hr className="line"></hr>
        </div>
        {backButtonComponent}
      </div>
    );
  };
  
  export default AppHeaderMobile;