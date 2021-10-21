import React from 'react'
import { useTranslation } from 'next-i18next';
import { HomePage } from './styled';

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <HomePage>
      <h1>{t('text1')}</h1>
      <h2>{t("product.name")}</h2>
    </HomePage>
  )
}
