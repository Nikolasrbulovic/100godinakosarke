import useWindowSize from "../../hooks/use-window-size"
import AppFooterDesktop from "../app-footer-desktop/app-footer-desktop";
import AppFooterMobile from "../app-footer-mobile/app-footer-mobile";

const AppFooter = () => {
    const size = useWindowSize();

    if (size.width < 480 ) {
        return <AppFooterMobile />
    }
    else {
        return <AppFooterDesktop />
    }
}

export default AppFooter;