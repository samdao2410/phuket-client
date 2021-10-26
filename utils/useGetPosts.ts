import React from 'react';
import { API_V2, API } from './api';
import { useRouter } from 'next/router';
import { ID_CATEGORIES } from 'constant/cateogries';

export const useGetPosts = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [postPopular, setPostPopular] = React.useState([]);
  const [hightLight, setHighLight] = React.useState([]);
  const [hightLightPop, setHighLightPop] = React.useState([]);

  const router: any = useRouter();
  const asPath = router?.asPath;
  const locale = router.locale;

  React.useEffect(() => {
    (async () => {
      let id;
      id = ID_CATEGORIES[locale][asPath];

      setLoading(true);
      const result = await API_V2.get(`/posts?categories=${id}`);
      const resultPopular = await API.get('/wordpress-popular-posts/v1/popular-posts/');
      const data = result.data;
      const dataPopular = resultPopular.data.filter((item) => item?.categories.includes(id));
      setHighLight(data[0]);
      setHighLightPop(dataPopular[0])
      setPosts(data);
      setPostPopular(dataPopular);
      setLoading(false);
    })();
  }, [router]);
  return {
    posts,
    loading,
    postPopular,
    hightLight,
    hightLightPop
  };
};
