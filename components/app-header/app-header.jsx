import useWindowSize from "../../hooks/use-window-size";
import AppHeaderDesktop from "../app-header-desktoop/app-header-desktop";
import AppHeaderMobile from "../app-header-mobile/app-header-mobile";

const AppHeader = ({ backButtonComponent }) => {
  const size = useWindowSize();
  if (size.width < 480) {
    return <AppHeaderMobile backButtonComponent={backButtonComponent} />;
  } else {
    return <AppHeaderDesktop backButtonComponent={backButtonComponent} />;
  }
};

export default AppHeader;