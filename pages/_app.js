import { appWithTranslation } from 'next-i18next';

import nextI18NextConfig from '../next-i18next.config.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'antd/dist/antd.css';
import '../styles/tailwindGlobal.css';

import Header from '../components/header';
import Footer from '../components/footer';


const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
