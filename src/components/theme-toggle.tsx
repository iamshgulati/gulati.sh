import React from "react";
import { IconButton } from "@radix-ui/themes";

import type { Icon } from "./icons";
import { ThemeIcon } from "./theme-icon";
import { ThemeToggleShell } from "./theme-toggle-shell";

type ThemeToggleProps = React.ComponentProps<typeof IconButton> & {
  iconProps?: React.ComponentProps<Icon>;
};

export const ThemeToggle = ({
  iconProps = undefined,
  ...props
}: ThemeToggleProps): React.JSX.Element => {
  return (
    <React.Fragment>
      <ThemeToggleShell>
        <IconButton {...props} size="3" variant="ghost" color="gray">
          <ThemeIcon iconProps={iconProps} />
        </IconButton>
      </ThemeToggleShell>
      {/* <UpdateThemeClasses /> */}
    </React.Fragment>
  );
};
