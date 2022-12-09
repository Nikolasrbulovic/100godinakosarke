import ArrowLeft from "../../images/arrow-left.svg";
import Link from "next/link";
import styles from "./header-back-button.module.scss";

const HeaderBackButton = ({ buttonTitle, href }) => (
  <Link href={href}>
    <div className={styles["button"]}>
      <div className={styles["arrow"]}>
        <ArrowLeft></ArrowLeft>
      </div>
      <div className={styles["tittle"]}>
        <p>{buttonTitle}</p>
      </div>
    </div>
  </Link>
);

export default HeaderBackButton;
