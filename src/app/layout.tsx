import type { Metadata } from "next";
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
      </body>
    </html>
  );
}
