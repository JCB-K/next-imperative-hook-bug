import * as React from "react";
import NextLink from "next/link";

const Link = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({}));

  return <a {...props} />;
});

const WrappedLinkComponent = React.forwardRef(({ href, children }, ref) => {
  return (
    <NextLink href={href}>
      <Link ref={ref} href={href}>
        {children}
      </Link>
    </NextLink>
  );
});

export default function Home() {
  return <WrappedLinkComponent href="Somewhere">Click</WrappedLinkComponent>;
}
