import React from 'react';
import { useTranslation } from 'next-i18next';
import ActiveLink from 'components/common/ActiveLink';
import { HoverBtn } from './styled';
import Link from 'next/link';
import moment from 'moment';
import { Skeleton } from 'antd';
import { usePosts } from 'store/usePosts';

function LeftDetail() {
  const { t } = useTranslation('football');
  const { posts, loading, hightLight }: any = usePosts();
  const listPost = posts?.filter((item) => item.id !== hightLight?.id);

  return (
    <div className="md:border-r-1 border-gray md:pr-8">
      <h2 className="text-red text-xl border-l-3 font-bold uppercase leading-6 pl-1.5 mb-4">
        <ActiveLink href="/football">{t('football')}</ActiveLink>
      </h2>
      {/* MENU */}
      <div className="flex border-b-1 border-gray">
        {' '}
        <HoverBtn>
          <ActiveLink colorActive="text-red" href="/football/domestically">
            {t('domestically')}
          </ActiveLink>
        </HoverBtn>
        <HoverBtn>
          <ActiveLink colorActive="text-red" href="/football/international">
            {t('international')}
          </ActiveLink>
        </HoverBtn>
      </div>
      {/* MENU */}
      {(posts && posts.length > 0) || loading ? (
        <>
          {' '}
          {/* HightLight */}
          <Skeleton loading={loading}>
            <div className="grid grid-cols-12 my-5">
              <div className="col-span-12 md:col-span-7">
                <Link href={`/post/${hightLight?.id}`}>
                  <img className="hover:scale-50 cursor-pointer" src="/images/van-toan.jpg" />
                </Link>
              </div>
              <div className="col-span-12 md:col-span-5 p-4 bg-gray-200">
                <Link href={`/post/${hightLight?.id}`}>
                  <h3 className="text-base cursor-pointer md:text-xl font-bold hover:text-red">
                    <>{hightLight?.title?.rendered}</>
                  </h3>
                </Link>
                <div
                  dangerouslySetInnerHTML={{ __html: hightLight?.excerpt?.rendered }}
                  className="text-sm my-1"></div>
                <p className="text-xs text-gray-400">{moment(hightLight?.date).fromNow()}</p>
              </div>
            </div>
          </Skeleton>
          {/* HightLight */}
          {/* List Post */}
          { }
          <Skeleton loading={loading}>
            {listPost.map((item) => (
              <div key={item?.id} className="grid grid-cols-12 pb-4 mb-4 border-b-1 border-gray">
                <div className="col-span-4">
                  <Link href={`/post/${item?.id}`}>
                    <img className="cursor-pointer" src="/images/ronado.jpg" />
                  </Link>
                </div>
                <div className="col-span-8 pl-3">
                  <h4 className="text-base font-bold hover:text-red">
                    <Link href={`/post/${item?.id}`}>
                      <a>{item?.title?.rendered}</a>
                    </Link>
                  </h4>
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.excerpt?.rendered }}
                    className="hidden md:block text-sm mb-2"></div>
                  <p className="text-xs text-gray-400">{moment(item?.date).fromNow()}</p>
                </div>
              </div>
            ))}
          </Skeleton>
        </>
      ) : (
        <>
          <p className="mt-5 text-base text-gray-400">{t('no_post')}</p>
        </>
      )}

      {/* List Post */}
    </div>
  );
}

export default LeftDetail;
