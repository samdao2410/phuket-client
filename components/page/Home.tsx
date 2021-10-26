import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import { HomePage, Banner, RightBody, GuessRow } from './styled';
import requests from 'requests';
import { Row, Col } from 'antd';
import { UpCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router';
const CategoryList = {
  en: [133, 135, 97, 51, 131],
  zh: [137, 144, 105, 147, 140],
  th: [149, 145, 113, 150, 141],
  vn: [130, 143, 121, 148, 142],
}
enum CateSort {
  'footballs',
  'guess',
  'news',
  'others',
  'videos'
}
export default function Home() {
  const { t } = useTranslation('home');
  const [posts, setPosts] = useState<any[]>([]);
  const [_document, set_document] = useState<any>()
  const router: any = useRouter();
  const locale = router.locale;
  console.log({ locale })
  const getPost = async () => {
    const rq: any[] = await requests.get('https://phuket.sam888.vip/wp-json/wp/v2/posts');
    setPosts(rq);
  }
  const getContent = (str: string) => {
    if (!str) return '';
    return str.replace(/(<([^>]+)>)/ig, '');
  };
  const getImages = (string) => {
    const imgRex = /<img.*?src="(.*?)"[^>]+>/g;
    const images: any[] = [];
    let img;
    while ((img = imgRex.exec(string))) {
      images.push(img[1]);
    }
    return images;
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  useEffect(() => {
    getPost();
  }, [])

  const getBlockPost = (type: string) => {
    const cateList = CategoryList[locale];
    const catID = cateList[CateSort[type]];
    const listPost = posts.filter(post => post.categories.includes(catID));
    return listPost;
  }

  return (
    <HomePage>
      <Banner><img style={{ width: '100%' }} src={'/images/banner.jpeg'} /></Banner>
      <h2 className="block__title"><a href="/tin-the-thao">Tin mới nhất</a></h2>
      <Row>
        <Col span={12}>
          <div className="card-vertical card-vertical-highlight">
            <a href={getBlockPost('news')[0]?.link} className="card-vertical__image">
              <img src={getImages(getBlockPost('news')[0]?.content.rendered)[0]} style={{ width: '100%' }} />
            </a>
            <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="card-vertical__title">{getBlockPost('news')[0]?.title?.rendered}</a>
            <p className="card-vertical__description text-description">
              {getContent(getBlockPost('news')[0]?.content?.rendered.split('.')[0])}
            </p>
          </div>
        </Col>
        <Col span={12}>
          <div className="card-title-wrapper">
            <a className="title" href={getBlockPost('news')[1]?.link} >{getBlockPost('news')[1]?.title?.rendered}</a>
            <RightBody>
              <a href={getBlockPost('news')[1]?.link} className="card-horizontal__image">
                <img src={getImages(getBlockPost('news')[0]?.content.rendered)[0]} width={200} />
              </a>
              <div className="sub-content">
                <p className="description">
                  {getContent(getBlockPost('news')[1]?.content?.rendered.split('.')[0])}
                </p>
              </div>
            </RightBody>
          </div>
          <div className="card-title-wrapper">
            <a className="title" href={getBlockPost('news')[2]?.link} >{getBlockPost('news')[2]?.title?.rendered}</a>
            <RightBody>
              <a href={getBlockPost('news')[0]?.link} className="card-horizontal__image">
                <img src={getImages(getBlockPost('news')[2]?.content.rendered)[0]} width={200} />
              </a>
              <div className="sub-content">
                <p className="description">
                  {getContent(getBlockPost('news')[2]?.content?.rendered.split('.')[0])}
                </p>
              </div>
            </RightBody>
          </div>
          <div className="">
            <a className="title" href={getBlockPost('news')[3]?.link} >{getBlockPost('news')[3]?.title?.rendered}</a>
            <RightBody>
              <a href={getBlockPost('news')[0]?.link} className="card-horizontal__image">
                <img src={getImages(getBlockPost('news')[3]?.content.rendered)[0]} width={200} />
              </a>
              <div className="sub-content">
                <p className="description">
                  {getContent(getBlockPost('news')[3]?.content?.rendered.split('.')[0])}
                </p>
              </div>
            </RightBody>
          </div>
        </Col>
      </Row>


      <h2 className="block__title"><a href="/tin-the-thao">Video</a></h2>
      <Row>
        <Col span={15}>
          <div className="card-vertical-video card-vertical-highlight">
            <a href={getBlockPost('videos')[0]?.link} className="card-vertical__image">
              <img src={getImages(getBlockPost('videos')[0]?.content.rendered)[0]} style={{ width: '100%', height: '430px' }} />
            </a>
            {/* <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="card-vertical__title">{posts[3]?.title?.rendered}</a>
            <p className="card-vertical__description text-description">
              {getContent(posts[3]?.content?.rendered.split('.')[0])}
            </p> */}
            <div className="content-box">
              <h3 className="title-box"><a href="/man-united-vs-atalanta-bang-f-cup-c1-chau-au-2021-22" className="heading">{getBlockPost('videos')[0]?.title.rendered}</a></h3>
            </div>
          </div>
        </Col>
        <Col span={9} className='card-vertical-video'>
          {getBlockPost('videos').map(post => <div className="card-title-wrapper">
            <a className="title" href={post?.link} >{post?.title?.rendered}</a>
            <RightBody>
              <a href={post?.link} className="card-horizontal__image">
                <img src={getImages(post?.content.rendered)[0]} width={200} />
              </a>
              <div className="sub-content">
                <p className="description">
                  {getContent(post?.content?.rendered.split('.')[0])}
                </p>
              </div>
            </RightBody>
          </div>)}
          {/* <div className="card-title-wrapper">
            <a className="title" href={posts[3]?.link} >{posts[3]?.title?.rendered}</a>
            <RightBody>
              <a href={posts[3]?.link} className="card-horizontal__image">
                <img src={getImages(posts[3]?.content.rendered)[0]} width={200} />
              </a>
              <div className="sub-content">
                <p className="description">
                  {getContent(posts[3]?.content?.rendered.split('.')[0])}
                </p>
              </div>
            </RightBody>
          </div>
          <div className="card-title-wrapper">
            <a className="title" href={posts[3]?.link} >{posts[3]?.title?.rendered}</a>
            <RightBody>
              <a href={posts[3]?.link} className="card-horizontal__image">
                <img src={getImages(posts[3]?.content.rendered)[0]} width={200} />
              </a>
              <div className="sub-content">
                <p className="description">
                  {getContent(posts[3]?.content?.rendered.split('.')[0])}
                </p>
              </div>
            </RightBody>
          </div>
          <div className="">
            <a className="title" href={posts[3]?.link} >{posts[3]?.title?.rendered}</a>
            <RightBody>
              <a href={posts[3]?.link} className="card-horizontal__image">
                <img src={getImages(posts[3]?.content.rendered)[0]} width={200} />
              </a>
              <div className="sub-content">
                <p className="description">
                  {getContent(posts[3]?.content?.rendered.split('.')[0])}
                </p>
              </div>
            </RightBody>
          </div> */}
        </Col>
      </Row>


      <h2 className="block__title"><a href="/tin-the-thao">Bóng đá</a></h2>
      <Row>
        {getBlockPost('footballs').map(post => <Col span={6} className='pad-right-10'>
          <a href={posts[3]?.link} className="card-vertical__image">
            <img src={getImages(post?.content.rendered)[0]} style={{ width: '100%' }} />
          </a>
          <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{post?.title?.rendered}</a>
        </Col>)}
        {/* <Col span={6} className='pad-right-10'>
          <a href={posts[3]?.link} className="card-vertical__image">
            <img src={getImages(posts[3]?.content.rendered)[0]} style={{ width: '100%' }} />
          </a>
          <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{posts[3]?.title?.rendered}</a>
        </Col>
        <Col span={6} className='pad-right-10'>
          <a href={posts[3]?.link} className="card-vertical__image">
            <img src={getImages(posts[3]?.content.rendered)[0]} style={{ width: '100%' }} />
          </a>
          <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{posts[3]?.title?.rendered}</a>
        </Col>
        <Col span={6}>
          <a href={posts[3]?.link} className="card-vertical__image">
            <img src={getImages(posts[3]?.content.rendered)[0]} style={{ width: '100%' }} />
          </a>
          <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{posts[3]?.title?.rendered}</a>
        </Col>
      </Row>
      <Row>
        <Col span={6} className='pad-right-10'>
          <a href={posts[3]?.link} className="card-vertical__image">
            <img src={getImages(posts[3]?.content.rendered)[0]} style={{ width: '100%' }} />
          </a>
          <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{posts[3]?.title?.rendered}</a>
        </Col>
        <Col span={6} className='pad-right-10'>
          <a href={posts[3]?.link} className="card-vertical__image">
            <img src={getImages(posts[3]?.content.rendered)[0]} style={{ width: '100%' }} />
          </a>
          <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{posts[3]?.title?.rendered}</a>
        </Col>
        <Col span={6} className='pad-right-10'>
          <a href={posts[3]?.link} className="card-vertical__image">
            <img src={getImages(posts[3]?.content.rendered)[0]} style={{ width: '100%' }} />
          </a>
          <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{posts[3]?.title?.rendered}</a>
        </Col>
        <Col span={6}>
          <a href={posts[3]?.link} className="card-vertical__image">
            <img src={getImages(posts[3]?.content.rendered)[0]} style={{ width: '100%' }} />
          </a>
          <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{posts[3]?.title?.rendered}</a>
        </Col> */}
      </Row>

      <div className='block-guess'>
        <h2 className="block__title"><a href="/tin-the-thao">Nhận định - dự đoán</a></h2>
        <GuessRow>
          {getBlockPost('guess').map(post => <div className='pad-right-10' style={{ width: 360 }}>
            <a href={post?.link} className="card-vertical__image">
              <img src={getImages(post?.content.rendered)[0]} width={360} height={200} />
            </a>
            <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{post?.title?.rendered}</a>
          </div>)}
          {/* <div className='pad-right-10' style={{ width: 360 }}>
            <a href={posts[3]?.link} className="card-vertical__image">
              <img src={getImages(posts[3]?.content.rendered)[0]} width={360} height={200} />
            </a>
            <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{posts[3]?.title?.rendered}</a>
          </div>
          <div className='pad-right-10' style={{ width: 360 }}>
            <a href={posts[3]?.link} className="card-vertical__image">
              <img src={getImages(posts[3]?.content.rendered)[0]} width={360} height={200} />
            </a>
            <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{posts[3]?.title?.rendered}</a>
          </div> */}
        </GuessRow>
      </div>


      <h2 className="block__title"><a href="/tin-the-thao">Các môn khác</a></h2>
      <Row>
        <Col span={12}>
          <div className="others">
            <a href={getBlockPost('others')[0]?.link} className="card-vertical__image">
              <img src={getImages(getBlockPost('others')[0]?.content.rendered)[0]} style={{ height: '90%' }} />
            </a>
            <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="card-vertical__title" style={{ paddingLeft: 0 }}>{getBlockPost('others')[0]?.title?.rendered}</a>
          </div>
        </Col>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <div className='pad-right-10'>
                <a href={getBlockPost('others')[1]?.link} className="card-vertical__image">
                  <img src={getImages(getBlockPost('others')[1]?.content.rendered)[0]} width={360} height={200} />
                </a>
                <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{getBlockPost('others')[1]?.title?.rendered}</a>
              </div>
            </Col>
            <Col span={12}>
              <div className='pad-right-10'>
                <a href={getBlockPost('others')[2]?.link} className="card-vertical__image">
                  <img src={getImages(getBlockPost('others')[2]?.content.rendered)[0]} width={360} height={200} />
                </a>
                <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{getBlockPost('others')[2]?.title?.rendered}</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className='pad-right-10'>
                <a href={getBlockPost('others')[3]?.link} className="card-vertical__image">
                  <img src={getImages(getBlockPost('others')[3]?.content.rendered)[0]} width={360} height={200} />
                </a>
                <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{getBlockPost('others')[3]?.title?.rendered}</a>
              </div>
            </Col>
            <Col span={12}>
              <div className='pad-right-10'>
                <a href={getBlockPost('others')[4]?.link} className="card-vertical__image">
                  <img src={getImages(getBlockPost('others')[4]?.content.rendered)[0]} width={360} height={200} />
                </a>
                <a href="/solskjaer-cac-tro-ly-cua-toi-rat-gioi-mu-da-gan-toi-dich" className="football-card-vertical__title">{getBlockPost('others')[4]?.title?.rendered}</a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="back-to-top-box" onClick={scrollToTop}>
        <UpCircleOutlined style={{ fontSize: 40 }} />
      </div>
    </HomePage>
  )
}
