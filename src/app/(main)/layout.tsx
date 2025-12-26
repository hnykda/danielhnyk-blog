export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <nav className="nav container">
          <a href="/" className="nav-name">
            Daniel Hnyk
          </a>
          <div className="nav-links">
            <a href="/about">About</a>
            <a href="/posts">Posts</a>
            <a href="/projects">Projects</a>
          </div>
        </nav>
      </header>
      <main className="container">{children}</main>
      <footer>
        <div className="container">
          &copy; {new Date().getFullYear()} Daniel Hnyk
        </div>
      </footer>
    </>
  );
}
