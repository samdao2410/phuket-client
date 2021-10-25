import React from 'react';
import { API_V2 } from './api';

export const useGetPosts = (id: string | number) => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const result = await API_V2.get(`/posts?categories=${id}`);
      const posts = result.data;
      setPosts(posts);
    })();
  }, []);
  return {
    posts
  };
};
