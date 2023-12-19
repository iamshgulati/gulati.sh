/** Importing env files here to validate on build */
import "./src/env.mjs";

import bundleAnalyzer from "@next/bundle-analyzer";
import mdx from "@next/mdx";

/**
 * Next.js redirects
 */
// eslint-disable-next-line @typescript-eslint/require-await
const nextRedirects = async () => [
  {
    source: "/professional",
    destination: "/projects",
    permanent: false,
  },
  {
    source: "/personal",
    destination: "/blog",
    permanent: false,
  },
  {
    source: "/get-resume",
    destination: "/files/ShubhamGulati_Resume.pdf",
    permanent: true,
  },
  {
    source: "/github",
    destination: "https://github.com/iamshgulati",
    permanent: true,
  },
  {
    source: "/linkedin",
    destination: "https://www.linkedin.com/in/iamshgulati/",
    permanent: true,
  },
  {
    source: "/twitter",
    destination: "https://twitter.com/iamshgulati",
    permanent: true,
  },
  {
    source: "/threads",
    destination: "https://www.threads.net/@iamshgulati",
    permanent: true,
  },
  {
    source: "/mastodon",
    destination: "https://mastodon.social/@iamshgulati",
    permanent: true,
  },
  {
    source: "/bluesky",
    destination: "https://bsky.app/about/iamshgulati.bsky.social",
    permanent: true,
  },
  // Temporary — To be removed after April 30, 2024.
  {
    source: "/33",
    destination: "/private/33",
    permanent: false,
  },
];

/**
 * Bundle analyzer configuration
 */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/**
 * Next.js MDX configuration
 */
/** @type {import('@next/mdx').NextMDXOptions} */
const mdxConfig = {
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
};
const withMDX = mdx(mdxConfig);

/**
 * Next.js configuration
 */
/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  redirects: nextRedirects,
  experimental: {
    webpackBuildWorker: true,
    mdxRs: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default withBundleAnalyzer(withMDX(nextConfig));
