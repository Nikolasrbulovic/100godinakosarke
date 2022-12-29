import ArrowLeft from "../../images/arrow-left.svg";
import Link from "next/link";
import styles from "./header-back-button.module.scss";

const HeaderBackButton = ({ buttonTitle, href, isLink = true }) => {
  if (isLink) {
    return (
      <Link href={href}>
        <div className={styles["button"]}>
          <div className={styles["arrow"]}>
            <ArrowLeft />
          </div>
          <div className={styles["title"]}>{buttonTitle}</div>
        </div>
      </Link>
    );
  }

  return (
    <div className={styles["button"]}>
      <div className={styles["title"]}>{buttonTitle}</div>
    </div>
  );
};

export default HeaderBackButton;
