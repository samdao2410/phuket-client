import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, []);
  return <h1>404 - {t('error-with-status', { statusCode: '404' })}</h1>;
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

export default Custom404;
