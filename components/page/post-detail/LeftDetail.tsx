import React from 'react';
import { useTranslation } from 'next-i18next';
import ActiveLink from 'components/common/ActiveLink';
import { HoverBtn } from './styled';
import Link from 'next/link';
import moment from 'moment';
import { Skeleton } from 'antd';
import { usePosts } from 'store/usePosts';


function LeftDetail() {
  const { t } = useTranslation('post');
  const { posts, loading, hightLight, postDetail }: any = usePosts();
  const listPost = posts.filter(item => item.id !== hightLight?.id);

  console.log(postDetail)

  return (
    <div className="md:border-r-1 border-gray md:pr-8">

      {(posts && posts.length > 0) || loading ? (
        <>


          {/* Post Detail */}
         
          {/* Post Detail */}
        </>
      ) : (
        <><p className='mt-5 text-base text-gray-400'>{t('no_post')}</p></>
      )}


    </div>
  );
}

export default LeftDetail;
