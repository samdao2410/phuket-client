import { Header } from './styled';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Select } from 'antd';

const { Option } = Select;

const HeaderComponent = () => {
  const { t } = useTranslation('header');
  const router = useRouter();
  const { pathname, asPath } = router;

  const langs = {
    en: `${t('language.en')} (US)`,
    jp: `${t('language.jp')} (JP)`,
    // nl: `${t('language.nl')} (NL)`,
    // fr: `${t('language.fr')} (FR)`,
    // de: `${t('language.de')} (DE)`
    it: `${t('language.it')} (IT)`
    // zh: `${t('language.zh')} (ZH)`,
    // ko: `${t('language.ko')} (KO)`,
    // ar: `${t('language.ar')} (AR)`,
    // es: `${t('language.es')} (ES)`
  };

  const onChange = (val) => {
    router.push(pathname, asPath, {
      locale: val
    });
  };
  return (
    <>
      <Header>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select language"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          {Object.keys(langs).map((item) => (
            <Option key={item} value={item}>
              {langs[item]}
            </Option>
          ))}
        </Select>
      </Header>
    </>
  );
};

export default HeaderComponent;
