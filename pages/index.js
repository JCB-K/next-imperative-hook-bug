import * as React from "react";
import NextLink from "next/link";

const Link = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({}));
  return <a {...props} />;
});

const WrappedLinkComponent = ({ href, ...rest }) => (
  <NextLink href={href}>
    <Link href={href} {...rest} />
  </NextLink>
);

export default function Home() {
  return <WrappedLinkComponent href="Somewhere">Click</WrappedLinkComponent>;
}
