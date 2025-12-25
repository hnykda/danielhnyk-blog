declare module "*.mdx" {
  import type { ComponentType } from "react";

  export const metadata: {
    title: string;
    slug: string;
    date: string;
    tags: string[];
  };

  const Component: ComponentType;
  export default Component;
}
