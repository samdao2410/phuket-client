import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SEO } from 'components/SEO';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import PostDetailPage from '../../components/page/post-detail';

const PostDetail = () => {
  const { t } = useTranslation('post');
  return (
    <>
      <SEO title={t('seo.title')} description={t('seo.description')} url={t('seo.url')}></SEO>
      <main className="">
        <PostDetailPage />
      </main>
    </>
  );
};

export const getServerSideProps = async ({ locale }) => {
  const props = {
    ...(await serverSideTranslations(locale, ['header', 'footer', 'post']))
  };
  return { props };
};

export default PostDetail;
