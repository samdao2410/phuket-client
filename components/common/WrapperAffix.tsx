import { Affix } from 'antd';
import cn from 'classnames';

export interface WrapperAffix {

  isMobile: boolean;
  children: JSX.Element;
  active?: boolean;
  offsetTop: number;
}

const WrapperAffix = ({ isMobile, children, active, offsetTop }: WrapperAffix): JSX.Element => (
  <>
  {!isMobile ? (
      <Affix
        offsetTop={offsetTop}
        className={cn('affix-main', { active })}
      >
        {children}
      </Affix>
    ) : (
      <>{children}</>
    )}
  </>
);

export default WrapperAffix;