import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next'
import HomeCpn from 'components/page/Home';
import { SEO } from 'components/SEO';

const Home = () => {
  return (
    <>
      <SEO title={'title test'} description={'description test'} url={'gooole.com'}></SEO>
      <main className="bg-white"><HomeCpn /></main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let _locale: string | undefined = locale || '';
  const temp = await serverSideTranslations(_locale, ['header', 'footer', 'home']);
  return {
    props: {
      ...temp
    }
  };
};

export default Home;
