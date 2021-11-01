import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next'
import { SEO } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import FootBallPage from '../../components/page/football';

const Home = () => {
  const { t } = useTranslation('football');
  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} url={t('seo.url')}></SEO>
      <main className="w-full">
        <FootBallPage />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let _locale: string | undefined = locale || '';
  const temp = await serverSideTranslations(_locale, ['common','header', 'footer', 'football']);
  return {
    props: {
      ...temp
    }
  };
};

export default Home;
