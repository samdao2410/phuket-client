import {
  FacebookOutlined,
  YoutubeOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/router';

import { Footer, LeftInfor, RightInfor } from './styled';
import cn from 'classnames';

const FooterComponent = (): JSX.Element => {
  // const { t } = useTranslation('footer');
  const router = useRouter();
  const isPostDetail = router.pathname === '/post/[slug]';
  
  return (
    <>
      <Footer className={cn('', {
        isPostDetail: isPostDetail
      })}>
        <LeftInfor>
          © 2021 Bản quyền thuộc về Saba Sports
        </LeftInfor>
        <RightInfor>
          Theo dõi Saba Sports trên
          <FacebookOutlined  style={{ fontSize: '24px', margin: '0px 10px'}}/>
          <YoutubeOutlined style={{ fontSize: '24px'}}/>
        </RightInfor>
      </Footer>
    </>
  );
};

export default FooterComponent;
