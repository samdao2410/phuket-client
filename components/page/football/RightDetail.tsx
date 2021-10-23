import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

function RightDetail() {
  const { t } = useTranslation('football');
  return (
    <div>
      <h2 className='text-red text-xl border-l-3 font-bold uppercase leading-6 pl-1.5'><Link href="/football">{t('most_view')}</Link></h2>
      
    </div>
  )
}


export default RightDetail;