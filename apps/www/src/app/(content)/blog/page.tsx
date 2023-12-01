import React from "react";
import type { Metadata } from "next";
import { Box, Flex, Heading, Link, Section, Text } from "@radix-ui/themes";

import { PageHeading } from "~/components/page-heading";
import { AllContentRoutes } from "~/lib/contentRoutes";
import { NextLink } from "~/lib/link";

const TITLE = "Blog";
const DESCRIPTION = "Thoughts, stories, and ideas.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function BlogPage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Hero title={TITLE} description={DESCRIPTION} />
      <Section size="2" pb="0">
        <AllBlogPreviews />
      </Section>
    </React.Fragment>
  );
}

const Hero = ({
  title,
  description = undefined,
}: {
  title: string;
  description?: string;
}): React.JSX.Element => (
  <React.Fragment>
    <PageHeading as="h1" mb={{ initial: "3", xs: "5" }}>
      {title}
    </PageHeading>
    {description && (
      <Text as="p" color="gray" size={{ initial: "4", xs: "6" }}>
        {description}
      </Text>
    )}
  </React.Fragment>
);

const AllBlogPreviews = (): React.JSX.Element => {
  return (
    <Flex direction="column" gap="6">
      {AllContentRoutes.blogPosts.pages.map((page) => (
        <Box key={page.slug}>
          <NextLink href={page.slug} passHref legacyBehavior>
            <Link>
              <Heading mb="2">{page.title}</Heading>
            </Link>
          </NextLink>
          <Text as="p" color="gray">
            {page.description}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};
