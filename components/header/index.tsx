import React from 'react';
import { Header } from './styled';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Dropdown, Menu, Affix } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ActiveLink from 'components/common/ActiveLink';


const HeaderComponent = (): JSX.Element => {
  const { t } = useTranslation('header');
  const router = useRouter();
  const [lang, setLang] = React.useState('en');
  const [showLang, setShowLang] = React.useState(false);
  const { pathname, asPath, locale } = router;

  const langs = {
    en: `${t('language.en')}`,
    vn: `${t('language.vn')}`,
    zh: `${t('language.zh')}`
  };

  const onClickLang = ({ key }) => {
    router.push(pathname, asPath, {
      locale: key
    });
  };
  const menu = (
    <Menu onClick={onClickLang} className="language-select">
      {Object.keys(langs).map((key) => (
        <Menu.Item key={key}>
          <span>
            <img src={`/images/header/icon-${key}.svg`} />
          </span>
          {langs[key]}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Header className="clearfix">
        {/* header-controls */}
        <div className="header-controls">
          <div className="container">
            <a href="#" className="banner">
              <img />
              <img src="/images/header/Desktop_320x70.png" />
            </a>
            <p className="logo">
              <img src="/images/header/sabasports.svg" />
            </p>
            {/* right header control */}
            <div className="header-auth-provider">
              <Dropdown overlayClassName="dropdown-header" trigger={['click']} overlay={menu} className="languages-box">
                <p className="language-active">
                  <span>
                    <img src={`/images/header/icon-${locale}.svg`} />
                  </span>
                  {langs[locale]}
                </p>
              </Dropdown>
              <div className="search">
                <input placeholder="" />
                <SearchOutlined />
              </div>
              <p className="login">{t('login')}</p>
            </div>
            {/* right header control */}
          </div>
        </div>
        {/* header-controls  */}
        {/* top-header */}
        <Affix offsetTop={0}>
          <div className="top-header">
            <div className="container">
              <ul className="main-menu">
                <li className="menu-item">
                  <ActiveLink href={"/football"}>{t('football')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={"/identify"}>{t('identify')}</ActiveLink>
                  <span><img src='/images/header/man.png' /></span>
                </li>
                <li className="menu-item">
                  <ActiveLink href={"/backstage"}>{t('backstage')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={"/transfer"}>{t('transfer')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={"/others"}>{t('other_subject')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={"/schedule"}>{t('schedule')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={"/video"}>{t('video')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={"/warning"}>{t('warning')}</ActiveLink>
                </li>
              </ul>

            </div>
          </div>
        </Affix>
        {/* top-header */}
      </Header>
    </>
  );
};

export default HeaderComponent;

