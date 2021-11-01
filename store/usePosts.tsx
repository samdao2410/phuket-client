import React from 'react';
import { API_V2, API } from '../utils/api';
import { useRouter } from 'next/router';
import { ID_CATEGORIES } from 'constant/cateogries';

const PostContext = React.createContext({});

export const PostStore = ({ children }): JSX.Element => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [postPopular, setPostPopular] = React.useState([]);
  const [postTag, setPostTag] = React.useState([]);
  const [hightLight, setHighLight] = React.useState([]);
  const [hightLightPop, setHighLightPop] = React.useState([]);
  const [postDetail, setPostDetail] = React.useState({});
  const [postViewMore, setPostViewMore] = React.useState([]);
  const [tags, setTags] = React.useState([]);

  const router: any = useRouter();
  const asPath = router?.asPath;
  const locale = router.locale;
  const slug_post = router?.query?.slug;
  const isPostTag = router?.pathname === '/tag/[slug]';
  const isPostDetail = router?.pathname === '/post/[slug]';

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      let id;
      id = ID_CATEGORIES[locale][asPath];


      // list posts
      if (id) {
        const result = await API_V2.get(`/posts?categories=${id}`);
        const data = result.data;
        setHighLight(data[0]);
        setPosts(data);
      }

      // list post popular
      const resultPopular = await API.get('/wordpress-popular-posts/v1/popular-posts/');
      const dataPopular = resultPopular.data.filter((item) =>
        id ? item?.categories.includes(id) : item
      );
      setHighLightPop(dataPopular[0]);
      setPostPopular(dataPopular);

      // post detail
      if (slug_post && isPostDetail) {
        const resultPostDetail = await API_V2.get(`/posts?include[]=${slug_post}`);
        const postDetail = resultPostDetail.data;
        const dataPostViewMore = await API_V2.get(`/posts`);
        const resulTags = await API_V2.get(`/tags`);
        const posts = await API_V2.get(`/posts`);
        setPosts(posts?.data);
        setTags(resulTags?.data)
        setPostViewMore(dataPostViewMore.data);
        setPostDetail(postDetail[0]);
      }

      // Post Tag 
      if (slug_post && isPostTag) {
        const postTags = await API_V2.get(`/posts?tags=${slug_post}`);
        setPostTag(postTags?.data)
      }

      // finally
      setLoading(false);
    })();
  }, [router]);
  return (
    <PostContext.Provider
      value={{
        posts,
        loading,
        postPopular,
        hightLight,
        postDetail,
        hightLightPop,
        postViewMore,
        postTag,
        tags
      }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => React.useContext(PostContext);

export default PostStore;
