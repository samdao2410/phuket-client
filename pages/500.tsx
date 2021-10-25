import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Custom500 = () => {
  const { t } = useTranslation('common');
  // return <h1>500 - {t("error-with-status", { statusCode: "500" })}</h1>;
  return <div></div>;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "header", "footer"])),
  },
});

export default Custom500;
