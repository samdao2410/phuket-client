import React from 'react';
import { Header } from './styled';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Select, Dropdown, Menu } from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons';


const { Option } = Select;

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
    <Menu onClick={onClickLang} className='language-select'>
      {
        Object.keys(langs).map(key => (
          <Menu.Item key={key}><span><img src={`/images/header/icon-${key}.svg`} /></span>{langs[key]}</Menu.Item>

        ))
      }
    </Menu>
  );


  return (
    <>
      <Header className='clearfix'>
        <div className='header-controls'>
          <div className='container'>
            <a href='#' className='banner'><img /><img src='/images/header/Desktop_320x70.png' /></a>
            <p className='logo'><img src='/images/header/sabasports.svg' /></p>
            {/* right header control */}
            <div className="header-auth-provider">
              <Dropdown trigger={['click']} overlay={menu} className='languages-box'>
                <p className='language-active'>
                  <span><img src={`/images/header/icon-${locale}.svg`} /></span>
                  {langs[locale]}
                </p>
              </Dropdown>
              <div className='search'>
                <input placeholder='' />
                <SearchOutlined />
              </div>
              <p>{t('login')}</p>
            </div>
            {/* right header control */}
          </div>

        </div>

      </Header>
    </>
  );
};

export default HeaderComponent;
{/* <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select language"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }>
            {Object.keys(langs).map((item) => (
              <Option key={item} value={item}>
                {langs[item]}
              </Option>
            ))}
          </Select> */}