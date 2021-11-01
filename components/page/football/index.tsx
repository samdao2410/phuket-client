import React from 'react';
import RightDetail from './RightDetail';
import LeftDetail from './LeftDetail';
import { useRouter } from 'next/router';
import { ID_CATEGORIES } from 'constant/cateogries';
import {usePosts} from 'store/usePosts';




function FootBallPage() {
  

  return (
    <div className="container pt-6 pb-10">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <LeftDetail  />
        </div>
        <div className="col-span-12 md:col-span-4">
          <RightDetail />
        </div>
      </div>
    </div>
  );
}

export default FootBallPage;
