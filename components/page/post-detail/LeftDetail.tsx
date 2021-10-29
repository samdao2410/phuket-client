import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import moment from 'moment';
import { Form, Input } from 'antd';
import { Skeleton } from 'antd';
import { usePosts } from 'store/usePosts';
import { useRouter } from 'next/router';
import { LinkOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import _isEmpty from 'lodash/isEmpty';
import IconFace from '../../../public/images/icons/icon_face.svg';
import IconSave from '../../../public/images/icons/save.svg';
import IconComment from '../../../public/images/icons/comment.svg';
import IconMail from '../../../public/images/icons/email.svg';
import { BackBtn, ListIcon, SavePost, ListIconShare, InputForm } from './styled';
import cn from 'classnames';

function LeftDetail() {
  const { t } = useTranslation('post');
  const { posts, loading, postViewMore, postDetail, tags }: any = usePosts();
  const isPost = _isEmpty(postDetail);
  const router = useRouter();
  const [showIcon, setShowIcon] = React.useState(false);

  const view_more = postViewMore?.slice(0, 3);
  const post_care = [...posts].slice(0, 10);

  const handleBack = () => {
    router?.back();
  };
  const handleScrollPos = (e) => {
    const pageY = window.pageYOffset;
    if (pageY > 150) {
      setShowIcon(true);
    } else{
      setShowIcon(false);
    }
  }
  React.useEffect(() => {
    window?.addEventListener('scroll', handleScrollPos);
    return () => {
      window?.removeEventListener('scroll', handleScrollPos);
    };
  }, [])
  return (
    <div className="md:border-r-1 border-gray md:pr-8">
      {!isPost || loading ? (
        <Skeleton loading={loading}>
          <div className="flex">
            {/* List icon */}
            <ListIcon className={cn('mt-3 pr-5', {
              active: showIcon
            })}>
              <p className="face">
                <IconFace />
              </p>
              <p className="link">
                <LinkOutlined className="transform rotate-45 text-gray-400 " />
              </p>
              <p className='save'>
                <IconSave />
              </p>
              <p>
                <IconComment />
              </p>
              <BackBtn onClick={handleBack} className="back">
                <ArrowLeftOutlined />
              </BackBtn>
            </ListIcon>
            {/* List icon */}

            <div>
              {/* Post Detail */}
              <h2 className="text-2.5xl font-bold tracking-tight">{postDetail?.title?.rendered}</h2>
              <p className="text-gray-400 text-sm">
                {moment(postDetail?.date).format('dddd')}{' '}
                {moment(postDetail?.date).format('DD/MM/YYY, HH:mm')}
              </p>
              <div
                className="text-lg mt-7"
                dangerouslySetInnerHTML={{ __html: postDetail?.content?.rendered }}></div>
              {/* Post Detail */}
              {/* View more */}
              <div>
                <h3 className="italic text-lg font-bold mt-4 mb-3">{t('view_more')}:</h3>
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
                  <BackBtn onClick={handleBack} className="back">
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
                  <li key={tag?.id}>
                    <Link href={`/tag/${tag?.id}`}>
                      <a className="bg-gray-200 rounded-3xl p-3 py-2 mr-2 transition hover:bg-red-400 hover:text-white text-sm mb-3 block">
                        {tag?.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Tags */}
              {/* Comment */}
              <div className="mt-11">
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={() => { }}
                  onFinishFailed={() => { }}
                  autoComplete="off">
                  <InputForm>
                    <Form.Item
                      label={
                        <>
                          {t('comment')} <span>(0)</span>
                        </>
                      }
                      name="username">
                      <Input.TextArea placeholder={t('your_opinion')}></Input.TextArea>
                    </Form.Item>
                  </InputForm>
                </Form>
              </div>

              {/* Comment */}
              {/* can you care */}
              <div className="mt-10 md:mt-20">
                <h2 className="mb-5 text-red text-xl border-l-3 font-bold uppercase leading-6 pl-1.5">
                  <Link href="/football">{t('you_care')}</Link>
                </h2>
                {post_care.map((item) => (
                  <div
                    key={item?.id}
                    className="grid grid-cols-12 pb-4 mb-4 border-b-1 border-gray">
                    <div className="col-span-4">
                      <Link href={`/post/${item.id}`}>
                        <img className="cursor-pointer" src="/images/ronado.jpg" />
                      </Link>
                    </div>
                    <div className="col-span-8 pl-3">
                      <h4 className="text-base font-bold hover:text-red">
                        <Link href={`/post/${item.id}`}>
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
              </div>

              {/* can you care */}
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
