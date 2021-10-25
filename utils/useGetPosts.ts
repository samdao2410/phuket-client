import React from 'react';
import { Api } from './api';

export const useGetPosts = (id: string | number) => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const result = await Api.get(`/posts?categories=${id}`);
      const posts = result.data;
      setPosts(posts);
    })();
  }, []);
  return {
    posts
  };
};
