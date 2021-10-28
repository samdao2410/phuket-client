import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import moment from 'moment';
import { Skeleton } from 'antd';
import { usePosts } from 'store/usePosts';
import {
  LinkOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';
import _isEmpty from 'lodash/isEmpty'
import IconFace from '../../../public/images/icons/icon_face.svg';
import IconSave from '../../../public/images/icons/save.svg';
import IconComment from '../../../public/images/icons/comment.svg';
import { BackBtn, ListIcon } from './styled';



function LeftDetail() {
  const { t } = useTranslation('post');
  const { posts, loading, hightLight, postDetail }: any = usePosts();
  const isPost = _isEmpty(postDetail)

  console.log(postDetail)

  return (
    <div className="md:border-r-1 border-gray md:pr-8">

      {!isPost || loading ? (
        <>
          <div className='flex'>
            {/* List icon */}
            <ListIcon className='mt-3 pr-5 flex items-center flex-col'>
              <p className='face'><IconFace /></p>
              <p className='link'><LinkOutlined className='transform rotate-45 text-gray-400 ' /></p>
              <p><IconSave /></p>
              <p><IconComment /></p>
              <BackBtn className='back'><ArrowLeftOutlined /></BackBtn>
            </ListIcon>
            {/* List icon */}
            {/* Post Detail */}
            <div>
              <h2 className='text-2.5xl font-bold tracking-tight'>{postDetail?.title?.rendered}</h2>
              <p className='text-gray-400 text-sm'>{moment(postDetail.date).format('dddd')} {moment(postDetail.date).format('DD/MM/YYY, HH:mm')}</p>
              <div className='text-lg' dangerouslySetInnerHTML={{__html:postDetail?.content?.rendered }}></div>
            </div>
            {/* Post Detail */}
            {/* View more */}
            <div>
              
            </div>
            {/* View more */}
          </div>


        </>
      ) : (
        <><p className='mt-5 text-base text-gray-400'>{t('no_post')}</p></>
      )}


    </div>
  );
}

export default LeftDetail;
