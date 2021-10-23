import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next'
import HomeCpn from 'components/page/Home';
import { SEO } from 'components/SEO';
import { useTranslation } from 'next-i18next';

const Home = () => {
  const {t} = useTranslation('football');
  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} url={t('seo.url')}></SEO>
      <main className="bg-white"><HomeCpn /></main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let _locale: string | undefined = locale || '';
  const temp = await serverSideTranslations(_locale, ['header', 'footer', 'football']);
  return {
    props: {
      ...temp
    }
  };
};

export default Home;
