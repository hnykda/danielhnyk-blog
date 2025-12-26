import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypePrism from "rehype-prism-plus";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
} satisfies NextConfig;

const withMDX = createMDX({
  options: {
    rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
  },
});

export default withMDX(nextConfig);
