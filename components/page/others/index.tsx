import React from 'react';
import RightDetail from './RightDetail';
import LeftDetail from './LeftDetail';


function OtherPage() {
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

export default OtherPage;
