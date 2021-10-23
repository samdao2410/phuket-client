import React from 'react';
import { Header } from './styled';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Dropdown, Menu } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ActiveLink from 'components/common/ActiveLink';
import useWindowDimensions from 'utils/useWindowDimensions';
import WrapperAffix from '../common/WrapperAffix';
import cn from 'classnames';

const HeaderComponent = (): JSX.Element => {
  const { t } = useTranslation('header');
  const router = useRouter();
  const { pathname, asPath, locale } = router;
  const { width }: any = useWindowDimensions();
  const [menu, setMenu] = React.useState(false);

  const isMobile = width < 1025;
  const langs = {
    en: `${t('language.en')}`,
    vn: `${t('language.vn')}`,
    zh: `${t('language.zh')}`,
    th: `${t('language.th')}`,
  };

  const onClickLang = ({ key }) => {
    router.push(pathname, asPath, {
      locale: key
    });
  };

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  const MenuCPN = (
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

  const Search = () => (
    <>
      {' '}
      <div className="search">
        <input placeholder={t('search')} />
        <SearchOutlined />
      </div>
    </>
  );

  const HamburgerMenu = () => (
    <>
      <div
        onClick={handleClickMenu}
        className={cn('button-mobile', {
          active: menu
        })}>
        <span className="line-mb"></span>
        <span className="line-mb"></span>
        <span className="line-mb"></span>
      </div>
    </>
  );

  React.useEffect(() => {
    const body = document.getElementsByTagName('body');
    if (menu) {
      body[0].style.overflow = 'hidden';
    } else {
      body[0].style.overflow = 'auto';
    }
  }, [menu]);

  return (
    <>
      <Header className="clearfix">
        {/* header-controls */}
        <div className="header-controls">
          <div className="container">
            {!isMobile && (
              <a href="#" className="banner">
                <img />
                <img src="/images/header/Desktop_320x70.png" />
              </a>
            )}

            {isMobile && <HamburgerMenu />}
            <p className="logo">
              <img src="/images/header/sabasports.svg" />
            </p>

            {/* right header control */}
            <div className="header-auth-provider">
              <Dropdown
                overlayClassName="dropdown-header"
                trigger={['click']}
                overlay={MenuCPN}
                className="languages-box">
                <p className="language-active">
                  <span>
                    <img src={`/images/header/icon-${locale}.svg`} />
                  </span>
                  <span className="country">{langs[locale]}</span>
                </p>
              </Dropdown>
              {!isMobile && <Search />}

              <p className="login">{t('login')}</p>
            </div>
            {/* right header control */}
          </div>
        </div>
        {/* header-controls  */}
        {/* top-header */}
        <WrapperAffix isMobile={false} offsetTop={0}>
          <div
            className={cn('top-header', {
              active: menu
            })}>
            <div onClick={handleClickMenu} className="over"></div>
            <div className="container top-mobile">
              {isMobile && menu && <HamburgerMenu />}
              {isMobile && <Search />}

              <ul className="main-menu">
                <li className="menu-item">
                  <ActiveLink href={'/football'}>{t('football')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={'/identify'}>{t('identify')}</ActiveLink>
                  <span>
                    <img src="/images/header/man.png" />
                  </span>
                </li>
                <li className="menu-item">
                  <ActiveLink href={'/backstage'}>{t('backstage')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={'/transfer'}>{t('transfer')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={'/others'}>{t('other_subject')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={'/schedule'}>{t('schedule')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={'/video'}>{t('video')}</ActiveLink>
                </li>
                <li className="menu-item">
                  <ActiveLink href={'/warning'}>{t('warning')}</ActiveLink>
                </li>
              </ul>
            </div>
          </div>
        </WrapperAffix>
        {/* top-header */}
      </Header>
    </>
  );
};

export default HeaderComponent;
