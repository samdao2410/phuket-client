import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Skeleton } from 'antd';
import { usePosts } from 'store/usePosts';
import moment from 'moment';

function RightDetail() {
  const { t } = useTranslation('post');
  const { postPopular, loading, hightLightPop }: any = usePosts();
  const listPost = postPopular.filter((item) => item.id !== hightLightPop?.id);
  return (
    <div className="md:pl-4 md:sticky md:top-20">
      <h2 className="text-red text-xl border-l-3 font-bold uppercase leading-6 pl-1.5">
        <Link href="/football">{t('most_view')}</Link>
      </h2>
      {(postPopular && postPopular.length > 0) || loading ? (
        <>
          {/* HightLight */}
          <Skeleton loading={loading}>
            <div className="pb-4 mb-4 border-b-1 my-5 border-gray">
              <div className="col-span-4">
                <img src="/images/sidebar.jpg" />
              </div>
              <div className="col-span-8">
                <h3 className="mt-2 text-base font-bold hover:text-red">
                  <Link href="#">
                    <a>{hightLightPop?.title?.rendered}</a>
                  </Link>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {moment(hightLightPop?.date).format('HH:mm DD/MM/YYYY')}
                </p>
              </div>
            </div>
          </Skeleton>
          {/* HightLight */}
          {/* List Post */}
          <Skeleton loading={loading}>
            <ul>
              {listPost.map((item) => (
                <li key={item} className="list-none border-b-1 border-gray pb-4 mb-4 last:border-0">
                  <h4 className="mt-2 text-sm hover:text-red">
                    <Link href="#">
                      Koeman nói về Dani Alves và khả năng Fati đá trọn trận El Clasico
                    </Link>
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">17:47 21/10/2021</p>
                </li>
              ))}
            </ul>
          </Skeleton>
          {/* List Post */}
        </>
      ) : (
        <>
          <p className="mt-5 text-base text-gray-400">{t('no_post')}</p>
        </>
      )}
    </div>
  );
}

export default RightDetail;
