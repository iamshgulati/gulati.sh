"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Link } from "@radix-ui/themes";

import type { Route } from "~/lib/routes";
import { NextLink } from "~/lib/link";

type HeaderSideNavProps = {
  routes: Route[];
};

export const HeaderSideNav = ({
  routes,
}: HeaderSideNavProps): React.JSX.Element => {
  const pathname: string = usePathname();

  return (
    <React.Fragment>
      {routes.map((route: Route) => (
        <NextLink key={route.slug} href={route.slug} passHref legacyBehavior>
          <Link
            size="2"
            color="gray"
            highContrast={pathname.includes(route.slug)}
          >
            {route.label}
          </Link>
        </NextLink>
      ))}
    </React.Fragment>
  );
};