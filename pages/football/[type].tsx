import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SEO } from 'components/SEO';
import { useTranslation } from 'next-i18next';

const ConfirmationPage = () => {
  const { t } = useTranslation('football');
  const router = useRouter();
  const { type } = router.query;


  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} url={t('seo.url')}></SEO>
      <div className="bg-brown-400 h-screen flex justify-center items-center">
        <h1 className="mt-6 text-4.75xl font-normal text-brown-200 font-cormorant uppercase text-center">{t('most_view')}</h1>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const props = {
    ...(await serverSideTranslations(locale, ['header', 'footer', 'football']))
  };
  return { props };
};

export default ConfirmationPage;
