import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeCpn from 'components/page/Home'

const Home = () => {
  return (
    <>
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
