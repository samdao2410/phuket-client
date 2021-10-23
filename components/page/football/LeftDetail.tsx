import React from 'react';
import { useTranslation } from 'next-i18next';
import ActiveLink from 'components/common/ActiveLink';
import { HoverBtn } from './styled';
import Link from 'next/link';
var data = [...Array(5).keys()]
function LeftDetail() {
  const { t } = useTranslation('football');
  return (
    <div className='md:border-r-1 border-gray md:pr-8'>
      <h2 className="text-red text-xl border-l-3 font-bold uppercase leading-6 pl-1.5 mb-4">
        <ActiveLink href="/football">{t('football')}</ActiveLink>
      </h2>
      {/* MENU */}
      <div className="flex border-b-1 border-gray">
        {' '}
        <HoverBtn>
          <ActiveLink colorActive="text-red" href="/football">
            {t('domestically')}
          </ActiveLink>
        </HoverBtn>
        <HoverBtn>
          <ActiveLink colorActive="text-red" href="/football1">
            {t('international')}
          </ActiveLink>
        </HoverBtn>
      </div>
      {/* MENU */}
      {/* HightLight */}
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-12 md:col-span-7">
          <img src="/images/van-toan.jpg" />
        </div>
        <div className="col-span-12 md:col-span-5 p-4 bg-gray-200">
          <h3 className='text-base md:text-xl font-bold hover:text-red'>
            <Link href="#">AFC: Văn Toản thuộc top 8 cầu thủ đáng xem nhất vòng loại U23 châu Á</Link>
          </h3>
          <p className='text-sm my-1'>Ngay trước thềm chiến dịch quan trọng của thầy trò ông Park, thủ thành của CLB Hải Phòng đã được Liên đoàn bóng đá châu Á (AFC) vinh danh. </p>
          <p className='text-xs text-gray-400'>2 giờ trước</p>
        </div>
      </div>
      {/* HightLight */}
      {/* List Post */}
      {
        data.map((item) => (
          <div key={item} className='grid grid-cols-12 pb-4 mb-4 border-b-1 border-gray'>
            <div className='col-span-4'>
              <img src='/images/ronado.jpg' />
            </div>
            <div className='col-span-8 pl-3'>
              <h4 className='text-base font-bold hover:text-red'><Link href="#">Ronaldo nói về việc chia tay ĐT Bồ Đào Nha để tận hiến cho MU</Link></h4>
              <p className='hidden md:block text-sm mb-2'>Ngay trước thềm chiến dịch quan trọng của thầy trò ông Park, thủ thành của CLB Hải Phòng đã được Liên đoàn bóng đá châu Á (AFC) vinh danh. </p>
              <p className='text-xs text-gray-400'>2 giờ trước</p>
            </div>

          </div>
        ))
      }

      {/* List Post */}
    </div>
  );
}

export default LeftDetail;
