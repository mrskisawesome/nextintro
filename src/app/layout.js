import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Next Routing</h1>
        </header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
        {/* this is where the content of each page is rendered */}
        <footer>My first awesome attempt</footer>
      </body>
    </html>
  );
}
