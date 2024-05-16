import Banner from "~/components/banner";
import BannerTwo from "~/components/banner-two";
import HomeForm from "~/components/form";
import { Header } from "~/components/header";
import { HeaderTwo } from "~/components/header-two";

const homePage = () => {
  return (
    <>
      <Banner />
      <BannerTwo />
      <HomeForm />
      <Header />
      <HeaderTwo />
    </>
  );
};

export default homePage;
