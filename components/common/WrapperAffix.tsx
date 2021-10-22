import { Affix } from 'antd';
import cn from 'classnames';

export interface WrapperAffix {

  isMobile: boolean,
  children: JSX.Element,
  active: boolean
}

export const WrapperAffix = ({ isMobile, children, active }: WrapperAffix): JSX.Element => (
  <>
    {isMobile ? (
      <Affix
        className={cn('affix-main', { active })}
      >
        {children}
      </Affix>
    ) : (
      <>{children}</>
    )}
  </>
);