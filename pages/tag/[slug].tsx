import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SEO } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import TagPageCpn from 'components/page/tag'

const Tagpage = () => {
  const { t } = useTranslation('post');
  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} url={t('seo.url')}></SEO>
      <main className="">
        <TagPageCpn />
      </main>
    </>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const props = {
    ...(await serverSideTranslations(locale, ['header', 'footer', 'tag']))
  };
  return { props };
};

export default Tagpage;
