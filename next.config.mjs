import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    unoptimized: true,
  },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  //
  //
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
  // Add markdown plugins here, as desired
});
export default withMDX(nextConfig);
