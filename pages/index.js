import * as React from "react";
import NextLink from "next/link";

const Link = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => ({}));
  return <a {...props} />;
});

const WrappedLinkComponent = (props) => <Link as={NextLink} {...props} />;

export default function Home() {
  return <WrappedLinkComponent href="Somewhere">Click</WrappedLinkComponent>;
}
