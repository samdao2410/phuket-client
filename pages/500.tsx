import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from 'next'

const Custom500 = () => {
  const { t } = useTranslation('common');
  // return <h1>500 - {t("error-with-status", { statusCode: "500" })}</h1>;
  return <div></div>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let _locale: string | undefined = locale || '';
  const temp = await serverSideTranslations(_locale, ['header', 'footer', 'common']);
  return {
    props: {
      ...temp
    }
  };
};

export default Custom500;
