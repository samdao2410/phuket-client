import React from 'react'
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <div>
      <h1>{t('text1')}</h1>
      <h2>{t("product.name")}</h2>
    </div>
  )
}
