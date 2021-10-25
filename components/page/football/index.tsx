import React from 'react';
import RightDetail from './RightDetail';
import LeftDetail from './LeftDetail';
import { useRouter } from 'next/router';
import { ID_CATEGORIES } from 'constant/cateogries';
import {useGetPosts} from 'utils/useGetPosts';


interface FootBallPageType {
  typePage?: string | undefined | any
}

function FootBallPage({ typePage }: FootBallPageType) {
  const router : any = useRouter();
  const locale = router.locale;
  let id;
  if (!typePage) {
    id = ID_CATEGORIES[locale]?.football
  }
  const { posts } = useGetPosts(id);
  console.log({id,posts})
  return (
    <div className="container pt-6 pb-10">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <LeftDetail />
        </div>
        <div className="col-span-12 md:col-span-4">
          <RightDetail />
        </div>
      </div>
    </div>
  );
}

export default FootBallPage;
