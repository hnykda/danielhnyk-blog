import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Hnyk",
  description: "Personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PlausibleProvider
          domain="danielhnyk.cz"
          customDomain="https://plan.danielhnyk.cz"
          selfHosted
        >
        <header>
          <div className="container">
            <a href="/">Daniel Hnyk</a>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer>
          <div className="container">
            &copy; {new Date().getFullYear()} Daniel Hnyk
          </div>
        </footer>
        </PlausibleProvider>
      </body>
    </html>
  );
}
