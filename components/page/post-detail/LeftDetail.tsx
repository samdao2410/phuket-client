import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import moment from 'moment';
import { Skeleton } from 'antd';
import { usePosts } from 'store/usePosts';
import { LinkOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import _isEmpty from 'lodash/isEmpty';
import IconFace from '../../../public/images/icons/icon_face.svg';
import IconSave from '../../../public/images/icons/save.svg';
import IconComment from '../../../public/images/icons/comment.svg';
import IconMail from '../../../public/images/icons/email.svg';
import { BackBtn, ListIcon, SavePost, ListIconShare } from './styled';

function LeftDetail() {
  const { t } = useTranslation('post');
  const { loading, postViewMore, postDetail, tags }: any = usePosts();
  const isPost = _isEmpty(postDetail);

  const view_more = postViewMore?.slice(0, 3);
  return (
    <div className="md:border-r-1 border-gray md:pr-8">
      {!isPost || loading ? (
        <Skeleton loading={loading}>
          <div className="flex">
            {/* List icon */}
            <ListIcon className="mt-3 pr-5 flex items-center flex-col">
              <p className="face">
                <IconFace />
              </p>
              <p className="link">
                <LinkOutlined className="transform rotate-45 text-gray-400 " />
              </p>
              <p>
                <IconSave />
              </p>
              <p>
                <IconComment />
              </p>
              <BackBtn className="back">
                <ArrowLeftOutlined />
              </BackBtn>
            </ListIcon>
            {/* List icon */}

            <div>
              {/* Post Detail */}
              <h2 className="text-2.5xl font-bold tracking-tight">{postDetail?.title?.rendered}</h2>
              <p className="text-gray-400 text-sm">
                {moment(postDetail.date).format('dddd')}{' '}
                {moment(postDetail.date).format('DD/MM/YYY, HH:mm')}
              </p>
              <div
                className="text-lg mt-7"
                dangerouslySetInnerHTML={{ __html: postDetail?.content?.rendered }}></div>
              {/* Post Detail */}
              {/* View more */}
              <div>
                <h3 className="italic text-lg font-bold my-4">{t('view_more')}:</h3>
                <ul className="pl-4">
                  {view_more.map((item) => (
                    <li key={item.id}>
                      <Link href={`/post/${item.id}`}>
                        <a className="text-blue-400 underline text-lg my-1 block">
                          {item?.title?.rendered}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* View more */}
              {/* Share */}
              <div className="mt-6 flex justify-between items-center">
                <div className="flex">
                  <BackBtn className="back">
                    <ArrowLeftOutlined />
                  </BackBtn>
                  <SavePost className="ml-3">
                    <IconSave /> <span>{t('save_post')}</span>
                  </SavePost>
                </div>
                <div className="flex">
                  <p className="mr-1">{t('share')}:</p>
                  <ListIconShare className="flex items-center">
                    <p className="face">
                      <IconFace />
                    </p>
                    <p className="face">
                      <IconMail />
                    </p>
                    <p className="link">
                      <LinkOutlined className="transform rotate-45 text-gray-400 " />
                    </p>
                  </ListIconShare>
                </div>
              </div>
              {/* Share */}
              {/* Tags */}
              <ul className="mt-5 flex flex-wrap list-none">
                {tags?.map((tag) => (
                  <li>
                    <Link href={`/tag/${tag?.id}`}>
                      <a className="bg-gray-200 rounded-3xl p-3 py-2 mr-2 transition hover:bg-red-400 hover:text-white text-sm">
                        {tag?.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Tags */}
            </div>
          </div>
        </Skeleton>
      ) : (
        <>
          <p className="mt-5 text-base text-gray-400">{t('no_post')}</p>
        </>
      )}
    </div>
  );
}

export default LeftDetail;
