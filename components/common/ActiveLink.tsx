import { useRouter } from 'next/router';
import Link from 'next/link';

interface ActiveLink {
  href: string,
  as: string | any,
  className: string,
  children: JSX.Element
}

const ActiveLink = (props: ActiveLink) => {
  const { asPath } = useRouter();

  const className =
    asPath === props?.href || asPath === props?.as || asPath.includes(props?.href)
      ? `${props?.className} active`.trim()
      : props?.className;

  return (
    <Link as={props?.as} href={props?.href} shallow={true}>
      <a className={className}>{props?.children}</a>
    </Link>
  );
};

export default ActiveLink;
