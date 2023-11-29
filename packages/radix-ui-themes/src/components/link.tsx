import * as React from "react";
import classNames from "classnames";

import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from "../helpers";
import { linkPropDefs } from "./link.props";
import { Text } from "./text";

type LinkElement = React.ElementRef<"a">;
type LinkOwnProps = GetPropDefTypes<typeof linkPropDefs>;
interface LinkProps
  extends PropsWithoutRefOrColor<"a">,
    MarginProps,
    LinkOwnProps {
  asChild?: boolean;
}
const Link = React.forwardRef<LinkElement, LinkProps>((props, forwardedRef) => {
  const {
    children,
    className,
    asChild = false,
    underline = linkPropDefs.underline.default,
    ...linkProps
  } = props;
  return (
    <Text
      {...linkProps}
      ref={forwardedRef}
      asChild
      className={classNames(
        "rt-reset",
        "rt-Link",
        className,
        `rt-underline-${underline}`,
      )}
    >
      {asChild ? children : <a>{children}</a>}
    </Text>
  );
});
Link.displayName = "Link";

export { Link };
export type { LinkProps };
