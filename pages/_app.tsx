import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

import nextI18NextConfig from '../next-i18next.config.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'antd/dist/antd.css';
import '../styles/tailwindGlobal.css';

import PostStore from '../store/usePosts';
import Header from '../components/header';
import Footer from '../components/footer';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <PostStore>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </PostStore>
  );
};

export default appWithTranslation(App, nextI18NextConfig);
