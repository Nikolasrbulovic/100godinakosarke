import ArrowLeft from "../../images/arrow-left.svg";
import ArrowLeftGolden from "../../images/arrow-left-golden.svg";
import Link from "next/link";
import styles from "./header-back-button.module.scss";

const HeaderBackButton = ({ buttonTitle, href, golden = false }) => {
  return (
    <Link href={href}>
      <div className={styles["button"]}>
        <div className={styles["arrow"]}>{<ArrowLeft />}</div>
        <div className={styles["tittle"]}>{buttonTitle}</div>
      </div>
    </Link>
  );
};

export default HeaderBackButton;
