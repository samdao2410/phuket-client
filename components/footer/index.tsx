import {
  FacebookOutlined,
  YoutubeOutlined
} from '@ant-design/icons';

import { Footer, LeftInfor, RightInfor } from './styled';

const FooterComponent = (): JSX.Element => {
  // const { t } = useTranslation('footer');
  return (
    <>
      <Footer>
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
