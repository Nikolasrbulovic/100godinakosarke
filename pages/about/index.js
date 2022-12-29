import AppHeader from "../../components/app-header/app-header";
import HeaderBackButton from "../../components/header-back-button/header-back-button";
import AppFooterDesktop from "../../components/app-footer-desktop/app-footer-desktop";
import useWindowSize from "../../hooks/use-window-size";
import AppHeaderMobile from "../../components/app-header-mobile/app-header-mobile";
import AboutPageMobile from "../../components/about-page-mobile/about-page-mobile";
import AboutPageDesktop from "../../components/about-page-desktop/about-page-desktop";
import AppFooterMobile from "../../components/app-footer-mobile/app-footer-mobile";
import AppFooter from "../../components/app-footer/app-footer";
const AboutPage = () => {
  const size = useWindowSize();
  if (size.width < 480) {
    return <AboutPageMobile></AboutPageMobile>;
  } else {
    return <AboutPageDesktop></AboutPageDesktop>;
  }
};

AboutPage.getLayout = (page) => {
  return (
    <>
      <AppHeader
        backButtonComponent={
          <HeaderBackButton buttonTitle="Lista igraca" href="/players" />
        }
      />
      {page}
      <AppFooter />
    </>
  );
};

export default AboutPage;
