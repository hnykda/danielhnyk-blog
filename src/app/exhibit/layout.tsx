import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibit",
  description: "A curated window into what matters to me.",
  robots: { index: false, follow: false },
};

export default function ExhibitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
