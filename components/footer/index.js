import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Footer } from './styled';

const FooterComponent = () => {
  const { t } = useTranslation('footer');

  return (
    <>
      <Footer>
        <div className={`px-14 py-16 md:py-10 text-white`}>
          <div className="wrapper">
            <div className="navigations space-x-0 md:space-x-6 uppercase footer-text font-medium tracking-widest space-y-6 md:space-y-0">
              {/* <Link href="/press">
                <a>{t('press')}</a>
              </Link> */}
              <Link href="/contact-us">
                <a>{t('contact')}</a>
              </Link>
              <Link href="/term-conditions">
                <a>{t('t&c')}</a>
              </Link>
              <Link href="/privacy-policy">
                <a>{t('privacyPolicy')}</a>
              </Link>
              <Link href="/news">
                <a>{t('news')}</a>
              </Link>
              <Link href="/faqs">
                <a>{t('faqs')}</a>
              </Link>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComponent;
