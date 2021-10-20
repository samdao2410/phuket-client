import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeCpn from 'components/page/Home';
import { SEO } from 'components/SEO';

const Home = () => {
  return (
    <>
      <SEO title={'title test'} description={'description test'} url={'gooole.com'}></SEO>
      <main className="bg-white"><HomeCpn/></main>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const temp = await serverSideTranslations(locale, ['header', 'footer', 'home']);
  return {
    props: {
      ...temp
    }
  };
};

export default Home;
