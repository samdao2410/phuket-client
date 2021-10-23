import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SEO } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import FootBallPage from '../../components/page/football';

const TypeFootBall = () => {
  const { t } = useTranslation('football');
  const router = useRouter();
  const { type } = router.query;
  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} url={t('seo.url')}></SEO>
      <main className="">
        <FootBallPage typePage={type || ''} />
      </main>
    </>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const props = {
    ...(await serverSideTranslations(locale, ['header', 'footer', 'football']))
  };
  return { props };
};

export default TypeFootBall;
